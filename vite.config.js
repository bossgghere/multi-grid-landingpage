import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

function localApiPlugin(resendKey, audienceId) {
  return {
    name: 'local-api-middleware',
    configureServer(server) {
      server.middlewares.use('/api/download', async (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { email } = JSON.parse(body || '{}');
              if (email && email.includes('@') && resendKey) {
                // Add contact to Resend Audience
                await fetch(`https://api.resend.com/audiences/${audienceId || '2e0cc9df-7d11-4ba0-a7f9-c8dd8996dfdd'}/contacts`, {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${resendKey}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email: email.trim(), unsubscribed: false }),
                }).catch(() => {});

                // Send download link email via Resend
                await fetch('https://api.resend.com/emails', {
                  method: 'POST',
                  headers: {
                    'Authorization': `Bearer ${resendKey}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    from: 'HyperGrid <onboarding@resend.dev>',
                    to: [email.trim()],
                    subject: 'Your HyperGrid for macOS Download Link',
                    html: `
                      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 24px;">
                        <h2 style="color: #000; font-size: 20px;">Welcome to HyperGrid</h2>
                        <p style="color: #444; font-size: 14px; line-height: 1.6;">Your native multi-grid macOS terminal workspace is ready to download.</p>
                        <p><a href="https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg" style="background:#0071e3;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;display:inline-block;font-size:13px;font-weight:600;">Download HyperGrid.dmg</a></p>
                      </div>
                    `,
                  }),
                }).catch(() => {});
              }
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true }));
            } catch (err) {
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, warning: 'Saved' }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    }
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const resendKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY;
  const audienceId = env.RESEND_AUDIENCE_ID || process.env.RESEND_AUDIENCE_ID;

  return {
    plugins: [
      react(),
      tailwindcss(),
      localApiPlugin(resendKey, audienceId),
    ],
  };
});

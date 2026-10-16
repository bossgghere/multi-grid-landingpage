// Vercel Serverless Function to capture email in Resend
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || "2e0cc9df-7d11-4ba0-a7f9-c8dd8996dfdd";

  if (!RESEND_API_KEY) {
    // If no key configured, succeed gracefully and allow download
    return res.status(200).json({ success: true, warning: 'Saved locally' });
  }

  try {
    // 1. Add contact to Resend Audience
    await fetch(`https://api.resend.com/audiences/${AUDIENCE_ID}/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.trim(),
        unsubscribed: false,
      }),
    });

    // 2. Send confirmation email with macOS download link
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'HyperGrid <onboarding@resend.dev>',
        to: [email.trim()],
        subject: 'Your HyperGrid for macOS Download Link',
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px 20px; color: #111;">
            <h2 style="font-size: 22px; font-weight: 700; margin-bottom: 12px; color: #000;">Welcome to HyperGrid</h2>
            <p style="font-size: 15px; line-height: 1.6; color: #444; margin-bottom: 24px;">
              Thank you for requesting early access to HyperGrid for macOS. Run up to 9 native independent terminal sessions in a fluid, resizable hardware-accelerated grid.
            </p>
            <div style="margin: 28px 0;">
              <a href="https://github.com/bossgghere/multi-grid-terminal/releases/latest/download/GridTerm.dmg" 
                 style="background: #0071e3; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 600; display: inline-block;">
                Download HyperGrid.dmg (macOS)
              </a>
            </div>
            <p style="font-size: 12px; color: #888; margin-top: 32px; border-top: 1px solid #eee; pt: 16px;">
              Universal Binary for Apple Silicon (M1/M2/M3/M4) & Intel. Requires macOS 14.0 or later.
            </p>
          </div>
        `,
      }),
    });

    const data = await emailRes.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(200).json({ success: true, warning: 'Saved locally' });
  }
}

export const terminalData = [
  {
    id: 1,
    title: "zsh — frontend",
    path: "~/projects/web",
    command: "npm run dev",
    status: "running",
    color: "cyan",
    lines: [
      { text: "$ npm run dev", type: "cmd" },
      { text: "  VITE v6.2.0 ready in 142 ms", type: "success" },
      { text: "  ➜  Local:   http://localhost:5173/", type: "info" },
      { text: "  ➜  Network: use --host to expose", type: "dim" },
      { text: "  ➜  press h + enter to show help", type: "dim" },
      { text: "✓ 28 modules transformed.", type: "success" },
      { text: "✨ Fast refresh active.", type: "cyan" },
    ]
  },
  {
    id: 2,
    title: "zsh — api-server",
    path: "~/projects/api",
    command: "cargo run",
    status: "running",
    color: "purple",
    lines: [
      { text: "$ cargo run --release", type: "cmd" },
      { text: "   Compiling kadra-server v0.1.0", type: "dim" },
      { text: "    Finished release [optimized] in 1.48s", type: "dim" },
      { text: "   Running `target/release/server`", type: "info" },
      { text: "[INFO] Listening on http://127.0.0.1:8080", type: "success" },
      { text: "[DEBUG] Connected to PostgreSQL pool (10 conns)", type: "dim" },
      { text: "[HTTP] GET /v1/health 200 OK - 0.4ms", type: "success" },
    ]
  },
  {
    id: 3,
    title: "zsh — services",
    path: "~/infra/docker",
    command: "docker compose up",
    status: "running",
    color: "green",
    lines: [
      { text: "$ docker compose up -d", type: "cmd" },
      { text: "[+] Running 3/3", type: "info" },
      { text: " ✔ Network infra_default      Created", type: "success" },
      { text: " ✔ Container redis-cache      Started", type: "success" },
      { text: " ✔ Container postgres-db      Started", type: "success" },
      { text: "[redis] 1:M 16 Oct 14:00:01 * Ready to accept connections", type: "dim" },
      { text: "[postgres] database system is ready to accept connections", type: "dim" },
    ]
  },
  {
    id: 4,
    title: "zsh — git & cli",
    path: "~/projects/kadra",
    command: "git status",
    status: "idle",
    color: "yellow",
    lines: [
      { text: "$ git status -s", type: "cmd" },
      { text: " M Sources/GridTermKit/Views/MainWindowView.swift", type: "yellow" },
      { text: " M Sources/GridTermKit/Views/ToolbarViews.swift", type: "yellow" },
      { text: "?? dist/Kadra.dmg", type: "dim" },
      { text: "$ git log -1 --oneline", type: "cmd" },
      { text: "3acc19c Fix zoom out hit testing and keyCode 27", type: "cyan" },
      { text: "$ claude code --status", type: "cmd" },
      { text: "⚡️ Active AI pair session (claude-3.8-sonnet)", type: "info" },
    ]
  },
  {
    id: 5,
    title: "zsh — worker",
    path: "~/services/queue",
    command: "node worker.js",
    status: "running",
    color: "pink",
    lines: [
      { text: "$ node worker.js", type: "cmd" },
      { text: "[Queue] Connected to RabbitMQ cluster", type: "success" },
      { text: "[Queue] Processing job #10492...", type: "dim" },
      { text: "[Queue] Completed job in 12ms", type: "success" },
    ]
  },
  {
    id: 6,
    title: "zsh — test suite",
    path: "~/tests",
    command: "swift test",
    status: "running",
    color: "blue",
    lines: [
      { text: "$ swift test", type: "cmd" },
      { text: "Test Suite 'GridTermTests' passed at 14:17:06", type: "success" },
      { text: "	 Executed 10 tests, with 0 failures", type: "success" },
      { text: "✔ 100% test pass rate.", type: "cyan" },
    ]
  }
];

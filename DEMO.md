# StockFlow AI — Web Demo Script

Purpose
-------
This file is a ready-to-run demo script for the StockFlow AI web prototype. Use it to run a live walkthrough for investors, customers, or teammates. It includes exact presenter lines, UI actions, sample AI queries, and expected responses (table rendering, recommended actions).

Quick start (PowerShell)
-------------------------
1. Open PowerShell and run:

```powershell
cd 'C:\Users\vikas\OneDrive\Documents\optimize-stock-70-main'
npm install
npm run dev
```

2. Note the local URL printed by Vite (e.g. `http://localhost:8081/`). Open that in a browser to begin the demo.

Smoke checks (1–2 minutes)
- Confirm main routes load: `/`, `/inventory`, `/ai-assistant`, `/playbook`, `/automations`, `/orders`, `/settings`, `/simulator`.
- On `/ai-assistant` click one suggestion (e.g., "Show me my top at-risk products") and confirm the assistant returns a table inside the chat bubble.

Short demo script (6–8 minutes)
--------------------------------
Follow this exact flow and speak the lines in quotes for a polished demo.

1) Intro (0:00 — 0:20)
- Presenter: "Hello — this is StockFlow AI, a prototype for modern inventory operations that blends beautiful design with practical AI. I’ll show the app and the feature I’m most excited about: Conversational Analytics."

2) Role-selection and theme (0:20 — 0:40)
- Action: (If you have a role selection/login screen) pick a role: Owner, Planner, Associate, Dropshipper or Retailer.
- Presenter: "Pick your role — the dashboard and tools adapt to the role so teams see what matters most to them."

3) Dashboard (0:40 — 1:20)
- Action: Click the sidebar `Dashboard` (or go to `/`).
- Presenter: "This is the Dashboard — clean, dark-themed cards surface financial snapshots, aging inventory, actionable playbooks and alerts. Everything is designed for fast decisions."

4) Inventory deep-dive (1:20 — 2:20)
- Action: Click `Inventory` (or go to `/inventory`).
- Presenter: "Here’s Inventory Overview — real-time stock, days in stock, sales rate and blocked cash per SKU. You can filter, search an SKU and spot risky items instantly."
- Quick action: Search for a known SKU from the table and point out the `Blocked Cash` column (₹) and risk badges.

5) Conversational Analytics (2:20 — 4:00) — main highlight
- Action: Click `AI Assistant` (or go to `/ai-assistant`).
- Presenter lead-in: "Now the feature I’m excited about: Conversational Analytics. Instead of building filters and dashboards, just ask the app in plain language."

Sample queries (paste or type, one at a time):
- "Show top 5 SKUs by blocked cash"
  - Expected: a compact table inside the chat bubble showing: SKU | Product | Stock | Blocked cash (₹). The assistant also suggests next steps (reassign stock, clearance offers).
- "Which products are overstocked and what’s the blocked cash?"
  - Expected: table + a short recommendations list (bullet items) for clearance or reallocation.
- "When should I reorder Gaming GPUs?"
  - Expected: a reorder window (dates or days), supplier lead-time note, and confidence/assumptions sentence.

Presenter notes while waiting for responses:
- "Notice it returns structured tables and short recommendations rather than raw JSON or long unstructured text — perfect for scanning and acting fast."

6) Playbooks & Automations (4:00 — 5:00)
- Action: Click `Playbook` then `Automations`.
- Presenter: "Playbooks codify operations — triggers and actions like creating POs or launching promotions. Automations let you run lightweight rules: notify buyers on low stock, auto-cancel stale orders, etc."

7) Orders & Settings (5:00 — 5:45)
- Action: Click `Orders`, then `Settings`.
- Presenter: "Orders shows purchase and sales orders (totals are shown in ₹). Settings is where you configure company defaults like currency and branding."

8) Simulator (5:45 — 6:45)
- Action: Click `Simulator`.
- Presenter: "Use the scenario simulator to test pricing or bundle changes and see the estimated impact on margin and cash flow before you deploy changes."
- Quick action: Change New Price or Bundle Size and click `Simulate`. Point out Margin %, Storage Cost (₹), and Cash Flow (₹) cards.

9) Wrap / Q&A (6:45 — 7:00)
- Presenter: "That’s StockFlow AI — a visual, role-aware inventory app where AI turns data into fast, actionable decisions. I can run a live query or show an end-to-end workflow if you want. Any questions?"

Extended demo (15–20 mins)
- Demonstrate an end-to-end flow: AI assistant identifies top at-risk SKU → open SKU in Inventory → create a Playbook or Automation to restock/clear → run Simulator to test the financial impact.
- Show how a role-based layout simplifies each persona’s tasks (Owner sees KPIs, Planners see reorder suggestions, Associates see picking lists).

Exact copy/paste assistant prompts
- "Show top 5 SKUs by blocked cash"
- "Which products are overstocked and what’s the blocked cash?"
- "When should I reorder Gaming GPUs?"
- "Show me my top at-risk products"
- "What's my current blocked cash?"

What to highlight (benefits)
- Tables inside chat bubbles for quick SKU scanning.
- Actionable next steps (reassign stock, clearance offers, PO creation).
- Role-aware UI (less noise for each user type).
- Simulator to validate pricing or bundle decisions before execution.

Tech note (for technical Q&A)
- The assistant is a constrained conversational model (prototype: Gemini) that queries a Supabase-backed dataset of inventory and order metrics. Responses are constrained to inventory topics and formatted into tables and short lists to avoid raw JSON/markdown noise.
- Chat history is short and used to keep context for follow-up questions. Responses are rendered as preformatted text or as small HTML tables when the content is tabular.

Demo reliability checklist
- Confirm Vite dev server is running and note URL/port.
- Pre-run the sample AI queries and verify the table rendering.
- Close heavy apps and open browser in a fresh profile for consistent styling.

Optional deliverables I can add to the repo
- `DEMO_SLIDES.md` — a simple slide outline mapped to the script above.
- `PRESENTER_CHEAT_SHEET.md` — one-page bullets with only the lines to read and the exact clicks.
- A recorded example screencast (I can prepare a script for a recorder to follow).

---
If you want this added to the repo, tell me which optional deliverable to create next and I will add it.

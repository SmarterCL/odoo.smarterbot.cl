# 🚀 SmarterOS — Monorepo Workspace 2025

**Owner:** SmarterCL  
**Updated:** 2025-11-29  
**Structure:** Monorepo with 17 Git submodules + multi-agent orchestration

---

## 📁 Repository Structure

```
/Users/mac/dev/2025/
├── .gitmodules              # Submodule registry (17 repos)
├── smarteros-agents/        # 🧠 Multi-agent orchestrator (Gemini, Copilot, Codex)
├── tools/                   # Deployment scripts (Vercel, n8n, Cloudflare, etc.)
│   └── scripts/
│       └── FIX-VERCEL-COMPLETE.sh
├── odoo-deploy/             # Odoo deployment configs
│
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Submodules (17 repos tracked via .gitmodules)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
│
├── SmarterOS/               # Core OS specs
├── Sologist/                # Sologist integration
├── smarteros-os/            # OS runtime
├── smarteros-specs/         # Master specs repository
│
├── dkcompose/               # Docker Compose orchestration
├── smartercl-odoo/          # Odoo ERP customizations
│
# Frontend Apps
├── app.smarterbot.cl/       # Main dashboard (Next.js + Clerk)
├── app.smarterbot.store/    # E-commerce app (Next.js + Clerk)
├── login.smarterbot.store/  # Auth service
│
# Landing Pages & Marketing
├── smarterbot.cl/           # Corporate site
├── smarterbot.store/        # Store landing
├── fulldaygo.smarterbot.cl/ # FullDayGo service
├── tienda.smarterbot.cl/    # Tienda variant
├── nunex.lat/               # NUNEX project
│
# Backend Services
├── api.smarterbot.cl/       # FastAPI backend (contacts, webhooks)
├── crm.smarterbot.cl/       # CRM service
└── ia.smarterbot.cl/        # AI/ML service
```

---

## 🧠 Multi-Agent System (`smarteros-agents/`)

Tri-agent orchestration for automated development and deployment:

### Agents

1. **🎯 Director (Gemini 2.0 Flash Thinking)**  
   - Strategic planning and dependency analysis
   - Consumes 10+ MCPs (Shopify, Supabase, Metabase, Slack, Notion, etc.)
   - Spec: `smarteros-agents/director-gemini.yml`

2. **✍️ Writer (GitHub Copilot GPT-4)**  
   - Code generation (TypeScript, Python, SQL)
   - Style consistency and test generation
   - Spec: `smarteros-agents/writer-copilot.yml`

3. **🛠️ Executor (Codex CLI)**  
   - Applies patches, runs builds, deploys to VPS
   - Manages systemctl, Docker Compose, rsync
   - Spec: `smarteros-agents/executor-codex.yml`

4. **🛡️ Security Reviewer (Claude 3.5 Sonnet)**  
   - OWASP Top 10 scanning, secret detection
   - Blocks dangerous PRs automatically
   - Spec: `smarteros-agents/reviewer-security.yml`

5. **🏥 Health Monitor (Gemini Flash)**  
   - Container health (CPU, RAM, logs)
   - Anomaly detection and auto-recovery proposals
   - Spec: `smarteros-agents/monitor-health.yml`

### Orchestration

- **Coordinator:** `smarteros-agents/orchestrator.yml`
- **MCP Registry:** `smarteros-agents/mcp-registry.yml` (31 providers across 6 tiers)
- **Core Architecture:** `smarteros-agents/CORE-GRAPH.md` (412 lines)

### Workflow

```
Trigger (git push, issue, alert)
    ↓
🎯 Gemini analyzes context → generates plan
    ↓
✍️ Copilot generates code patches
    ↓
🛠️ Codex applies + builds + deploys
    ↓
🛡️ Security reviews changes
    ↓
🏥 Health monitors runtime
```

---

## 🔗 Submodules Management

### Initial Clone

```bash
git clone https://github.com/SmarterCL/smarteros-specs.git 2025
cd 2025
git submodule update --init --recursive
```

### Update All Submodules

```bash
git submodule foreach git pull origin main
```

### Update Specific Submodule

```bash
cd app.smarterbot.cl
git pull origin main
cd ..
git add app.smarterbot.cl
git commit -m "chore: update app.smarterbot.cl submodule"
```

### Add New Submodule

```bash
git submodule add https://github.com/SmarterCL/<new-repo>.git <path>
git commit -m "feat: add <new-repo> submodule"
```

---

## 🛠️ Tools & Scripts (`tools/scripts/`)

### Deployment

- **`FIX-VERCEL-COMPLETE.sh`**: Configures Vercel env vars and deploys `app.smarterbot.{cl,store}`
- **`configure-vercel-complete.sh`**: Vercel project setup
- **`configure-dns-cloudflare.sh`**: Cloudflare DNS automation
- **`configure-dns-mainkey.sh`**: Mainkey DNS setup

### Services

- **`chatwoot-smarter-config.sh`**: Chatwoot integration
- **`configure-n8n-supabase.sh`**: n8n + Supabase workflows
- **`create-n8n-workflow.sh`**: n8n workflow generator
- **`check-metabase-dbs.sh`**: Metabase database health check

---

## 📦 Key Technologies

| Service                | Tech Stack                          | Repo                     |
|------------------------|-------------------------------------|--------------------------|
| Dashboard              | Next.js 15, Clerk, Tailwind         | `app.smarterbot.cl`      |
| Store                  | Next.js 15, Clerk, React Hook Form  | `app.smarterbot.store`   |
| API Backend            | FastAPI, Supabase, PostgreSQL       | `api.smarterbot.cl`      |
| CRM                    | Next.js, Supabase, n8n              | `crm.smarterbot.cl`      |
| AI/ML Service          | Python, OpenAI, Anthropic           | `ia.smarterbot.cl`       |
| Orchestration          | Docker Compose, systemd             | `dkcompose`              |
| ERP                    | Odoo 17, PostgreSQL                 | `smartercl-odoo`         |
| Agent Orchestration    | YAML specs, GitHub Actions, Vault   | `smarteros-agents`       |

---

## 🔐 Secrets Management

All secrets managed via **HashiCorp Vault**:
- Base path: `smarteros/mcp/`
- Policies: `mcp-{provider}-read`
- Audit: Enabled
- Registry: `smarteros-agents/mcp-registry.yml`

### Protected Keys

- `CLERK_SECRET_KEY`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `VERCEL_AUTOMATION_BYPASS_SECRET`
- `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_ANON_KEY`
- API tokens: Shopify, Metabase, n8n, OpenAI, Anthropic, Google

---

## 🚢 Deployment Flow

### Development → Production

1. **Local Development**
   ```bash
   cd app.smarterbot.cl
   pnpm dev
   ```

2. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: new feature"
   git push origin main
   ```

3. **Automatic Deployment**
   - GitHub Actions triggers `orchestrator.yml`
   - Gemini validates changes
   - Copilot generates additional code if needed
   - Codex builds and deploys to Vercel/VPS
   - Security reviews PR
   - Health monitors post-deploy

### Manual Deploy (VPS)

```bash
cd /root/<service>
git pull origin main
pnpm build
systemctl restart <service>
```

---

## 📊 Monitoring & Logs

- **Health Monitor:** Checks every 5 minutes
- **Logs:** `/var/log/smarteros/`
- **Metrics:** Metabase dashboards
- **Alerts:** Slack + n8n webhooks

---

## 🤝 Contributing

1. Clone with submodules: `git clone --recursive`
2. Create feature branch: `git checkout -b feature/<name>`
3. Work in specific submodule: `cd <submodule>`
4. Commit changes: `git commit` (inside submodule)
5. Update parent: `cd .. && git add <submodule> && git commit`
6. Push both: `git push` (in submodule) + `git push` (in parent)

---

## 📝 Notes

- **Never commit secrets** to any repository
- Use Vault for all sensitive data
- Update submodules regularly: `git submodule update --remote`
- Run security reviews before merging to `main`
- Monitor container health after deployments

---

## �� Contact

**Organization:** SmarterCL  
**GitHub:** https://github.com/SmarterCL  
**Repos:** 17 submodules + parent workspace

---

**Last Updated:** 2025-11-29  
**Workspace Path:** `/Users/mac/dev/2025`

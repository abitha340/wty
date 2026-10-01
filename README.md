# ⚡ Wyt (WTY) — Trademark Intelligence & Data API Platform

> **The Trademark Data Layer for Modern Applications.** Programmatic access to search, verify, and retrieve structured trademark records across **20+ Lakh catalog entries** with sub-15ms guaranteed SLA.

---

## 🌟 Key Features

- **20L+ Structured Trademark Dataset**: Cross-indexed across all 45 Nice International Classes, official Indian Intellectual Property Office gazettes, and international registries.
- **3 Deterministic Search Engines**:
  - `Exact Match`: High-precision statutory identification and exact brand name clearance.
  - `Starts With`: Instant prefix search and live autocomplete suggestions.
  - `Contains`: Broad substring, phonetic, and keyword similarity search.
- **Data-Driven Intelligence Suite**:
  - Live 24-hour query volume & latency curves (sub-15ms execution).
  - Real-time Nice Classification sector density bars (Classes 1–45).
  - Trademark registration status distribution breakdown (Registered, Pending, Objected, Opposed).
- **Interactive 3D Visual Systems**:
  - 3D Tilted Rotating Cylinder Ribbon Carousel showcasing Enterprise Workflows.
  - Continuous Marquee Carousel for the 8 Structured Trademark Dimensions.
  - Interactive Luminous Timeline Flow for air-gapped data transmission.
- **OpenAI-Style Security Architecture**:
  - Permanent secret key masking (`wyt_live_••••••••••••3a8b`).
  - One-time secret key generation modal with instant clipboard copy and security disclaimers.
  - Sealed PostgreSQL Port 5432 with 0% direct database credential exposure.
- **Credit-Based Pay-As-You-Query Usage Model**:
  - 1 Credit = 1 Sub-15ms search request.
  - Non-expiring credit tiers (Starter, Pro Growth, Enterprise Scale).
- **Dynamic Dual-Mode Theme Engine**:
  - Bespoke color palette: Light Cream (`#E5EFC1`), Soft Mint (`#A2D5AB`), Teal (`#39AEA9`), and Muted Blue-Gray (`#557B83`).
  - Seamless toggle between **🌙 Dark** and **☀️ Bright** modes.

---

## 🏗️ Architecture & Technology Stack

```
wyt/
├── backend/                  # FastAPI + SQLAlchemy + PostgreSQL / SQLite fallback
│   ├── app/
│   │   ├── routes/           # REST API Endpoints (trademarks, auth, usage, credits)
│   │   ├── models.py         # SQLAlchemy Database Models
│   │   ├── schemas.py        # Pydantic Schemas & Validation
│   │   ├── database.py       # Neon DB Connection & Local Fallback Pool
│   │   └── seed_data.py      # Trademark Dataset Seeder (20L+ records)
│   ├── requirements.txt      # Python Dependencies
│   └── run.py                # Backend Uvicorn Runner (Port 8000)
│
└── frontend/                 # React.js + Vite + Lucide-React
    ├── src/
    │   ├── components/       # UI Components (Hero, Features, Explorer, Dashboard, Docs)
    │   ├── App.jsx           # Application State & Theme Controller
    │   ├── main.jsx          # React DOM Entrypoint
    │   └── index.css         # Glassmorphism & Color Token Design System
    ├── package.json          # Node Dependencies & Scripts
    └── vite.config.js        # Vite Build Configuration (Port 5173)
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js**: v18.0+
- **Python**: v3.9+
- **Git**

### 1. Clone Repository
```bash
git clone https://github.com/abitha340/wyt.git
cd wyt
```

### 2. Backend Setup
```bash
cd backend
python -m pip install -r requirements.txt
python run.py
```
*Backend runs on `http://localhost:8000` (Swagger Interactive API Documentation at `http://localhost:8000/docs`).*

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```
*Frontend runs on `http://localhost:5173`.*

---

## 📡 Core API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/v1/trademarks` | Search 20L+ records with query filters (`query`, `class`, `status`, `search_mode`, `page`, `limit`) |
| `GET` | `/api/v1/trademarks/{app_no}` | Retrieve full structured profile by application number |
| `GET` | `/api/v1/trademarks/analytics/stats` | Real-time classification density, status ratios, and 24h query telemetry |
| `POST` | `/api/v1/auth/keys` | Generate a new secret API key (one-time reveal) |
| `GET` | `/api/v1/auth/keys` | List active credentials in masked format |
| `DELETE` | `/api/v1/auth/keys/{id}` | Revoke an authorized credential |
| `GET` | `/api/v1/usage/dashboard` | Developer metrics, remaining quota, and request audit trail |
| `POST` | `/api/v1/credits/purchase` | Top-up API query balance |

---

## 🔒 Security Policy
- **Zero Database Exposure**: Database ports are sealed behind an air-gapped gateway.
- **Client Security**: API credentials are cryptographically masked in all client views and audit logs.

---

## 📄 License
This project is licensed under the MIT License.

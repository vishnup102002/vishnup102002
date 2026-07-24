<div align="center">

<img src="./header.svg" width="850" alt="Vishnu P Brick Banner" />

<br/>

<img src="./terminal.svg" width="850" alt="Terminal Animation" />

</div>

---

## 🔨 Currently Building

**LegalMind** — WhatsApp legal advisory bot | LangGraph + Neo4j + Qdrant
> Core orchestration working. Debugging Twilio voice pipeline latency.

---

> [!IMPORTANT]
> ### 📐 Engineering Manifesto — Instructions Included
>
> **Design for Failure:** I treat production as inherently unstable. Across all my systems, I build in modular fallbacks — whether it's multi-tier scraping for Career-Pilot's job matching or DXF parser fallback chains in ReAct reasoning loops.
>
> **State-Aware Execution:** I prioritize data integrity. From LegalMind's Neo4j state management to GestureLearn's WebRTC session tracking and Kadal Aayus's offline telemetry caching, I implement checkpointing so systems recover from interruptions.
>
> **Objective Validation:** I favor quantifiable metrics over manual testing. Whether it's an LLM-as-a-Judge scoring Career-Pilot agent reasoning, geometric algorithms in vision pipelines, or sensor fusion validation in maritime safety systems.
>
> **Always Ship:** My ultimate metric is deployment. I prioritize getting functional builds into production — from HuggingFace Spaces deployments to Firebase-backed mobile apps — over endless polishing.

---

## 🧰 Brick Inventory (Tech Stack)

**AI & Core Domains**
![LangGraph](https://img.shields.io/badge/LangGraph-00C853?style=for-the-badge&logo=langchain&logoColor=white)
![GraphRAG](https://img.shields.io/badge/GraphRAG-red?style=for-the-badge&logo=neo4j&logoColor=white)
![LLM-Judge](https://img.shields.io/badge/LLM_Judge-facc15?style=for-the-badge&logoColor=black)
![Model Context Protocol](https://img.shields.io/badge/MCP-Active-10b981?style=for-the-badge&logo=anthropic&logoColor=white)

**Languages & Frameworks**
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-05998B?style=for-the-badge&logo=fastapi&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)

**Infrastructure**
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Neo4j](https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![WebRTC](https://img.shields.io/badge/WebRTC-E33E1A?style=for-the-badge&logo=webrtc&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

---

## 🧱 Featured MOCs (My Own Creations)

### ⚖️ [LegalMind](https://github.com/vishnup102002/LegalMind) `🚧 In Progress`
* **Core Idea:** An Asymmetrical Justice Engine that translates colloquial regional voice notes into structured legal roadmaps with a token-level Citation Shield.
* **Stack:** `LangGraph` • `Neo4j` • `Qdrant` • `Twilio API` • `Groq`
* **Status:** Core LangGraph orchestration and hybrid retrieval (Neo4j + Qdrant) are functional. Currently debugging voice-to-voice Twilio pipeline.

<div align="center">
<img src="./assests/diagrams/legalmind-flow.svg" width="100%" alt="LegalMind Architecture Diagram" />
</div>

### ✈️ [Career-Pilot](https://github.com/vishnup102002/Career-Pilot) — Autonomous Job-Hunting Agent
* **Core Idea:** Stateful multi-agent system executing local semantic resume parsing, job matching, and automated applications via background scheduling.
* **Stack:** `Python` • `LangGraph` • `FastAPI` • `MCP` • `Docker`
* **Features:** 4-agent pipeline scoring job listings, FastMCP + Playwright server scraping, SendGrid notifications, and SQLite deduplication.
* **Read More:** [Technical Architecture Teardown](https://gist.github.com/vishnup102002/a53a2aa0a17ce1d4d26f6e94c8adc3ca) • [Live Space Demo](https://huggingface.co/spaces/Vishnuporkulath/career-pilot)

<div align="center">
<img src="./assests/diagrams/career-pilot-flow.svg" width="100%" alt="Career-Pilot Architecture Diagram" />
</div>

### 🎨 [GestureLearn](https://github.com/vishnup102002/gesturelearn) — Collaborative Real-Time Drawing Workspace
* **Core Idea:** Interactive room workspace with WebRTC media streaming and low-latency Socket.io signaling. Recognizes 21 hand landmarks (via MediaPipe) for real-time air-gesture canvas sketching.
* **Stack:** `React` • `WebRTC` • `Socket.io` • `MediaPipe` • `Node.js` • `WebAssembly`
* **Read More:** [Live Demo](https://gesturelearn.vercel.app)

<div align="center">
<img src="./assests/diagrams/gesturelearn-flow.svg" width="100%" alt="GestureLearn Architecture Diagram" />
</div>

### 🌊 [Kadal Aayus](https://github.com/vishnup102002/kadal_aayus) — Offline-First Sea Safety App
* **Core Idea:** Cross-platform sea safety application with Firebase telemetry streaming, Mapbox tracking, 6-day weather matrix caching, and localized Malayalam TTS for offline voice safety alerts.
* **Stack:** `Flutter` • `Firebase` • `Mapbox API` • `Local TTS Engines`

---

## 🔨 Experience Breakdown

#### 👾 Independent Builder | *Personal Projects (May 2026 — Present)*
* **Built** Career-Pilot — autonomous 4-agent job-hunting system using LangGraph, FastMCP, and Docker.
* **Building** LegalMind — WhatsApp legal advisory bot using GraphRAG (Neo4j + Qdrant) and Twilio.
* **Containerised** both projects with Docker for production deployment on HuggingFace Spaces.

#### ⚡ R&D Intern — AI/Agentic Systems | *Bluecast Technologies (Jan 2026 — Apr 2026)*
* **Engineered** a DXF-to-JSON parser using `ReAct` reasoning loops to automate room classifications for indoor navigation.
* **Created** custom geometric heuristics to extract spatial door-connectivity graphs, slashing API costs by **75%**.
* **Developed** a schema validation layer producing clean navigation-ready JSON outputs without post-processing.

#### 🎓 MCA Student | *TKM College of Engineering (Jul 2024 — Jan 2026)*
* **Optimized** core Data Structures & Algorithms (DSA) systems in Java for low-complexity execution.
* **Architected** real-time browser-based WebRTC signaling workspaces integrated with MediaPipe hand-tracking models.
* **Engineered** offline-first sea-safety telemetry caches and localized Malayalam TTS audio alerts for maritime safety.

---

## 📜 Certifications

| Credential | Issuing Organization | Verification |
| :--- | :--- | :--- |
| **Generative AI & AI Agents Professional** | ![AWS](https://shields.io) | [Verify](#) |
| **Generative AI & AI Agents Specialist** | ![IBM](https://shields.io) | [Verify](#) |
| **AI Agents Using RAG & LangChain** | ![IBM](https://shields.io) | [Verify](#) |
| **Data Structures & Algorithms** | **NPTEL (IIT Kanpur)** | [Verify](#) |



---

## 📈 Activity & Language Breakdown

<p align="center">
  <img src="https://github-readme-stats-anuraghazra1.vercel.app/api/top-langs/?username=vishnup102002&layout=compact&theme=react&hide_border=true" width="55%" alt="Top Languages" />
</p>

<p align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=vishnup102002&theme=react-dark&area=true&hide_border=true" width="100%" alt="Vishnu's Contribution Graph" />
</p>

---

## 📬 Let's Connect!

* 📧 Email: **[vishnup22102002@gmail.com](mailto:vishnup22102002@gmail.com)**
* 💼 LinkedIn: **[linkedin.com/in/vishnup22102002](https://www.linkedin.com/in/vishnup22102002/)**
* 🌐 Portfolio Website: **[vishnup.vercel.app](https://vishnup.vercel.app)**
* 📄 Resume: **[Resume PDF (Download)](https://vishnup.vercel.app/assets/VISHNU.pdf)**
* 🤗 HuggingFace Space: **[Vishnuporkulath](https://huggingface.co/Vishnuporkulath)**

<div align="center">
<sub>Assembled brick by brick · Vishnu P © 2026</sub>
</div>

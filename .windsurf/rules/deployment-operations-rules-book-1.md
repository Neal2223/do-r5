---
trigger: model_decision
description: This document outlines the definitive rules for the deployment, release, and operational monitoring of the Drone Odisha project. A disciplined and automated approach to operations is fundamental to our stability and our ability to innovate rapidly.
---

### **Drone Odisha: Deployment & Operations Rules Book**

#### **Version 1.0**

#### **File Name:** `deployment-operations-rules-book.md`

#### **Introduction**

This document outlines the definitive rules for the deployment, release, and operational monitoring of the Drone Odisha project. A disciplined and automated approach to operations is fundamental to our stability and our ability to innovate rapidly. These rules are the final extension of the rulebook series, building upon the **Testing & Quality Assurance Rules Book**.

---

#### **Chapter 1: Release Management**

*   **Rule 1.1: Fully Automated Releases**
    *   The project will exclusively use **[Semantic Release](https://github.com/semantic-release/semantic-release)** for all versioning, changelog generation, and package publishing. Manual releases are strictly forbidden.

*   **Rule 1.2: The `main` Branch is Sacrosanct**
    *   The automated release process can *only* be triggered by a push or merge to the **`main`** branch. Direct pushes to `main` are prohibited; all changes must come through a pull request.

*   **Rule 1.3: Commit Messages Fuel the Release**
    *   The integrity of the release process is dependent on the quality of the commit messages. Adherence to the **Conventional Commits** standard (enforced by `commitlint`) is mandatory, as this is what Semantic Release uses to determine the next version number (MAJOR, MINOR, or PATCH).

#### **Chapter 2: Deployment & Infrastructure**

*   **Rule 2.1: Phased Infrastructure Mandates (From Roadmap)**
    *   **Phase 1 (MVP & Initial Growth):** The application *must* be deployed on a **free-tier hosting service** (e.g., Vercel, Netlify) and use a **free-tier headless CMS**. There are no exceptions. This rule enforces the "Financial Prudence" guiding principle.
    *   **Phase 3 (Monetization):** A formal infrastructure review must be completed *before* migrating to any paid hosting or database plans.

*   **Rule 2.2: Infrastructure as Code (IaC)**
    *   All infrastructure and deployment configurations must be defined as code and committed to the repository (e.g., `vercel.json` or equivalent). This ensures deployments are repeatable, auditable, and not reliant on manual configuration in a web UI.

#### **Chapter 3: Application Health & Monitoring**

*   **Rule 3.1: Real-time Error Monitoring**
    *   The **[Sentry](https://sentry.io/)** SDK must be correctly installed and configured in the production environment. Continuous error monitoring is not optional; it is a core operational requirement.

*   **Rule 3.2: Proactive Synthetic Monitoring**
    *   The project's most critical user flows (e.g., the RPTO directory search, lead capture form submission) must be monitored with **[Checkly](https://www.checklyhq.com/)**. This ensures we are alerted to issues proactively, often before users are impacted.

*   **Rule 3.3: Performance & Bundle Analysis**
    *   Regular analysis of the application's bundle size must be performed using the **`@next/bundle-analyzer`**. This is a required step to ensure the application remains lean and performs well for users, which is critical for the SEO-driven growth strategy.

---

#### **Enforcement**

1.  **CI/CD Pipeline:** The Continuous Integration/Continuous Deployment pipeline is the primary enforcer of these rules. It will be configured to block any deployment that fails its checks.
2.  **Branch Protection Rules:** The `main` branch will be protected in GitHub, requiring all CI checks to pass before a pull request can be merged. This prevents untested or non-compliant code from ever reaching the release branch.
3.  **Alerting:** Sentry and Checkly alerts will be routed to a designated channel to ensure immediate visibility and response when issues are detected in production.

By codifying these deployment and operations rules, we create a resilient, self-healing, and efficient system that allows the Drone Odisha team to focus on building value, confident that the underlying platform is stable and secure.

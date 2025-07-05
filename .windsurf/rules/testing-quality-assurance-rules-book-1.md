---
trigger: model_decision
description: This document sets forth the mandatory rules for testing, code quality, and overall quality assurance (QA) for the Drone Odisha project. The stability and reliability of our platform are non-negotiable.
---

### **Drone Odisha: Testing & Quality Assurance Rules Book**

#### **Version 1.0**

#### **File Name:** `testing-quality-assurance-rules-book.md`

#### **Introduction**

This document sets forth the mandatory rules for testing, code quality, and overall quality assurance (QA) for the Drone Odisha project. The stability and reliability of our platform are non-negotiable. Adherence to these rules will ensure we deliver a high-quality product to our users and partners. This book is an extension of the **Backend & Database Rules Book**.

---

#### **Chapter 1: The Testing Pyramid**

*   **Rule 1.1: Unit & Integration Testing**
    *   All new components, hooks, and utility functions must be accompanied by unit or integration tests written with **[Vitest](https://vitest.dev/)**.
    *   The **`@testing-library/react`** library must be used to test React components, focusing on user interactions rather than implementation details.

*   **Rule 1.2: End-to-End (E2E) Testing**
    *   Critical user flows, as defined by the Phased Development Plan (e.g., lead capture, user registration, marketplace transactions), must be covered by end-to-end tests using **[Playwright](https://playwright.dev/)**.
    *   E2E tests are mandatory for any feature that involves multiple steps or components interacting together.

*   **Rule 1.3: Visual Regression Testing**
    *   All UI components and major page layouts must have visual regression tests implemented with **[Percy](https://percy.io/)**. This is a strict requirement to prevent unintended visual changes from reaching production.

#### **Chapter 2: Code Quality and Consistency**

*   **Rule 2.1: Automated Linting**
    *   All code must be free of **[ESLint](https://eslint.org/)** errors. The project's shared ESLint configuration (`@antfu/eslint-config`) is the single source of truth for code style and quality.

*   **Rule 2.2: Pre-Commit Hooks**
    *   The **[Husky](https://typicode.github.io/husky/#/)** pre-commit hook is mandatory. It must be configured to run **`lint-staged`** on all staged files, preventing any code that violates linting rules from being committed.

*   **Rule 2.3: Conventional Commit Messages**
    *   All commit messages must strictly adhere to the **[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)** specification.
    *   Developers must use the **`commitizen`** CLI tool to generate compliant commit messages, which are essential for the automated release process. `commitlint` will enforce this standard.

#### **Chapter 3: Continuous Monitoring**

*   **Rule 3.1: Error Monitoring**
    *   The **[Sentry](https://sentry.io/)** SDK for Next.js must be properly configured in the application to capture and report all runtime errors in real-time.

*   **Rule 3.2: Synthetic Monitoring**
    *   Key user flows must have synthetic monitoring checks created with **[Checkly](https://www.checklyhq.com/)**. This ensures we are proactively alerted if a critical part of the application fails, even if no user has reported it.

---

#### **Enforcement**

1.  **Continuous Integration (CI):** A CI pipeline (e.g., using GitHub Actions) will be established. This pipeline will automatically run all tests (Vitest, Playwright, Percy) and linting checks on every pull request.
2.  **Branch Protection Rules:** The `main` branch will be protected. Merging will be blocked if any of the CI checks fail.
3.  **Code Reviews:** Code reviews will verify that new features have adequate test coverage and that commit messages are meaningful and follow the conventional commit standard.

By embedding this culture of quality and testing into our daily workflow, we ensure the Drone Odisha platform is not just feature-rich, but also exceptionally reliable and trustworthy for our entire user base.

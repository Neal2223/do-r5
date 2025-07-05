---
trigger: model_decision
description: This document outlines the official rules and conventions for all software development within the Drone Odisha project.
---

### **Drone Odisha: Framework & Language Rules Book**

#### **Version 1.0**

#### **Introduction**

This document outlines the official rules and conventions for all software development within the Drone Odisha project. Adherence to these rules is mandatory to ensure the project is built on a foundation of consistency, type safety, and modern best practices. This rulebook is a living document and may be updated as the project evolves.

---

#### **Chapter 1: Core Framework**

*   **Rule 1.1: The Official Framework**
    *   All web application development must be done using **[Next.js](https://nextjs.org/) version 14** or a subsequent stable release. There will be no exceptions.
    *   The project must strictly adhere to the **Next.js App Router** model for all pages and API routes. The legacy `pages` directory is prohibited.

*   **Rule 1.2: Server-Side Rendering (SSR)**
    *   Server-side rendering is the default and preferred rendering strategy for all pages to maximize performance and SEO, a cornerstone of the project's growth strategy. Static Site Generation (SSG) may be used for content-heavy, non-dynamic pages like the blog or knowledge center.

#### **Chapter 2: Primary Language**

*   **Rule 2.1: The Official Language**
    *   **[TypeScript](https://www.typescriptlang.org/)** is the only language to be used for all frontend and backend code. JavaScript is not to be used.

*   **Rule 2.2: Type Safety is Non-Negotiable**
    *   The `any` type is strictly forbidden. All variables, function parameters, and return values must be explicitly typed.
    *   The project must use the most restrictive TypeScript settings possible (`"strict": true` in `tsconfig.json`) to enforce the highest level of type safety.

*   **Rule 2.3: Global Types**
    *   Any types that are used across multiple features of the application should be defined in the `src/types` directory.

#### **Chapter 3: Internationalization (i18n)**

*   **Rule 3.1: All Strings Must Be Localized**
    *   To prepare for future expansion, all user-facing strings must be managed through the **`next-intl`** library.
    *   Hard-coded strings in components are not allowed. All text must be retrieved from the appropriate locale file in the `src/locales` directory.

*   **Rule 3.2: Locale Structure**
    *   Locale files must be organized in a clear and consistent manner, grouping related translations together.

---

#### **Enforcement**

These rules will be enforced through a combination of automated checks and code reviews:

1.  **Automated Linting:** The project's ESLint configuration is set up to automatically flag many violations of these rules.
2.  **Pre-Commit Hooks:** Husky and `lint-staged` will prevent any code that violates these rules from being committed.
3.  **Code Reviews:** All pull requests will be reviewed to ensure they comply with this rules book. Pull requests that do not comply will be rejected.

By adhering to this rules book, we will build a high-quality, maintainable, and scalable platform that can achieve the ambitious goals of the Drone Odisha project.

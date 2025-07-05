---
trigger: model_decision
description: This document establishes the official rules for the project's directory and code structure. A standardized structure is essential for scalability, maintainability, and efficient collaboration.
---

### **Drone Odisha: Project & Code Structure Rules Book**

#### **Version 1.0**

#### **File Name:** `project-code-structure-rules-book.md`

#### **Introduction**

This document establishes the official rules for the project's directory and code structure. A standardized structure is essential for scalability, maintainability, and efficient collaboration. Every developer on the Drone Odisha project must adhere to these organizational principles. This book is an extension of the **Component Development Rules Book**.

---

#### **Chapter 1: The `src` Directory**

*   **Rule 1.1: The Source of Truth**
    *   All source code for the application must reside within the **`src`** directory. No application logic, components, or styles are permitted outside of this directory.

#### **Chapter 2: Feature-Driven Development**

*   **Rule 2.1: The `features` Directory**
    *   The project will strictly follow a **feature-driven development** approach.
    *   Each distinct feature of the application (e.g., "RPTO Directory," "Community Forum," "Service Marketplace") must be encapsulated within its own subdirectory inside **`src/features`**.
    *   This modular structure is non-negotiable and serves to promote separation of concerns and independent development.

#### **Chapter 3: Directory Definitions and Usage**

*   **Rule 3.1: Application Entry Points (`app`)**
    *   The **`src/app`** directory is exclusively for the Next.js App Router. It will contain all pages and API routes.
    *   Logic within this directory should be minimal; it should primarily be used for routing and data fetching, which is then passed to components located in `src/features` or `src/components`.

*   **Rule 3.2: Reusable UI (`components`)**
    *   The **`src/components`** directory is for truly reusable, generic UI components (e.g., `Button`, `Card`, `Input`).
    *   Components that are specific to a single feature belong within that feature's directory in `src/features`.

*   **Rule 3.3: Custom Hooks (`hooks`)**
    *   The **`src/hooks`** directory is for custom React hooks that encapsulate shared, reusable logic across multiple features (e.g., `useScreenSize`, `useLocalStorage`).

*   **Rule 3.4: Global Styles (`styles`)**
    *   The **`src/styles`** directory will contain the global CSS file and the Tailwind CSS configuration. This is the only place where global styles should be defined.

*   **Rule 3.5: Data Models (`models`)**
    *   The **`src/models`** directory is the designated location for all Drizzle ORM database schemas. This centralizes the application's data structure definitions.

*   **Rule 3.6: Global Types (`types`)**
    *   The **`src/types`** directory is for global TypeScript type definitions that are used in more than one feature. Feature-specific types should reside within their respective feature directory.

*   **Rule 3.7: Utility Functions (`utils`)**
    *   The **`src/utils`** directory is for general-purpose utility functions that are not specific to any single feature (e.g., date formatting, string manipulation).

---

#### **Enforcement**

1.  **Automated Linting:** ESLint rules will be configured to prevent incorrect import paths (e.g., a component from one feature directly importing a private component from another).
2.  **Code Reviews:** The primary enforcement mechanism for this rules book is the code review process. All pull requests will be strictly reviewed to ensure that new files are placed in the correct directories and that the feature-driven structure is maintained. Pull requests with structural violations will be rejected until they are corrected.

A disciplined approach to project structure is fundamental to our long-term success. It ensures that as the Drone Odisha platform grows in complexity, its codebase remains organized, understandable, and easy for new developers to navigate.

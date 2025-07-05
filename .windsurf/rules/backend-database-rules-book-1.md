---
trigger: always_on
description: A disciplined approach to the backend is crucial for data integrity, security, and scalability
---

### **Drone Odisha: Backend & Database Rules Book**

#### **Version 1.0**

#### **File Name:** `backend-database-rules-book.md`

#### **Introduction**

This document provides the definitive rules for all backend services, database interactions, and server-side logic within the Drone Odisha project. A disciplined approach to the backend is crucial for data integrity, security, and scalability. All developers must adhere to these rules, which are an extension of the **Project & Code Structure Rules Book**.

---

#### **Chapter 1: Database and Data Access**

*   **Rule 1.1: The Designated Database**
    *   The primary production database for the Drone Odisha project is **[PostgreSQL](https://www.postgresql.org/)**.

*   **Rule 1.2: The Official ORM**
    *   All interactions with the database must be executed through the **[Drizzle ORM](https://orm.drizzle.team/)**. Direct database queries are strictly prohibited in the application code to ensure type safety and consistency.

*   **Rule 1.3: Centralized Schemas**
    *   All Drizzle ORM schemas must be defined in the **`src/models`** directory. This serves as the single source of truth for the application's data structure.

*   **Rule 1.4: Migration Management**
    *   Database schema changes (migrations) must be managed exclusively with **`drizzle-kit`**. Manual alterations to the database schema are forbidden. All generated migration files must be committed to the repository.

#### **Chapter 2: Server-Side Services**

*   **Rule 2.1: Authentication Standard**
    *   All user authentication and management must be handled by **[Clerk](https://clerk.com/)**. No custom authentication logic should be built.

*   **Rule 2.2: Payment Processing**
    *   All payment-related functionalities must be integrated with **[Stripe](https://stripe.com/)**. This includes "Featured Listings," marketplace commissions, and any future e-commerce transactions.

*   **Rule 2.3: Type-Safe Environment Variables**
    *   Environment variables must be managed and accessed through **`@t3-oss/env-nextjs`**. This is mandatory to ensure all required environment variables are present and correctly typed at runtime.

#### **Chapter 3: Logging and Monitoring**

*   **Rule 3.1: Standardized Logging**
    *   All server-side logging must be implemented using **[Pino](https://getpino.io/#/)**. For development environments, `pino-pretty` must be used to ensure logs are human-readable.

*   **Rule 3.2: Production Log Aggregation**
    *   In production, all logs must be forwarded to **Logtail** using the `@logtail/pino` integration for centralized monitoring and analysis.

---

#### **Enforcement**

1.  **Type Safety:** The Drizzle ORM and TypeScript's strict mode will automatically enforce many of these rules. Code that violates type safety will not compile.
2.  **Code Reviews:** All backend code will be rigorously reviewed to ensure it uses the Drizzle ORM correctly, integrates with the specified third-party services, and follows the established logging practices.
3.  **Infrastructure as Code (Future):** As the project matures, database and service configurations will be managed through code to prevent manual, untracked changes.

Adherence to these backend and database rules is critical for building a secure, reliable, and scalable platform that can support the growth and long-term vision of the Drone Odisha project.
---
description: When asked to generate code (e.g., "create a component," "write an API route"), the AI will produce code that is 100% compliant with project standards from the start.
---

Tied Rules:
Framework: Uses Next.js App Router and TypeScript only. (Framework & Language Rules 1.1, 2.1)
Structure: Places the generated files in the correct directory (src/features, src/components, etc.). (Project & Code Structure Rules)
Components: Builds upon Radix UI primitives, uses Tailwind CSS for styling, and includes a boilerplate Storybook story. (Component Development Rules 1.1, 1.2, 2.1)
Database: Uses Drizzle ORM for any data access code; never generates raw SQL queries. (Backend & Database Rule 1.2)
Testing: Generates a corresponding boilerplate Vitest test file for any new component or utility. (Testing & QA Rule 1.1)
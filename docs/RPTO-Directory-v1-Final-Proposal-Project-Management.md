# RPTO Directory v1 — Final Proposal Project Management

## Feature: RPTO Directory v1

### Objective
Create a self-contained, filterable, and detailed directory of Remote Pilot Training Organizations (RPTOs) in Odisha. All data is managed locally, and all UI is built using Radix UI primitives and Tailwind CSS, with Storybook and Vitest coverage.

---

### Scope

**IN SCOPE:**
- Local RPTO data file (`src/data/rptos.ts`), Zod-validated.
- Components:
  - `RptoFilter` (filter/search UI)
  - `RptoList` (displays filtered RPTOs)
  - `RptoCard` (preview card for each RPTO)
  - `RptoDetailPage` (dynamic Next.js route)
  - `CourseCard` (shows course details)
  - `RequestInfoForm` (mailto: inquiry form)
- All components must:
  - Use Radix UI primitives and Tailwind CSS only (no custom CSS).
  - Be documented in Storybook.
  - Have Vitest unit tests.
  - Use `clsx`/`tailwind-merge` for class management.
- No backend or API integration.
- All text must be localizable (i18n-ready).
- All code must adhere to component-development-rules-book.md and project naming conventions.

**OUT OF SCOPE:**
- No external database, CMS, or API.
- No server-side submission of forms (mailto: only).
- No authentication or user accounts.
- No analytics or tracking.
- No external dependencies beyond those already in the repo.

---

### User Stories & Acceptance Criteria

- **As a user**, I can see a list of RPTOs, filter by name/city, and view details about each RPTO.
- **As a user**, I can view all courses offered by an RPTO.
- **As a user**, I can send an inquiry via a mailto: form with validation.
- **As a developer**, I can see Storybook stories for all states of every component.
- **As a developer**, I can run Vitest and see all tests pass for these components.
- **As a reviewer**, I can confirm no custom CSS or unapproved dependencies are used.

---

### Timeline & Communication
- **Est. Effort:** 2–4 days for initial implementation, 1–2 days for QA/Storybook/tests.
- **Review:** PR review to enforce rules and acceptance criteria.
- **Scope Lock:** No changes to requirements or scope after approval; new ideas logged for future cycles.

---

### Scope Lock-in
- This plan is now ready for formal review and approval.
- No further scope changes will be accepted for this cycle.
- All work must follow the above blueprint and acceptance criteria.

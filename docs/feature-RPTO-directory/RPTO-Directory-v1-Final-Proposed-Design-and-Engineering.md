# RPTO Directory v1 — Final Proposed Design and Engineering Doc

## Data Model

- **File:** `src/data/rptos.ts`
- **Schema:** Zod-validated, see example in project management doc.
- **Type Exports:** `Course`, `Rpto`.

---

## Components & Structure

| Component        | Path                                         | Description                                        |
|------------------|----------------------------------------------|----------------------------------------------------|
| RptoFilter       | `src/features/rpto/components/RptoFilter.tsx`| Search input + city dropdown (Radix + Tailwind)    |
| RptoList         | `src/features/rpto/components/RptoList.tsx`  | Grid/list of `RptoCard`s                           |
| RptoCard         | `src/features/rpto/components/RptoCard.tsx`  | Card with logo, name, city; links to detail page   |
| RptoDetailPage   | `src/features/rpto/pages/[id].tsx`           | Full RPTO info, courses, inquiry form              |
| CourseCard       | `src/features/rpto/components/CourseCard.tsx`| Displays course details                            |
| RequestInfoForm  | `src/features/rpto/components/RequestInfoForm.tsx` | Inquiry form, validated, mailto: only      |

- **Storybook:** Each component has a `.stories.tsx` file.
- **Vitest:** Each component has a `.test.tsx` file.

---

## Technical Blueprint

- **Data Loading:** Import `rptos` from `src/data/rptos.ts` in all relevant components/pages.
- **Filtering:** Local state in `RptoFilter`, filter logic in parent/list.
- **Routing:** Next.js dynamic route for detail page (`/rpto/[id]`).
- **Form Handling:** `react-hook-form` + Zod for validation; mailto: link on submit.
- **Styling:** Tailwind CSS utility classes only, managed via `clsx`/`tailwind-merge`.
- **Radix UI:** Use Radix primitives for all interactive UI elements (dropdown, input, etc).
- **Icons:** Use `lucide-react` for search and other icons.
- **i18n:** All user-facing text must be localizable.

---

## Enforcement and Quality

- **Storybook:** Every component must have a corresponding Storybook story to document its states.
- **Linting:** Automated checks will ensure that no custom CSS is used and that clsx and tailwind-merge are used for class management.
- **Code Reviews:** All pull requests will be reviewed to ensure these rules are followed, Radix UI primitives are used, and no external APIs are called.

---

## Timeline & Communication

- **Est. Effort:** 2–4 days for initial implementation, 1–2 days for QA/Storybook/tests.
- **Review:** PR review to enforce rules and acceptance criteria.
- **Scope Lock:** No changes to requirements or scope after approval; new ideas logged for future cycles.

---

## Scope Lock-in
- This plan is now ready for formal review and approval.
- No further scope changes will be accepted for this cycle.
- All work must follow the above blueprint and acceptance criteria.

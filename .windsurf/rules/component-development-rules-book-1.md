---
trigger: model_decision
description: This document details the rules and best practices for creating, styling, and managing UI components for the Drone Odisha project.
---

Drone Odisha: Component Development Rules Book
Version 1.0
File Name: component-development-rules-book.md
Introduction
This document details the rules and best practices for creating, styling, and managing UI components for the Drone Odisha project. All component development must adhere to these guidelines to ensure a consistent, accessible, and maintainable user interface. This rules book is a direct extension of the Framework & Language Rules Book.

Chapter 1: Component Philosophy
Rule 1.1: Build on a Solid Foundation

All new UI components must be built upon Radix UI primitives. This is a non-negotiable rule to ensure that all interactive elements are accessible and follow best practices for user experience out of the box.
Rule 1.2: Develop in Isolation

Every component must be developed and documented in isolation using Storybook. This allows for focused development, thorough testing of all component states, and provides a living style guide for the entire project.
Rule 1.3: Reusability is Key

Before creating a new component, developers must first check the src/components directory to see if a similar component already exists. The goal is to create a robust library of reusable components and avoid duplication.
Chapter 2: Styling and Theming
Rule 2.1: Utility-First Styling

All component styling must be done using Tailwind CSS. Custom CSS should be avoided unless absolutely necessary and must be approved in a code review.
Rule 2.2: Dynamic and Merged Classes

For applying classes conditionally or merging them, developers must use the clsx and tailwind-merge utility functions. This is the standard for keeping class declarations clean and predictable.
Rule 2.3: Icons

All icons must be sourced from the lucide-react library to maintain a consistent visual language across the application. If a suitable icon is not available, a new one must be approved and added to a custom icon set.
Chapter 3: Forms and User Input
Rule 3.1: Form Management

All forms must be built and managed using react-hook-form. This ensures a consistent approach to form state, validation, and submission.
Rule 3.2: Schema-Based Validation

All form validation must be handled by zod. A zod schema must be defined for every form to ensure that all user input is type-safe and validated against a single source of truth.
Enforcement
These rules will be enforced through the following mechanisms:

Storybook: All components must have a corresponding Storybook story. Pull requests for new components without stories will be rejected.
Automated Linting: The project's ESLint configuration will be tuned to flag styling and import violations.
Code Reviews: Peer code reviews are mandatory to ensure that components are built on Radix primitives, use the correct styling utilities, and follow the established form management patterns.
By following these component development rules, we will create a UI that is not only visually appealing but also accessible, consistent, and easy to maintain as the Drone Odisha platform grows.

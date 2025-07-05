import '@testing-library/jest-dom/vitest';

import failOnConsole from 'vitest-fail-on-console';

failOnConsole({
  shouldFailOnDebug: true,
  shouldFailOnError: false, // Temporarily set to false
  shouldFailOnInfo: true,
  shouldFailOnLog: true,
  shouldFailOnWarn: false, // Temporarily set to false
});

// Mock for Radix UI / JSDOM compatibility issue
// https://github.com/jsdom/jsdom/issues/3232
// https://github.com/radix-ui/primitives/issues/2103
if (typeof Element !== 'undefined' && !Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}

// Set up environment variables for testing
process.env.BILLING_PLAN_ENV = 'test';

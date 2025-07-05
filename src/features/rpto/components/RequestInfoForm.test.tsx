import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { NextIntlClientProvider } from 'next-intl';
import { describe, expect, it } from 'vitest';

import { RequestInfoForm } from './RequestInfoForm';

describe('RequestInfoForm', () => {
  const rptoEmail = 'contact@flydrone.co';
  const rptoName = 'Odisha Drone Academy';

  // Mock window.location.href
  const originalLocation = window.location;

  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: { ...originalLocation, href: '' },
    });
  });

  afterEach(() => {
    Object.defineProperty(window, 'location', {
      writable: true,
      value: originalLocation,
    });
  });

  const mockMessages = {
    RPTO: {
      form_label_name: 'Your Name',
      form_label_email: 'Your Email',
      form_label_message: 'Message',
      form_button_send_inquiry: 'Send Inquiry',
      form_validation_name_min_length: 'Name must be at least 2 characters.',
      form_validation_email_invalid: 'Please enter a valid email address.',
      form_validation_message_min_length: 'Message must be at least 10 characters.',
      form_email_subject: 'Inquiry about {rptoName}',
      form_email_body: 'Name: {name}\nEmail: {email}\n\nMessage:\n{message}',
    },
  };

  const renderComponent = () => {
    render(
      <NextIntlClientProvider messages={mockMessages} locale="en">
        <RequestInfoForm rptoEmail={rptoEmail} rptoName={rptoName} />
      </NextIntlClientProvider>,
    );
  };

  it('should render input fields and a submit button', () => {
    renderComponent();

    expect(screen.getByLabelText(/your name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send inquiry/i })).toBeInTheDocument();
  });

  it('should show validation errors for empty fields on submit', async () => {
    const user = userEvent.setup();
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /send inquiry/i });
    await user.click(submitButton);

    expect(await screen.findByText('Name must be at least 2 characters.')).toBeInTheDocument();
    expect(await screen.findByText('Please enter a valid email address.')).toBeInTheDocument();
    expect(await screen.findByText('Message must be at least 10 characters.')).toBeInTheDocument();
  });

  it('should not show validation errors for valid input', async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText(/your name/i), 'John Doe');
    await user.type(screen.getByLabelText(/your email/i), 'john.doe@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This is a valid test message.');

    const submitButton = screen.getByRole('button', { name: /send inquiry/i });
    await user.click(submitButton);

    expect(screen.queryByText('Name must be at least 2 characters.')).not.toBeInTheDocument();
    expect(screen.queryByText('Please enter a valid email address.')).not.toBeInTheDocument();
    expect(screen.queryByText('Message must be at least 10 characters.')).not.toBeInTheDocument();
  });

  it('should generate the correct mailto link on valid submission', async () => {
    const user = userEvent.setup();
    renderComponent();

    const name = 'Jane Doe';
    const email = 'jane.doe@test.com';
    const message = 'I am interested in your courses.';

    await user.type(screen.getByLabelText(/your name/i), name);
    await user.type(screen.getByLabelText(/your email/i), email);
    await user.type(screen.getByLabelText(/message/i), message);

    const submitButton = screen.getByRole('button', { name: /send inquiry/i });
    await user.click(submitButton);

    const expectedSubject = `Inquiry about ${rptoName}`;
    const expectedBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const expectedMailto = `mailto:${rptoEmail}?subject=${encodeURIComponent(expectedSubject)}&body=${encodeURIComponent(expectedBody)}`;

    expect(window.location.href).toBe(expectedMailto);
  });
});

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { cn } from '@/utils/cn';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

type RequestInfoFormProps = {
  rptoEmail: string;
  rptoName: string;
  className?: string;
};

export function RequestInfoForm({ rptoEmail, rptoName, className }: RequestInfoFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (values: FormValues) => {
    const subject = `Inquiry about ${rptoName}`;
    const body = `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`;
    const mailtoLink = `mailto:${rptoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className={cn('space-y-4 rounded-lg border bg-card p-6 text-card-foreground shadow-sm', className)}
    >
      <h3 className="text-xl font-semibold">Request Information</h3>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          Your Name
        </label>
        <input
          id="name"
          {...form.register('name')}
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        {form.formState.errors.name && (
          <p className="text-sm font-medium text-destructive">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Your Email
        </label>
        <input
          id="email"
          type="email"
          {...form.register('email')}
          className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        {form.formState.errors.email && (
          <p className="text-sm font-medium text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message
        </label>
        <textarea
          id="message"
          {...form.register('message')}
          className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        {form.formState.errors.message && (
          <p className="text-sm font-medium text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      >
        Send Inquiry
      </button>
    </form>
  );
}

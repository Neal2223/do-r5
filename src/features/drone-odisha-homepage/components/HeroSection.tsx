'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  query: z.string().min(1, {
    message: 'Please enter a role, skill, or keyword to search.',
  }),
});

type SearchFormValues = z.infer<typeof formSchema>;

export default function HeroSection() {
  const t = useTranslations('HeroSection');

  const form = useForm<SearchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: '',
    },
  });

  function onSubmit(values: SearchFormValues) {
    // In a real application, you would handle the search query here.
    // For example, redirecting to a search results page:
    // router.push(`/search?q=${encodeURIComponent(values.query)}`);
    // eslint-disable-next-line no-console
    console.log('Search submitted:', values);
    // eslint-disable-next-line no-alert
    alert(`Searching for: ${values.query}`);
  }

  return (
    <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{
          backgroundImage: 'url(\'/Hero bg/Modern Flat Illustration.webp\')',
        }}
      />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {t('title')}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
          {t('subtitle')}
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mx-auto mt-10 max-w-xl"
            aria-label="Find Talent Form"
          >
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">{t('searchLabel')}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
                      <Input
                        {...field}
                        type="search"
                        aria-label={t('searchInputAriaLabel')}
                        placeholder={t('searchPlaceholder')}
                        className="w-full rounded-full bg-white/90 py-7 pl-12 pr-32 text-gray-900 transition-all duration-300 placeholder:text-gray-500 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6"
                      />
                      <Button
                        type="submit"
                        size="lg"
                        className="absolute inset-y-1.5 right-1.5 rounded-full"
                      >
                        {t('searchButton')}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage className="mt-2 text-left text-yellow-300" />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
}

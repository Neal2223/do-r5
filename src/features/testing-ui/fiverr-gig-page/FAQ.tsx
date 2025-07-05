import React from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    { q: 'What types of drone services do you offer?', a: 'I offer a range of drone services including aerial photography, videography, mapping, surveying, and infrastructure inspection, tailored to your project\'s unique requirements.' },
    { q: 'What kind of data can your drones collect?', a: 'Our drones can collect high-resolution imagery, video footage, thermal data, multispectral data, and 3D point clouds, depending on the sensors used.' },
    { q: 'Do you provide post-processing and analysis of the collected data?', a: 'Yes, we offer comprehensive post-processing services, including orthomosaic generation, 3D modeling, volumetric calculations, and detailed analytical reports.' },
    { q: 'Are your drone operations compliant with local regulations?', a: 'Absolutely. All our drone operations are conducted in strict compliance with local aviation regulations and safety guidelines.' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold">FAQ</h3>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-lg font-semibold">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

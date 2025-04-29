
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from '@/hooks/use-translation';
import FAQSchema from '@/components/schema/FAQSchema';

const TrustBadgeFAQ = () => {
  const { t } = useTranslation();

  const faqKeys = [
    'certification',
    'bookings',
    'reviews',
    'developer',
    'noWebsite'
  ];

  const faqs = faqKeys.map(key => ({
    question: t(`trustBadge.faq.${key}.question`),
    answer: t(`trustBadge.faq.${key}.answer`)
  }));

  return (
    <section className="py-16 bg-white w-full">
      {/* Add FAQ Schema */}
      <FAQSchema faqKeys={faqKeys} namespace="trustBadge.faq" />
      
      <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-royal text-left">FAQ</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 py-2 w-full">
              <AccordionTrigger className="text-lg font-semibold text-royal text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-royal-700 whitespace-pre-line text-left">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default TrustBadgeFAQ;

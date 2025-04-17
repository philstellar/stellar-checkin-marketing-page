
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useTranslation } from '@/hooks/use-translation';

const TrustBadgeFAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('trustBadge.faq.certification.question'),
      answer: t('trustBadge.faq.certification.answer')
    },
    {
      question: t('trustBadge.faq.bookings.question'),
      answer: t('trustBadge.faq.bookings.answer')
    },
    {
      question: t('trustBadge.faq.reviews.question'),
      answer: t('trustBadge.faq.reviews.answer')
    },
    {
      question: t('trustBadge.faq.developer.question'),
      answer: t('trustBadge.faq.developer.answer')
    },
    {
      question: t('trustBadge.faq.noWebsite.question'),
      answer: t('trustBadge.faq.noWebsite.answer')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold mb-8 text-royal text-center">FAQ</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 py-2">
                <AccordionTrigger className="text-lg font-semibold text-royal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-royal-700 whitespace-pre-line">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgeFAQ;

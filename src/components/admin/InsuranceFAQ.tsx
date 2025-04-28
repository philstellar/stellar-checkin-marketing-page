
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { StructuredData } from '@/components/StructuredData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const InsuranceFAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    'airbnb',
    'deposit',
    'coverage',
    'cost'
  ];

  const faqData = {
    questions: faqs.map(faq => ({
      question: t(`insuranceDetail.faq.${faq}.question`),
      answer: t(`insuranceDetail.faq.${faq}.answer`)
    }))
  };

  return (
    <div className="w-full max-w-full px-4 sm:px-6 lg:px-8">
      <StructuredData type="faq" faqData={faqData} />
      <h2 className="text-3xl font-bold mb-8 text-royal text-left">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold text-royal">
              {t(`insuranceDetail.faq.${faq}.question`)}
            </AccordionTrigger>
            <AccordionContent className="text-royal-700 text-left whitespace-pre-line">
              {t(`insuranceDetail.faq.${faq}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default InsuranceFAQ;

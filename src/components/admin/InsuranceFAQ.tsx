
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
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
    'repeat',
    'deposit',
    'coverage',
    'cost'
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-royal text-center">FAQ</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-lg font-semibold text-royal">
              {t(`insurance.faq.${faq}.question`)}
            </AccordionTrigger>
            <AccordionContent className="text-royal-700">
              {t(`insurance.faq.${faq}.answer`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default InsuranceFAQ;

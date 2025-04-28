import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calculator, Upload } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { UserCheck } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { HeadingWithLine } from "@/components/ui/heading-with-line";
import { Link } from "react-router-dom";
const KurtaxeSection = () => {
  const {
    t
  } = useTranslation();
  const features = [{
    icon: <FileText className="h-8 w-8 text-apple" />,
    title: t('kurtaxe.digitalRegistration.title'),
    description: t('kurtaxe.digitalRegistration.description')
  }, {
    icon: <Calculator className="h-8 w-8 text-apple" />,
    title: t('kurtaxe.automaticCalculation.title'),
    description: t('kurtaxe.automaticCalculation.description')
  }, {
    icon: <Upload className="h-8 w-8 text-apple" />,
    title: t('kurtaxe.authorities.title'),
    description: t('kurtaxe.authorities.description')
  }];
  return <section id="kurtaxe" className="py-20 bg-white">
      <div className="container-custom">
        <HeadingWithLine title={t('kurtaxe.title')} subtitle={t('kurtaxe.subtitle')} align="center" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white flex flex-col">
              <CardHeader className="pb-4 flex flex-col items-center text-center">
                <div className="bg-apple/10 p-4 rounded-full text-apple w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-royal">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-center flex-grow">
                <p className="text-royal-700">{feature.description}</p>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="mt-10 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
            <UserCheck className="mr-2 h-4 w-4" /> {t('kurtaxe.cta')}
          </CTAButton>
        </div>

        <div className="mt-8 text-center">
          
          
        </div>
      </div>
    </section>;
};
export default KurtaxeSection;
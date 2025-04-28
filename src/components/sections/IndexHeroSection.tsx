
import { UserCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";

export function IndexHeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {/* Hero content structure maintained but text removed */}
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik text-white">
                <UserCheck className="mr-2 h-4 w-4" />
              </CTAButton>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            {/* Image placeholder maintained but src removed */}
            <div className="w-3/5 h-64 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

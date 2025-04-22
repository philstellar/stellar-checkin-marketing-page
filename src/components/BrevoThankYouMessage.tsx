
import { CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

interface BrevoThankYouMessageProps {
  onClose: () => void;
}

const BrevoThankYouMessage = ({ onClose }: BrevoThankYouMessageProps) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-[540px] text-center w-full">
      <div className="flex justify-center mb-6">
        <CheckCircle
          className="text-apple-500"
          size={64}
          strokeWidth={1.5}
        />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {t("brevoPopup.thankYouTitle", { defaultValue: "Vielen Dank für deine Anmeldung!" })}
      </h2>
      <p className="text-gray-600 mb-6">
        {t("brevoPopup.thankYouDesc", { defaultValue: "Wir melden uns so schnell wie möglich persönlich bei dir" })}
      </p>
      <button
        onClick={onClose}
        className="px-6 py-2 bg-apple-500 text-white rounded-md hover:bg-apple-600 transition-colors"
      >
        {t("brevoPopup.closeBtn", { defaultValue: "Schließen" })}
      </button>
    </div>
  );
};

export default BrevoThankYouMessage;

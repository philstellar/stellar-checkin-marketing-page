
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import BrevoThankYouMessage from "./BrevoThankYouMessage";
import BrevoDialogForm from "./BrevoDialogForm";

interface BrevoFormPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const BrevoFormPopup = ({ isOpen, onClose }: BrevoFormPopupProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="p-0 max-w-[580px] border-none bg-white"
        aria-describedby="dialog-description"
        hideCloseButton
      >
        <span id="dialog-description" className="sr-only">
          {t("brevoPopup.a11yDescription", { defaultValue: "Brevo Formular zur Erstellung eines kostenlosen Kontos" })}
        </span>
        <DialogTitle className="sr-only">{t("brevoPopup.dialogTitle", { defaultValue: "Kostenloses Konto erstellen" })}</DialogTitle>
        {isSubmitted ? (
          <BrevoThankYouMessage onClose={onClose} />
        ) : (
          <BrevoDialogForm onSuccess={() => setIsSubmitted(true)} onClose={onClose} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default BrevoFormPopup;

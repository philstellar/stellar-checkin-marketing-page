
import { useBrevoForm } from "@/context/BrevoFormContext";
import BrevoFormPopup from "./BrevoFormPopup";

const BrevoFormPopupWrapper = () => {
  const { isFormOpen, closeForm } = useBrevoForm();

  return <BrevoFormPopup isOpen={isFormOpen} onClose={closeForm} />;
};

export default BrevoFormPopupWrapper;


import { Button, ButtonProps } from "@/components/ui/button";
import { useBrevoForm } from "@/context/BrevoFormContext";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CTAButton = ({ children, ...props }: CTAButtonProps) => {
  const { openForm } = useBrevoForm();

  return (
    <Button 
      onClick={openForm} 
      className={`rounded-cta ${props.className || ''}`} 
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;

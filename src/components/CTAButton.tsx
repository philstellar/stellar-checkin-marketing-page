import { Button, ButtonProps } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CTAButton = ({ children, ...props }: CTAButtonProps) => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("https://app.stellar-checkin.com/")}
      className={`rounded-cta text-white ${props.className || ''}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
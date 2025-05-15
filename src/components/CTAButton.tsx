import { Button, ButtonProps } from "@/components/ui/button";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
}

const CTAButton = ({ children, ...props }: CTAButtonProps) => {
  const handleClick = () => {
    window.location.href = "https://app.stellar-checkin.com/";
  };

  return (
    <Button
      onClick={handleClick}
      className={`rounded-cta text-white ${props.className || ''}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CTAButton;
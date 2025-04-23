
import { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

interface PrivacyCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const PrivacyCheckbox = ({ checked, onChange, ...props }: PrivacyCheckboxProps) => {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <div className="flex items-center">
      <input
        id="privacy"
        name="privacy"
        type="checkbox"
        required
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-stellar-600 focus:ring-stellar-500 border-gray-300 rounded"
        {...props}
      />
      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">
        <span>
          {t('contact.formPrivacy').split('<link>').map((part, index, array) => {
            if (index === 0) return <span key="part-0">{part}</span>;
            
            const closingTagPos = part.indexOf('</link>');
            if (closingTagPos !== -1) {
              const linkText = part.substring(0, closingTagPos);
              const restText = part.substring(closingTagPos + 7); // after </link>
              
              return (
                <>
                  <Link 
                    key={`link-${index}`}
                    to={`/${currentLanguage}/datenschutz`}
                    className="text-stellar-600 hover:text-stellar-500 underline font-medium"
                  >
                    {linkText}
                  </Link>
                  <span key={`part-${index}`}>{restText}</span>
                </>
              );
            }
            return <span key={`part-${index}`}>{part}</span>;
          })}
        </span>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;


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
        <Link 
          to={`/${currentLanguage}/datenschutz`}
          className="hover:text-stellar-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('contact.formPrivacy')}
        </Link>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;

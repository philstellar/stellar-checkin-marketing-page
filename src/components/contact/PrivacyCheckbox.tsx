
import { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/use-translation';

interface PrivacyCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const PrivacyCheckbox = ({ checked, onChange, ...props }: PrivacyCheckboxProps) => {
  const { t, currentLanguage } = useTranslation();
  
  const renderPrivacyText = () => {
    const text = t('contact.formPrivacy');
    
    // Check if the text contains link tags
    if (text.includes('<link>') && text.includes('</link>')) {
      const parts = text.split('<link>');
      const beforeLink = parts[0];
      
      // Split the second part by the closing tag
      const linkParts = parts[1].split('</link>');
      const linkText = linkParts[0];
      const afterLink = linkParts[1];
      
      return (
        <>
          {beforeLink}
          <Link 
            to={`/${currentLanguage}/datenschutz`}
            className="text-stellar-600 hover:text-stellar-500 underline font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </Link>
          {afterLink}
        </>
      );
    }
    
    // Fallback to the entire text as a link if no link tags found
    return (
      <Link 
        to={`/${currentLanguage}/datenschutz`}
        className="hover:text-stellar-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        {text}
      </Link>
    );
  };
  
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
        {renderPrivacyText()}
      </label>
    </div>
  );
};

export default PrivacyCheckbox;

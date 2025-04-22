
import { InputHTMLAttributes } from 'react';

interface PrivacyCheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

const PrivacyCheckbox = ({ checked, onChange, ...props }: PrivacyCheckboxProps) => {
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
        Ich akzeptiere die{" "}
        <a href="/datenschutz" className="text-stellar-600 hover:text-stellar-500">
          Datenschutzerklärung
        </a>
      </label>
    </div>
  );
};

export default PrivacyCheckbox;

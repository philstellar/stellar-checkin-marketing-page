
import * as React from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
  return (
    <div className="flex items-center gap-1.5 text-royal">
      <Globe className="h-4 w-4" />
      <span className="text-xs uppercase font-medium">EN</span>
    </div>
  );
}

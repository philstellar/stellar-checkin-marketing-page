
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-royal hover:text-apple transition-colors">
        <Globe className="h-4 w-4" />
        <span className="uppercase">{language}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? "bg-gray-100" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('it')} className={language === 'it' ? "bg-gray-100" : ""}>
          Italiano
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const isMobile = useIsMobile();

  // Map language codes to full names
  const languageNames = {
    de: "Deutsch",
    en: "English",
    it: "Italiano",
    es: "Español"
  };

  // Use native-like select for mobile devices
  if (isMobile) {
    return (
      <div className="flex items-center gap-1.5">
        <Globe className="h-4 w-4 text-royal" />
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-24 h-8 text-xs min-w-0 px-2 border-none bg-transparent">
            <SelectValue placeholder={language} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="de">Deutsch</SelectItem>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="it">Italiano</SelectItem>
            <SelectItem value="es">Español</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
  }

  // Use dropdown for desktop
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1.5 text-royal hover:text-apple transition-colors">
        <Globe className="h-4 w-4" />
        {isMobile && <span className="text-xs uppercase font-medium">{language}</span>}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage('de')} className={language === 'de' ? "bg-gray-100" : ""}>
          Deutsch
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? "bg-gray-100" : ""}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('it')} className={language === 'it' ? "bg-gray-100" : ""}>
          Italiano
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('es')} className={language === 'es' ? "bg-gray-100" : ""}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

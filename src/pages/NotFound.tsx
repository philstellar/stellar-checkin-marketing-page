
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFoundDE from "./error/NotFoundDE";
import NotFoundEN from "./error/NotFoundEN";
import NotFoundES from "./error/NotFoundES";
import NotFoundIT from "./error/NotFoundIT";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Determine language from URL
  const getLanguageFromPath = () => {
    const path = location.pathname;
    if (path.startsWith("/en")) return "en";
    if (path.startsWith("/es")) return "es";
    if (path.startsWith("/it")) return "it";
    return "de"; // Default to German
  };

  const language = getLanguageFromPath();

  // Render the appropriate language version
  switch (language) {
    case "en":
      return <NotFoundEN />;
    case "es":
      return <NotFoundES />;
    case "it":
      return <NotFoundIT />;
    default:
      return <NotFoundDE />;
  }
};

export default NotFound;

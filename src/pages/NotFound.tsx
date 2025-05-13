
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import NotFoundEN from "./error/NotFoundEN";

const NotFound = () => {
  const location = useLocation();
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return <NotFoundEN />;
};

export default NotFound;

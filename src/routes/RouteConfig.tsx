
import { Routes } from 'react-router-dom';
import { RouterWrapper } from './RouterWrapper';
import { commonRoutes } from './common-routes';
import { germanRoutes } from './de-routes';
import { englishRoutes } from './en-routes';
import { italianRoutes } from './it-routes';
import { spanishRoutes } from './es-routes';

const RouteConfig = () => {
  // Combine all routes
  const allRoutes = [
    ...commonRoutes,
    ...germanRoutes,
    ...englishRoutes,
    ...italianRoutes,
    ...spanishRoutes
  ];

  return (
    <Routes>
      <RouterWrapper routes={allRoutes} />
    </Routes>
  );
};

export default RouteConfig;

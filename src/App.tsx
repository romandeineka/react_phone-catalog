import { Route, Routes } from 'react-router-dom';
import './App.scss';
import useScrollToTop from './Hooks/useScrollToTop';
import { routes } from './Routes/routes';

export const App = () => {
  useScrollToTop();

  return (
    <Routes>
      {routes.map(route => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
};

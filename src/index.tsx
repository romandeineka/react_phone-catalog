import { createRoot } from 'react-dom/client';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { AppProvider } from './AppContext';

createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </AppProvider>,
);

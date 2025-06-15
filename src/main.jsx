import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.css"
import { I18nextProvider } from 'react-i18next';
import i18n, { i18nInitialized } from "./languages/INEXT";

const renderApp = () => {
  const root = createRoot(document.getElementById("root"));

  root.render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StrictMode>,
  );
};


i18nInitialized.then(renderApp);

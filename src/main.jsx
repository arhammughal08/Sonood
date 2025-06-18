import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/scss/style.css"
import { I18nextProvider } from 'react-i18next';
import i18n, { i18nInitialized } from "./languages/INEXT";
import { Loading } from './components';

const RootApp = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        {showLoader ? <Loading /> : <App />}
      </I18nextProvider>
    </StrictMode>
  );
};

i18nInitialized.then(() => {
  const root = createRoot(document.getElementById("root"));
  root.render(<RootApp />);
});

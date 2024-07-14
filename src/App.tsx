import { Routes, Route } from 'react-router-dom';

import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage';
import { PayPage } from './pages/PayPage';
import { ThankYouPage } from './pages/ThankYouPage';
import { ErrorPage } from './pages/ErrorPage';

const App = (): React.ReactElement => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pay" element={<PayPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};

export { App };

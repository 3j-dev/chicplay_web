import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/font.css';
import Router from '@/routes';
import { AuthenticationContextProvider } from './hook/AuthenticationContext';

const App: React.FC = () => {
  return (
    <Suspense>
      <AuthenticationContextProvider>
        <ToastContainer />
        <Router />
      </AuthenticationContextProvider>
    </Suspense>
  );
};

export default App;

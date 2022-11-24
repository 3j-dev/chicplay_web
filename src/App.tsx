import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/font.css';
import Router from '@/routes';

const App: React.FC = () => {
  return (
    <Suspense>
      <RecoilRoot>
        <ToastContainer />
        <Router />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

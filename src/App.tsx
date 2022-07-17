import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import '@/styles/font.css';
import Router from '@/routes';

const App: React.FC = () => {
  return (
    <Suspense fallback={<></>}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

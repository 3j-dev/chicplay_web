import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

import '@/styles/font.css';
import Hello from '@/component/Hello';
import Router from '@/routes';

const App: React.FC = () => {
  return (
    <Suspense fallback={<Hello />}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

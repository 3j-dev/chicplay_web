import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '@/styles/font.css';
import Hello from '@/component/Hello';
import Router from '@/routes';

const App: React.FC = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return (
    <Suspense fallback={<Hello />}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

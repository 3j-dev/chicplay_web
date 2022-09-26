import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

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
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </Suspense>
  );
};

export default App;

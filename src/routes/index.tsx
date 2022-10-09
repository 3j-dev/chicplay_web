import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main, Redirect, Replay } from '@/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/stream" element={<Replay />} />;
        <Route path="/redirect" element={<Redirect />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

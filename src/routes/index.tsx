import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Main, Replay } from '@/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/stream" element={<Replay />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

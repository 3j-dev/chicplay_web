import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from '@/page/MainPage/MainPage';
import ReplayPage from '@/page/ReplayPage/ReplayPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />;
        <Route path="/stream" element={<ReplayPage />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

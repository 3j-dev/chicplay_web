import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hello from '@/component/Hello';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

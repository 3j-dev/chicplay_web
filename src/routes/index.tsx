import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  Main,
  Redirect,
  LectureStream,
  LectureSpace,
  LectureUpload,
  LectureSetting,
  Mypage,
} from '@/page';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />;
        <Route path="/stream" element={<LectureStream />} />;
        <Route path="/space" element={<LectureSpace />} />;
        <Route path="/upload" element={<LectureUpload />} />;
        <Route path="/setting" element={<LectureSetting />} />;
        <Route path="/mypage" element={<Mypage />} />;
        <Route path="/redirect" element={<Redirect />} />;
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

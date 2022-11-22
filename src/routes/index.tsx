import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

import Layout from '@/component/Common/Layout';
import {
  Main,
  Redirect,
  LectureStream,
  LectureSpace,
  LectureUpload,
  LectureSetting,
  Mypage,
} from '@/page';
import { useRecoilValue } from 'recoil';
import { LoginState } from '@/store/State/LoginState';

const Router: React.FC = () => {
  const loginState = useRecoilValue(LoginState);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />;
          <Route element={<ProtectedRoute loginState={loginState} />}>
            <Route path="/space" element={<LectureSpace />} />;
            <Route path="/upload" element={<LectureUpload />} />;
            <Route path="/setting" element={<LectureSetting />} />;
            <Route path="/mypage" element={<Mypage />} />;
          </Route>
          <Route path="*" element={<Main />} />
        </Route>
        <Route element={<ProtectedRoute loginState={loginState} />}>
          <Route path="/stream" element={<LectureStream />} />;
        </Route>
        <Route path="/redirect" element={<Redirect />} />;
      </Routes>
    </BrowserRouter>
  );
};

interface ProtectedRouteProps {
  loginState: boolean;
  redirectPath?: string;
}

const ProtectedRoute = ({ loginState, redirectPath = '/' }: ProtectedRouteProps) => {
  if (!loginState) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default Router;

import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '@/component/Header';

const LayoutContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainContainer = styled.main`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;

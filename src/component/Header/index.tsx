import { useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

import {
  HeaderContainer,
  HeaderContent,
  HeaderContentContainer,
  Logo,
  UserLogin,
  UserLoginButton,
  NavDetail,
  VerticalLine,
  UserImage,
  UserProfileContainer,
} from './style';
import LogoSrc from '@/assets/images/logo_with_text.png';
import Login from '@/component/Login';
import { LOGIN_SELECT, NAV_ROUTER, RouterT } from './constant';
import { getPictureURL } from '@/util/TokenStorage';
import UserInfo from './UserInfo';
import { useAuthenticationContext } from '@/hook/AuthenticationContext';

interface NavRouterT extends RouterT {
  navigate: NavigateFunction;
}

const NavDetailAtom: React.FC<NavRouterT> = ({ title, route, navigate }: NavRouterT) => {
  return <NavDetail onClick={() => navigate(route)}>{title}</NavDetail>;
};

const Header: React.FC = () => {
  const [loginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const { isAuthenticated } = useAuthenticationContext();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Logo src={LogoSrc} onClick={() => navigate('/')} />
        <HeaderContent>
          <UserLogin>
            {isAuthenticated ? (
              <>
                {NAV_ROUTER.map((nav, idx) => (
                  <NavDetailAtom
                    title={nav.title}
                    route={nav.route}
                    navigate={navigate}
                    key={idx}
                  />
                ))}
                <VerticalLine />
                <UserProfileContainer isExtended={userProfileOpen}>
                  <UserImage
                    src={getPictureURL()}
                    onClick={() => setUserProfileOpen((prev) => !prev)}
                  />
                  <UserInfo setVisible={setUserProfileOpen} isVisible={userProfileOpen} />
                </UserProfileContainer>
              </>
            ) : (
              <>
                <UserLoginButton
                  select={LOGIN_SELECT.LOGIN}
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  로그인
                </UserLoginButton>
                <UserLoginButton
                  select={LOGIN_SELECT.SIGN_UP}
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  회원가입
                </UserLoginButton>
              </>
            )}
            <Login isOpen={loginModalOpen} setIsOpen={setIsLoginModalOpen} />
          </UserLogin>
        </HeaderContent>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;

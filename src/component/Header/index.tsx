import { useState } from 'react';
import { useRecoilValue } from 'recoil';
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
} from './style';
import LogoSrc from '@/assets/images/logo_with_text.png';
import Login from '@/component/Login';
import { LoginState } from '@/store/State/LoginState';
import { LOGIN_SELECT, NAV_ROUTER, RouterT } from './constant';

interface NavRouterT extends RouterT {
  navigate: NavigateFunction;
}

const NavDetailAtom: React.FC<NavRouterT> = ({ title, route, navigate }: NavRouterT) => {
  return <NavDetail onClick={() => navigate(route)}>{title}</NavDetail>;
};

const Header: React.FC = () => {
  const [loginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  const loginState = useRecoilValue(LoginState);

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Logo src={LogoSrc} onClick={() => navigate('/')} />
        <HeaderContent>
          <UserLogin>
            {!loginState ? (
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
            ) : (
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
                <UserImage
                  src="https://media.disquiet.io/images/profile/2c34469b0c08a4a0722bc3bff3e76ac5a22871ce2b253a01a4258cfb4b10775b?w=72&f=webp"
                  onClick={() => navigate('/mypage')}
                />
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

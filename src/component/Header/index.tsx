import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
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
import { refreshToken } from '@/api/user';
import { deleteToken, getAccessToken, getPictureURL, setAccessToken } from '@/util/auth';
import UserInfo from './UserInfo';

interface NavRouterT extends RouterT {
  navigate: NavigateFunction;
}

const NavDetailAtom: React.FC<NavRouterT> = ({ title, route, navigate }: NavRouterT) => {
  return <NavDetail onClick={() => navigate(route)}>{title}</NavDetail>;
};

const Header: React.FC = () => {
  const [loginModalOpen, setIsLoginModalOpen] = useState(false);
  const [userProfileOpen, setUserProfileOpen] = useState(false);
  const navigate = useNavigate();
  const [loginState, setLoginState] = useRecoilState(LoginState);

  useEffect(() => {
    //header에서 token validate를 매 생성시 체크 이를 통해서 매 새로고침 시에 헤더가 나오면서 로그인 처리를 진행
    refreshToken()
      .then((res) => {
        setAccessToken(res.data.accessToken);
        setLoginState(true);
      })
      .catch(() => {
        if (getAccessToken().length > 0) {
          deleteToken();
          setLoginState(false);
          window.location.reload();
        } else {
          deleteToken();
          setLoginState(false);
        }
      });
  }, [setLoginState]);

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Logo src={LogoSrc} onClick={() => navigate('/')} />
        <HeaderContent>
          <UserLogin>
            {loginState ? (
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
                  src={getPictureURL()}
                  onClick={() => setUserProfileOpen((prev) => !prev)}
                />
                <UserInfo setVisible={setUserProfileOpen} isVisible={userProfileOpen} />
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

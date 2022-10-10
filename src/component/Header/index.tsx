import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoSettingsOutline, IoNotificationsOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';

import { HeaderContainer, HeaderContent, HeaderContentContainer, Logo, UserProfile } from './style';
import LogoSrc from '@/assets/images/logo_with_text.png';
import Login from '@/component/Login';

const Header: React.FC = () => {
  const [loginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <HeaderContentContainer>
        <Logo src={LogoSrc} onClick={() => navigate('/')} />
        <HeaderContent>
          <IoNotificationsOutline size={20} color="#333" />
          <IoSettingsOutline size={20} color="#333" />
          <UserProfile>
            <h4>홍길동 님</h4>
            <CgProfile size={26} color="#333" onClick={() => setIsLoginModalOpen(true)} />
            <Login isOpen={loginModalOpen} setIsOpen={setIsLoginModalOpen} />
          </UserProfile>
        </HeaderContent>
      </HeaderContentContainer>
    </HeaderContainer>
  );
};

export default Header;

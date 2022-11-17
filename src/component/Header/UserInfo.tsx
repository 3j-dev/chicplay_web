import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { IoLogOutOutline } from 'react-icons/io5';

import { deleteToken } from '@/util/auth';
import { logout } from '@/api/user';
import { pushNotification } from '@/util/notification';

interface Props {
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const UserInfo: React.FC<Props> = ({ setVisible, isVisible }: Props) => {
  const navigate = useNavigate();

  const mypageHandler = () => {
    setVisible((prev) => !prev);
    navigate('./mypage');
  };

  const logoutHandler = () => {
    setVisible((prev) => !prev);
    logout().then(() => {
      deleteToken();
      pushNotification('로그아웃 성공', 'success');
    });
  };

  return (
    <UserInfoContainer isVisible={isVisible}>
      <CgProfile size="32" onClick={mypageHandler} />
      <IoLogOutOutline size="32" onClick={logoutHandler} />
    </UserInfoContainer>
  );
};

export default UserInfo;

const UserInfoContainer = styled.div<{ isVisible: boolean }>`
  width: 30%;
  height: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  display: ${({ isVisible }) => (isVisible ? 'absolute' : 'none')};
`;

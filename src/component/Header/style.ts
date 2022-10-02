import { Colors } from '@/util/Constant';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.White};
`;

const HeaderContentContainer = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-item: center;
`;

const HeaderContent = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-content: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const UserProfile = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-content: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 96px;
  height: 50px;
  cursor: pointer;
`;

export { HeaderContainer, HeaderContentContainer, HeaderContent, Logo, UserProfile };

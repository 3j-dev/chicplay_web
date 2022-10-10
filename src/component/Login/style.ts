import { Typography } from '@/styles/style';
import { Colors } from '@/util/Constant';
import styled from 'styled-components';

const LogoImage = styled.img`
  width: 130px;
  height: 110px;
`;

const LoginTitle = styled.div`
  width: 80%;
  ${Typography.Paragraph1};
  color: ${Colors.Gray2};
  text-align: center;
`;

const WhyLogin = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5%;
`;

const WhyLoginDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const WhyLoginDetailText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${Typography.Paragraph1};
`;

const GoogleLogo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 1%;
`;

const GoogleLogin = styled.button`
  width: 60%;
  height: 10%;
  border-radius: 16px;
  border: 1px solid ${Colors.Blue1};
  background: ${Colors.White};
  ${Typography.Paragraph1}
  color: ${Colors.Blue1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    background: ${Colors.Blue1};
    color: ${Colors.White};
  }
`;

export {
  LogoImage,
  LoginTitle,
  WhyLogin,
  WhyLoginDetail,
  WhyLoginDetailText,
  GoogleLogo,
  GoogleLogin,
};

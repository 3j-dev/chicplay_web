import ReactModal from 'react-modal';
import noScroll from 'no-scroll';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck } from '@react-icons/all-files/fa/FaCheck';
import { IoCloseOutline } from '@react-icons/all-files/io5/IoCloseOutline';

import LogoWithTextSrc from '@/assets/images/logo_with_text2.png';
import GoogleLogoSrc from '@/assets/images/google_logo.png';
import {
  GoogleLogin,
  GoogleLogo,
  LoginTitle,
  LogoImage,
  ModalCloseButton,
  WhyLogin,
  WhyLoginDetail,
  WhyLoginDetailText,
} from './style';
import { Colors } from '@/styles/color';

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WhyLoginFeature: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  const [color, setColor] = useState<string>(Colors.Gray0);
  return (
    <WhyLoginDetail>
      <FaCheck size={16} color={color} onClick={() => setColor(Colors.Blue1)} />
      <WhyLoginDetailText>{children}</WhyLoginDetailText>
    </WhyLoginDetail>
  );
};

const Login: React.FC<Props> = ({ isOpen, setIsOpen }: Props) => {
  const featureTexts: string[] = [
    'Youtube를 통해 공부하는데 부족함을 느껴요',
    '다양한 영상들을 관리하는게 어려워요',
    '내 학습 기록 더 편리하게 관리할 수 없을까요?',
  ];
  const navigate = useNavigate();
  useEffect(() => {
    if (isOpen) noScroll.on();
    return () => noScroll.off();
  }, [isOpen]);

  return (
    <ReactModal
      className="modal"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen((state) => !state)}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={false}
    >
      <ModalCloseButton>
        <IoCloseOutline
          size="20"
          color={Colors.Gray2}
          onClick={() => setIsOpen((state) => !state)}
        />
      </ModalCloseButton>
      <LogoImage src={LogoWithTextSrc} />
      <LoginTitle>안녕하세요! VIVID는 이런 사람들을 위한 서비스입니다</LoginTitle>
      <WhyLogin>
        {featureTexts.map((featureText, idx) => (
          <WhyLoginFeature key={idx}>{featureText}</WhyLoginFeature>
        ))}
      </WhyLogin>
      <GoogleLogin
        onClick={() => {
          navigate('/redirect', {
            state: { url: process.env.BASE_API_URL + '/login/google' },
          });
        }}
      >
        <GoogleLogo src={GoogleLogoSrc} alt="google-logo" />
        구글 계정으로 로그인하기
      </GoogleLogin>
    </ReactModal>
  );
};

export default Login;

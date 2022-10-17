import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';
import { HiOutlineChevronLeft } from 'react-icons/hi';

import { Colors } from '@/util/Constant';
import submenuVectorImageSrc from '@/assets/images/submenu_vector.png';
import { Typography } from '@/styles/style';
import { PropsWithChildren, ReactNode, useState } from 'react';

interface AtomProps {
  atomState: string;
  changeMenuState?: React.Dispatch<React.SetStateAction<string>>;
  isNowSubMenu: boolean;
}

const SubmenuAtom: React.FC<AtomProps> = ({
  atomState,
  changeMenuState,
  isNowSubMenu,
}: AtomProps) => {
  return (
    <SubmenuAtomContainer
      onClick={() => changeMenuState !== undefined && changeMenuState(atomState)}
      isNowMenu={isNowSubMenu}
    >
      <SubmenuText>{atomState}</SubmenuText>
      {isNowSubMenu && <SubmenuVector src={submenuVectorImageSrc} />}
    </SubmenuAtomContainer>
  );
};

interface SubmenuProps {
  allMenuState: string[] | null;
  nowMenuState: string | null;
  changeMenuState?: React.Dispatch<React.SetStateAction<string>>;
  isPlusMethodExist: boolean;
  plusMethodComponent?: ReactNode;
}

const Submenu: React.FC<SubmenuProps> = ({
  allMenuState,
  nowMenuState,
  changeMenuState,
  isPlusMethodExist,
  plusMethodComponent,
}: SubmenuProps) => {
  const [isMethodOpen, setIsMethodOpen] = useState<boolean>(false);

  return (
    <SubmenuContainer>
      <SubmenuGroup>
        {allMenuState?.map((cur, idx) => (
          <SubmenuAtom
            atomState={cur}
            changeMenuState={changeMenuState}
            isNowSubMenu={cur === nowMenuState}
            key={idx}
          />
        ))}
      </SubmenuGroup>
      {isPlusMethodExist &&
        (isMethodOpen ? (
          <HiOutlineChevronLeft
            className="absolute-svg"
            size={30}
            onClick={() => setIsMethodOpen((state) => !state)}
          />
        ) : (
          <BsPlusLg
            className="absolute-svg"
            size={25}
            onClick={() => setIsMethodOpen((state) => !state)}
          />
        ))}
      {isPlusMethodExist === true && (
        <SubmenuModal isOpen={isMethodOpen}>{plusMethodComponent}</SubmenuModal>
      )}
    </SubmenuContainer>
  );
};

interface SubmenuModalProps extends PropsWithChildren {
  isOpen: boolean;
}

const SubmenuModal: React.FC<SubmenuModalProps> = ({ isOpen, children }: SubmenuModalProps) => {
  return <SubmenuModalContainer isOpen={isOpen}>{children}</SubmenuModalContainer>;
};

const SubmenuContainer = styled.div`
  width: 10%;
  height: calc(100vh - 60px);
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .absolute-svg {
    position: absolute;
    bottom: 10%;
  }
`;

const SubmenuGroup = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 3%;
  justify-content: flex-start;
  align-items: flex-end;
  margin-top: -120%;
`;

const SubmenuAtomContainer = styled.a<{ isNowMenu: boolean }>`
  height: 40px;
  width: 80%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isNowMenu }) => (isNowMenu ? Colors.Blue4 : Colors.Black)};
  background: ${({ isNowMenu }) => (isNowMenu ? Colors.White1 : Colors.White)};
  border-radius: 20px 0 0 20px;
  &:hover {
    background: ${Colors.White1};
    color: ${Colors.Blue4};
  }
`;

const SubmenuText = styled.p`
  ${Typography.Paragraph1};
  margin-left: 10%;
  z-index: 2;
`;

const SubmenuVector = styled.img`
  position: absolute;
  right: -19px;
  z-index: 1;
`;

const SubmenuModalContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  width: 400px;
  height: 150px;
  bottom: 3%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: ${({ isOpen }) => (isOpen ? '12%' : '-50%')};
  background: ${Colors.White};
  border-radius: 10px;
  z-index: 1;
  transition: all 0.5s ease-in-out 0s;
  border: 1px solid ${Colors.Gray0};
`;

export default Submenu;

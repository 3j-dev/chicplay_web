import styled from 'styled-components';
import { BsPlusLg } from 'react-icons/bs';

import { Colors } from '@/util/Constant';
import submenuVectorImageSrc from '@/assets/images/submenu_vector.png';
import { Typography } from '@/styles/style';

interface SubmenuProps {
  allMenuState: string[] | null;
  nowMenuState: string | null;
  changeMenuState: React.Dispatch<React.SetStateAction<string | null>>;
  statePlusMethod?: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AtomProps {
  atomState: string;
  changeMenuState: React.Dispatch<React.SetStateAction<string | null>>;
  isNowSubMenu: boolean;
}

const SubmenuAtom: React.FC<AtomProps> = ({
  atomState,
  changeMenuState,
  isNowSubMenu,
}: AtomProps) => {
  return (
    <SubmenuAtomContainer onClick={() => changeMenuState(atomState)} isNowMenu={isNowSubMenu}>
      <SubmenuText>{atomState}</SubmenuText>
      {isNowSubMenu && <SubmenuVector src={submenuVectorImageSrc} />}
    </SubmenuAtomContainer>
  );
};

const Submenu: React.FC<SubmenuProps> = ({
  allMenuState,
  nowMenuState,
  changeMenuState,
  statePlusMethod,
}: SubmenuProps) => {
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
      {statePlusMethod !== undefined && (
        <BsPlusLg size={25} onClick={() => statePlusMethod((state) => !state)} />
      )}
    </SubmenuContainer>
  );
};

const SubmenuContainer = styled.div`
  width: 10%;
  height: calc(100vh - 60px);
  background: ${Colors.White};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const SubmenuGroup = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  gap: 5%;
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

export default Submenu;

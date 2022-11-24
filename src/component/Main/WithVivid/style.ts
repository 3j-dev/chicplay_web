import { Colors } from '@/util/Constant';
import styled from 'styled-components';

const getBackgroundColor = (idx: number): string => {
  switch (idx) {
    case 0:
      return Colors.Blue4;
    case 1:
      return Colors.Yellow;
    case 2:
      return Colors.Red1;
    default:
      return '';
  }
};

const WithVividContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ;
`;

const WithVividTitle = styled.div`
  width: 60%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 5%;
`;

const WithVividAtomContainer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 10%;
`;

const WithVividAtomTitle = styled.div<{ idx: number }>`
  width: 15%;
  height: 13%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
  border-radius: 15px;
  letter-spacing: -0.07em;
  color: ${Colors.White};
  background-color: ${({ idx }) => getBackgroundColor(idx)};
  margin-bottom: 3%;
`;

const WithVividAtomSlogan = styled.div`
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.07em;
  text-align: center;
  margin-bottom: 3%;
`;

const WithVividAtomImage = styled.img`
  width: 90%;
  heigth: 40%;
`;

export {
  WithVividContainer,
  WithVividTitle,
  WithVividAtomContainer,
  WithVividAtomTitle,
  WithVividAtomSlogan,
  WithVividAtomImage,
};

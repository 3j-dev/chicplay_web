import { Colors } from '@/util/Constant';
import styled from 'styled-components';

const ToVividContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Black1};
`;

const ToVividImage = styled.img`
  width: 40%;
  height: 80%;
`;

const ToVividTextGroup = styled.div`
    width: 30%;
    height: 70%
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ToVividText = styled.p`
  font-size: 48px;
  font-weight: 500;
  line-height: 100px;
  letter-spacing: -0.07em;
  color: ${Colors.White};
  text-align: center;
`;

export { ToVividContainer, ToVividImage, ToVividTextGroup, ToVividText };

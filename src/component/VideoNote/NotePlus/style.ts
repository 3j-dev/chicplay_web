import styled from 'styled-components';

interface Props {
  activated: boolean;
}

export const NotePlusContainer = styled.div<Props>`
  display: ${({ activated }) => (activated ? 'flex' : 'none')};
  width: 100%;
  height: 32%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

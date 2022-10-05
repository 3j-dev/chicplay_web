import styled from 'styled-components';

interface ContentContainerProps {
  height: number;
}

const MainContainer = styled.main`
  width: 100%;
`;

const ContentContainer = styled.section<ContentContainerProps>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
`;

export { MainContainer, ContentContainer };

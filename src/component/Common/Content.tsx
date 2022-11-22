import styled from 'styled-components';

import { Colors } from '@/util/Constant';
import { ReactNode } from 'react';

interface ContentProps {
  atomInRow: number;
  atomCount: number;
  childrens: ReactNode[];
  fullscreen?: boolean;
}

interface ContentAtomProps extends Omit<ContentProps, 'childrens'> {
  children: ReactNode;
}

const ContentAtom: React.FC<ContentAtomProps> = ({
  atomInRow,
  atomCount,
  children,
}: ContentAtomProps) => {
  return (
    <ContentAtomContainer atomInRow={atomInRow} atomCount={atomCount}>
      {children}
    </ContentAtomContainer>
  );
};

const Content: React.FC<ContentProps> = ({
  atomInRow,
  atomCount,
  childrens,
  fullscreen,
}: ContentProps) => {
  return (
    <ContentContainer fullscreen={fullscreen === undefined ? false : fullscreen}>
      {childrens?.map((children, idx) => (
        <ContentAtom atomInRow={atomInRow} atomCount={atomCount} key={idx}>
          {children}
        </ContentAtom>
      ))}
    </ContentContainer>
  );
};

const ContentContainer = styled.main<{ fullscreen: boolean }>`
  width: ${({ fullscreen }) => (fullscreen ? '100%' : '90%')};
  height: calc(100vh - 60px);
  background: ${Colors.White1};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2%;
  flex-wrap: wrap;
`;

const ContentAtomContainer = styled.div<Omit<ContentProps, 'childrens'>>`
  width: ${({ atomInRow }) => `${90 / atomInRow}%`};
  height: ${({ atomInRow, atomCount }) => `${85 / (atomCount / atomInRow)}%`};
  border-radius: ${({ atomInRow, atomCount }) => `${80 / (atomCount / atomInRow)}px`};
  background-color: ${Colors.White};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Content;

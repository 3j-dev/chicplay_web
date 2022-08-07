import { Tldraw, useFileSystem } from '@tldraw/tldraw';

import { CanvasNoteContainer } from './style';

const CanvasNote: React.FC = () => {
  const fileSystmeEvents = useFileSystem();

  return (
    <CanvasNoteContainer>
      <Tldraw {...fileSystmeEvents} />
    </CanvasNoteContainer>
  );
};

export default CanvasNote;

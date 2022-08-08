import { Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
import FormData from 'form-data';
import axios from 'axios';
import { useCallback, useRef } from 'react';

import { CanvasNoteContainer } from './style';
import { NOTE_TYPE } from '@/util/Constant';

interface Props {
  nowNoteType: number;
}

const CanvasNote: React.FC<Props> = ({ nowNoteType }: Props) => {
  const fileSystmeEvents = useFileSystem();
  const tlDrawRef = useRef<TldrawApp | null>(null);

  const handleChange = useCallback((appState: TldrawApp) => {
    console.log(appState.document);
  }, []);
  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    tlDrawRef.current.setCamera([0, 0], 1, 'layout_mount');
    console.log(app);
  };

  const clearDrawing = useCallback(() => {
    if (tlDrawRef.current === null) return;
    const tool = tlDrawRef.current?.useStore.getState().appState.activeTool;
    tlDrawRef.current.deleteAll();
    tlDrawRef.current.selectTool(tool);
  }, []);

  return (
    <CanvasNoteContainer nowNoteType={nowNoteType}>
      <Tldraw
        onChange={handleChange}
        onMount={handleMount}
        showMultiplayerMenu={false}
        showZoom={false}
        {...fileSystmeEvents}
      />
    </CanvasNoteContainer>
  );
};

export default CanvasNote;

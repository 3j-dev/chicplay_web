import { TDExport, TDExportType, Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
import FormData from 'form-data';
import axios from 'axios';
import { useState, useCallback, useRef, useEffect } from 'react';

import CanvasNoteTool from './CanvasNoteTool';
import { CanvasNoteContainer } from './style';

interface Props {
  nowNoteType: number;
  exportClicked: boolean;
  setExportClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const CanvasNote: React.FC<Props> = ({ nowNoteType, exportClicked, setExportClicked }: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const fileSystmeEvents = useFileSystem();
  const tlDrawRef = useRef<TldrawApp | null>(null);
  console.log(tlDrawRef);

  const handleChange = useCallback((appState: TldrawApp) => {
    console.log(appState.document);
  }, []);

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    setIsMounted(true);
  };

  const clearDrawing = useCallback(() => {
    if (tlDrawRef.current === null) return;
    const tool = tlDrawRef.current?.useStore.getState().appState.activeTool;
    tlDrawRef.current.deleteAll();
    tlDrawRef.current.selectTool(tool);
  }, []);

  useEffect(() => {
    exportClicked && tlDrawRef.current?.exportImage(TDExportType.PNG);
    setExportClicked(false);
  }, [exportClicked]);

  return (
    <CanvasNoteContainer nowNoteType={nowNoteType}>
      {isMounted && <CanvasNoteTool tlDrawApp={tlDrawRef.current as TldrawApp} />}
      <Tldraw onChange={handleChange} onMount={handleMount} showUI={false} {...fileSystmeEvents} />
    </CanvasNoteContainer>
  );
};

export default CanvasNote;

import { TDExportType, Tldraw, TldrawApp, useFileSystem } from '@tldraw/tldraw';
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

  const handleMount = (app: TldrawApp) => {
    tlDrawRef.current = app;
    setIsMounted(true);
  };

  useEffect(() => {
    exportClicked && tlDrawRef.current?.exportImage(TDExportType.PNG);
    setExportClicked(false);
  }, [exportClicked, setExportClicked]);

  return (
    <CanvasNoteContainer nowNoteType={nowNoteType}>
      {isMounted && (
        <CanvasNoteTool tlDrawApp={tlDrawRef.current as TldrawApp} isPlusFeatureIn={false} />
      )}
      <Tldraw onMount={handleMount} showUI={false} {...fileSystmeEvents} />
    </CanvasNoteContainer>
  );
};

export default CanvasNote;

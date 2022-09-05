import { useState } from 'react';

import { NOTE_TYPE } from '@/util/Constant';
import CanvasNote from './CanvasNote';
import MarkdownNote from './MarkdownNote';
import NoteSlider from './NoteSlider';
import NoteExport from './NoteExport';

import { VideoNoteContainer } from './style';

interface NoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
}

const VideoNote: React.FC<NoteProps> = ({ setSnapShotClicked, snapShotURL }: NoteProps) => {
  const [noteType, setNoteType] = useState<number>(NOTE_TYPE.MARKDOWN);
  const [markdownExportClicked, setMarkdownExportClicked] = useState<boolean>(false);
  const [canvasExportClicked, setCanvasExportClicked] = useState<boolean>(false);

  return (
    <VideoNoteContainer>
      <NoteSlider setNowNoteType={setNoteType} nowNoteType={noteType} />
      <MarkdownNote
        setSnapShotClicked={setSnapShotClicked}
        snapShotURL={snapShotURL}
        nowNoteType={noteType}
        exportClicked={markdownExportClicked}
        setExportClicked={setMarkdownExportClicked}
      />
      <CanvasNote
        nowNoteType={noteType}
        exportClicked={canvasExportClicked}
        setExportClicked={setCanvasExportClicked}
      />
      <NoteExport
        setExportClicked={
          noteType === NOTE_TYPE.MARKDOWN ? setMarkdownExportClicked : setCanvasExportClicked
        }
      />
    </VideoNoteContainer>
  );
};

export default VideoNote;

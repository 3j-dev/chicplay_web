import { useState } from 'react';

import { NOTE_TYPE, NOTE_PLUS_TYPE } from './Constant';
import CanvasNote from './CanvasNote';
import MarkdownNote from './MarkdownNote';
import NoteSlider from './NoteSlider';
import NoteExport from './NoteExport';
import Dropdown from './Dropdown';

import { VideoNoteContainer } from './style';
import NotePlus from './NotePlus';

interface NoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
  individualVideoId: string;
}

const VideoNote: React.FC<NoteProps> = ({
  setSnapShotClicked,
  snapShotURL,
  individualVideoId,
}: NoteProps) => {
  const [noteType, setNoteType] = useState<number>(NOTE_TYPE.MARKDOWN);
  const [markdownExportClicked, setMarkdownExportClicked] = useState<boolean>(false);
  const [canvasExportClicked, setCanvasExportClicked] = useState<boolean>(false);
  const [dropdownActivated, setDropdownActivated] = useState<boolean>(false);
  const [notePlusType, setNotePlusType] = useState<number>(NOTE_PLUS_TYPE.DEFAULT);

  return (
    <VideoNoteContainer>
      <NoteSlider
        setNowNoteType={setNoteType}
        nowNoteType={noteType}
        setDropdownActivated={setDropdownActivated}
      />
      <Dropdown
        dropdownActivated={dropdownActivated}
        setDropdownActivated={setDropdownActivated}
        setNotePlusType={setNotePlusType}
      />
      <NotePlus
        notePlusType={notePlusType}
        setNotePlusType={setNotePlusType}
        individualVideoId={individualVideoId}
      />
      <MarkdownNote
        setSnapShotClicked={setSnapShotClicked}
        snapShotURL={snapShotURL}
        nowNoteType={noteType}
        exportClicked={markdownExportClicked}
        setExportClicked={setMarkdownExportClicked}
        individualVideoId={individualVideoId}
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

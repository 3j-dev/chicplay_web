import { useState, useRef } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { EditorContainer } from './style';

const VideoStreamNote: React.FC = () => {
  const [noteState, setNoteState] = useState<EditorState>(() => EditorState.createEmpty());

  const editorRef = useRef<Editor>(null);
  const focusEditor = () => {
    editorRef.current?.focus();
  };

  return (
    <EditorContainer onClick={focusEditor}>
      <Editor
        ref={editorRef}
        editorState={noteState}
        onChange={setNoteState}
        placeholder="let's do this"
      />
    </EditorContainer>
  );
};

export default VideoStreamNote;

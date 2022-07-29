import React, { useState, useRef } from 'react';
import Editor from '@draft-js-plugins/editor';
import { EditorState, DraftEditorCommand, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import { EditorContainer } from './style';

const VideoStreamNote: React.FC = () => {
  const [noteState, setNoteState] = useState<EditorState>(() => EditorState.createEmpty());
  const editorRef = useRef<Editor>(null);

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(noteState, command);
    if (newState) {
      setNoteState(newState);
      return 'handled';
    }
    return 'not-handled';
  };
  const handleToggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setNoteState(RichUtils.toggleInlineStyle(noteState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setNoteState(RichUtils.toggleBlockType(noteState, blockType));
  };
  const handleFocusEditor = () => {
    editorRef.current?.focus();
  };

  return (
    <EditorContainer onClick={handleFocusEditor}>
      <div>
        <button onMouseDown={(e) => handleBlockClick(e, 'header-one')}>h1</button>
        <button onMouseDown={(e) => handleBlockClick(e, 'header-two')}>h2</button>
        <button onMouseDown={(e) => handleBlockClick(e, 'header-three')}>h3</button>
        <button onMouseDown={(e) => handleBlockClick(e, 'unstyled')}>normal</button>
        <button onMouseDown={(e) => handleToggleClick(e, 'BOLD')}>bold</button>
        <button onMouseDown={(e) => handleToggleClick(e, 'ITALIC')}>italic</button>
        <button onMouseDown={(e) => handleToggleClick(e, 'STRIKETHROUGH')}>strikthrough</button>
        <button onMouseDown={(e) => handleBlockClick(e, 'ordered-list-item')}>ol</button>
        <button onMouseDown={(e) => handleBlockClick(e, 'unordered-list-item')}>ul</button>
      </div>
      <Editor
        ref={editorRef}
        editorState={noteState}
        onChange={setNoteState}
        handleKeyCommand={handleKeyCommand}
      />
    </EditorContainer>
  );
};

export default VideoStreamNote;

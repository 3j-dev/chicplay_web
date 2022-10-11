import FroalaEditor from 'react-froala-wysiwyg';
import Froala from 'froala-editor';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { FroalaContainer } from './style';
import { config } from './config';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';
import { getTextMemo, updateTextMemo } from '@/api/stream';

interface MarkdownNoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
  nowNoteType: number;
  exportClicked: boolean;
  setExportClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const MarkdownNote: React.FC<MarkdownNoteProps> = ({
  setSnapShotClicked,
  snapShotURL,
  nowNoteType,
  exportClicked,
  setExportClicked,
}: MarkdownNoteProps) => {
  const [model, setModel] = useState<string>('');
  const editorInstance = useRef<FroalaEditor>(null);

  const handleModelChange = (modelData: string) => {
    setModel(modelData);
    const requestData = {
      id: 'userId',
      individualVideoId: '1',
      stateJson: model,
      videoTime: '1',
    };
    updateTextMemo('1', JSON.stringify(requestData));
  };
  // useLayoutEffect(() => {
  //   const data = getTextMemo('1');
  //   setModel(JSON.parse(data.stateJson) || '');
  // }, []);

  useEffect(() => {
    if (snapShotURL.length > 0)
      editorInstance.current?.editor.image.insert(snapShotURL, null, null, null);
  }, [snapShotURL]);

  Froala.DefineIcon('videoSnapshot', { SVG_KEY: 'add' });
  Froala.RegisterCommand('videoSnapshot', {
    title: 'Video Snapshot',
    icon: 'videoSnapshot',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      setSnapShotClicked(true);
    },
  });

  return (
    <FroalaContainer nowNoteType={nowNoteType}>
      <FroalaEditor
        ref={editorInstance}
        model={model}
        onModelChange={handleModelChange}
        tag="textarea"
        config={config}
      />
    </FroalaContainer>
  );
};

export default MarkdownNote;

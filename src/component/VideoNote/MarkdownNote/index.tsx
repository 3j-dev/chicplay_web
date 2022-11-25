import FroalaEditor from 'react-froala-wysiwyg';
import Froala from 'froala-editor';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { FroalaContainer } from './style';
import { config } from './config';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/plugins.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/css/third_party/font_awesome.min.css';
import 'froala-editor/js/third_party/font_awesome.min.js';
import 'froala-editor/css/third_party/embedly.min.css';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/css/third_party/image_tui.min.css';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/css/third_party/spell_checker.min.css';
import 'froala-editor/js/third_party/spell_checker.min.js';
import 'froala-editor/js/languages/ko.js';
import { getTextMemo, reflectTextMemoInDB, updateTextMemo } from '@/api/stream';
import useInterval from '@/hook/useInterval';
import { pushNotification } from '@/util/notification';

interface MarkdownNoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
  nowNoteType: number;
  exportClicked: boolean;
  setExportClicked: React.Dispatch<React.SetStateAction<boolean>>;
  individualVideoId: string;
}

const MarkdownNote: React.FC<MarkdownNoteProps> = ({
  setSnapShotClicked,
  snapShotURL,
  nowNoteType,
  exportClicked,
  setExportClicked,
  individualVideoId,
}: MarkdownNoteProps) => {
  const [model, setModel] = useState<string>('');
  const editorInstance = useRef<FroalaEditor>(null);

  useLayoutEffect(() => {
    getTextMemo(individualVideoId).then((res) => setModel(res.data.stateJson));
  }, [individualVideoId]);

  useEffect(() => {
    return () => {
      const requestData = {
        stateJson: model,
        videoTime: '05:12:12',
      };
      model.length > 0 && reflectTextMemoInDB(individualVideoId, requestData);
    };
  }, [individualVideoId, model]);

  useInterval(() => {
    const requestData = {
      stateJson: model,
      videoTime: '05:12:12',
    };
    if (model.length > 0) {
      reflectTextMemoInDB(individualVideoId, requestData).then(() =>
        pushNotification('자동 저장 완료', 'success'),
      );
    }
  }, 300000);

  useEffect(() => {
    if (snapShotURL.length > 0)
      editorInstance.current?.editor.image.insert(snapShotURL, null, null, null);
  }, [snapShotURL]);

  const handleModelChange = (modelData: string) => {
    setModel(modelData);
    const requestData = {
      stateJson: model,
      videoTime: '05:12:12',
    };
    model.length > 0 && updateTextMemo(individualVideoId, requestData);
  };

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

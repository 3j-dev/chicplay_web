import FroalaEditor from 'react-froala-wysiwyg';
import Froala from 'froala-editor';
import FormData from 'form-data';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import { FroalaContainer } from './style';
import {
  FROALA_TEXT_BUTTONS,
  FROALA_PARAGRAPH_BUTTONS,
  FROALA_RICH_BUTTONS,
  FROALA_MISC_BUTTONS,
  FROALA_PLUGINS,
} from '@/util/Constant';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';

interface MarkdownNoteProps {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
  nowNoteType: number;
}

const MarkdownNote: React.FC<MarkdownNoteProps> = ({
  setSnapShotClicked,
  snapShotURL,
  nowNoteType,
}: MarkdownNoteProps) => {
  const [model, setModel] = useState<string>('');
  const editorInstance = useRef<FroalaEditor>(null);

  const handleModelChange = (modelData: string) => {
    setModel(modelData);
  };

  useEffect(() => {
    console.log(model); // stomp를 이용한 socket 통신
  }, [model]);

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
        config={{
          imageMaxSize: 10 * 1024 * 1024,
          imageDefaultAlign: 'left',
          imageDefaultDisplay: 'inline-block',
          imageAllowedTypes: ['jpeg', 'jpg', 'png'],
          events: {
            'image.beforeUpload': (images) => {
              const formData = new FormData();
              formData.append('multipartFile', images[0]);

              axios
                .post(process.env.SNAPSHOT_API, formData, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                  },
                })
                .then((res) => {
                  editorInstance.current?.editor.image.insert(
                    res.data[0].filePath,
                    null,
                    null,
                    editorInstance.current?.editor.image.get(),
                  );
                })
                .catch((err) => {
                  console.log(err);
                });
              return false;
            },
          },
          attribution: false,
          placeholder: 'Start typing...',
          toolbarButtons: {
            moreText: {
              buttons: FROALA_TEXT_BUTTONS,
            },
            moreParagraph: {
              buttons: FROALA_PARAGRAPH_BUTTONS,
            },
            moreRich: {
              buttons: FROALA_RICH_BUTTONS,
            },
            moreMisc: {
              buttons: FROALA_MISC_BUTTONS,
              align: 'right',
              buttonsVisible: 3,
            },
          },
          pluginsEnabled: FROALA_PLUGINS,
        }}
      />
    </FroalaContainer>
  );
};

export default MarkdownNote;

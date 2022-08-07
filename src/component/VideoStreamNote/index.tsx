import FroalaEditor from 'react-froala-wysiwyg';
import Froala from 'froala-editor';
import FormData from 'form-data';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import { FroalaContainer } from './style';
import videoSnapshot from '@/util/videoSnapshot';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';

interface Props {
  setSnapShotClicked: React.Dispatch<React.SetStateAction<boolean>>;
  snapShotURL: string;
}

const VideoStreamNote: React.FC<Props> = ({ setSnapShotClicked, snapShotURL }) => {
  const [model, setModel] = useState<string>('');
  const editorInstance = useRef<FroalaEditor>(null);

  const handleModelChange = (modelData: string) => {
    setModel(modelData);
  };

  useEffect(() => {
    console.log(model); // stomp를 이용한 socket 통신
  }, [model]);

  useEffect(() => {
    if (snapShotURL.length > 0) {
      console.log(editorInstance.current, snapShotURL);
      editorInstance.current?.editor.image.insert(snapShotURL, null, null, null);
    }
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
    <FroalaContainer>
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
              buttons: [
                'bold',
                'italic',
                'underline',
                'strikeThrough',
                'subscript',
                'superscript',
                'fontFamily',
                'fontSize',
                'textColor',
                'backgroundColor',
                'inlineClass',
                'inlineStyle',
                'clearFormatting',
              ],
            },
            moreParagraph: {
              buttons: [
                'alignLeft',
                'alignCenter',
                'formatOLSimple',
                'alignRight',
                'alignJustify',
                'formatOL',
                'formatUL',
                'paragraphFormat',
                'paragraphStyle',
                'lineHeight',
                'outdent',
                'indent',
                'quote',
              ],
            },
            moreRich: {
              buttons: [
                'insertLink',
                'insertImage',
                'insertVideo',
                'insertTable',
                'emoticons',
                'fontAwesome',
                'specialCharacters',
                'embedly',
                'insertFile',
                'insertHR',
              ],
            },
            moreMisc: {
              buttons: [
                'videoSnapshot',
                'undo',
                'redo',
                'fullscreen',
                'print',
                'getPDF',
                'spellChecker',
                'selectAll',
                'html',
                'help',
              ],
              align: 'right',
              buttonsVisible: 2,
            },
          },
          pluginsEnabled: [
            'table',
            'spell',
            'quote',
            'save',
            'quickInsert',
            'paragraphFormat',
            'paragraphStyle',
            'help',
            'draggable',
            'align',
            'link',
            'lists',
            'file',
            'image',
            'emoticons',
            'url',
            'video',
            'embedly',
            'colors',
            'entities',
            'inlineClass',
            'inlineStyle',
            'imageTUI',
          ],
        }}
      />
    </FroalaContainer>
  );
};

export default VideoStreamNote;

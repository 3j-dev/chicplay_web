import FroalaEditor from 'react-froala-wysiwyg';
import Froala from 'froala-editor';
import { useState, useEffect } from 'react';

import { FroalaContainer } from './style';
import videoSnapshot from '@/util/videoSnapshot';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';

const VideoStreamNote: React.FC = () => {
  const [model, setModel] = useState<string>('');

  const handleModelChange = (modelData: string) => {
    setModel(modelData);
  };

  useEffect(() => {
    console.log(model); // stomp를 이용한 socket 통신
  }, [model]);

  Froala.DefineIcon('videoSnapshot', { SVG_KEY: 'add' });
  Froala.RegisterCommand('videoSnapshot', {
    title: 'Video Snapshot',
    icon: 'videoSnapshot',
    focus: true,
    undo: true,
    refreshAfterCallback: true,
    callback: () => {
      videoSnapshot();
    },
  });

  return (
    <FroalaContainer>
      <FroalaEditor
        model={model}
        onModelChange={handleModelChange}
        tag="textarea"
        config={{
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

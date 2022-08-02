import Froala from 'react-froala-wysiwyg';
import { useRef, useState, useEffect } from 'react';

import { FroalaContainer } from './style';

import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/js/plugins.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';

const VideoStreamNote: React.FC = () => {
  const ref = useRef<Froala>(null);
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  const [editor, setEditor] = useState<any>(undefined);
  const [model, setModel] = useState<string>('');

  console.log(ref);
  const handleModelChange = (model: any) => {
    setModel(model);
  };
  console.log(model);
  useEffect(() => {
    console.log(ref.current);
  }, [ref]);

  return (
    <FroalaContainer>
      <Froala
        ref={ref}
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

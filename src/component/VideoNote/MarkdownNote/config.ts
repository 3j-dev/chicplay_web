import axios from 'axios';

import { FROALA_TEXT_BUTTONS, FROALA_RICH_BUTTONS, FROALA_PLUGINS } from '@/util/Constant';

export const config = {
  imageMaxSize: 10 * 1024 * 1024,
  imageDefaultAlign: 'left',
  imageDefaultDisplay: 'inline-block',
  imageAllowedTypes: ['jpeg', 'jpg', 'png'],
  events: {
    'image.beforeUpload': (images: File[]) => {
      const formData = new FormData();
      formData.append('multipartFile', images[0]);

      axios
        .post(process.env.SNAPSHOT_API as string, formData, {
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
  placeholder: '<h1>제목</h1><h4>내용을 입력해주세요.</h4>',
  toolbarButtons: {
    moreText: {
      buttons: FROALA_TEXT_BUTTONS,
      buttonsVisible: 8,
      align: 'center',
    },
    moreRich: {
      buttons: FROALA_RICH_BUTTONS,
      buttonsVisible: 7,
      align: 'center',
    },
  },
  // Change buttons for XS screen.
  toolbarButtonsXS: [
    ['undo', 'redo'],
    ['bold', 'italic', 'underline'],
  ],
  pluginsEnabled: FROALA_PLUGINS,
};

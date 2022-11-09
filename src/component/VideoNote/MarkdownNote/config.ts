import { FROALA_BUTTONS, FROALA_PLUGINS } from '@/util/Constant';

export const config = {
  key: process.env.FROALA_LICENSE_KEY,
  imageMaxSize: 10 * 1024 * 1024,
  imageDefaultAlign: 'left',
  imageDefaultDisplay: 'inline-block',
  imageAllowedTypes: ['jpeg', 'jpg', 'png'],
  attribution: false,
  placeholder: '<h1>제목</h1><h4>내용을 입력해주세요.</h4>',
  toolbarButtons: {
    moreText: {
      buttons: FROALA_BUTTONS,
      buttonsVisible: 17,
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

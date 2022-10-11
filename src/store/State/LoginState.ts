import { atom } from 'recoil';

const LoginState = atom<boolean>({
  key: 'LoginState',
  default: false,
});

export { LoginState };

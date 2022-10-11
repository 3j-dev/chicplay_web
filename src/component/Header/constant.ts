export const LOGIN_SELECT = {
  LOGIN: 0,
  SIGN_UP: 1,
};

export interface RouterT {
  title: string;
  route: string;
}

export const NAV_ROUTER: RouterT[] = [
  {
    title: '강의',
    route: '/space',
  },
  {
    title: '업로드',
    route: '/upload',
  },
  {
    title: '환경설정',
    route: '/setting',
  },
];

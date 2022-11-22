import { LectureSpaceT } from '@/interfaces/setting';

export const tempData: LectureSpaceT[] = [
  {
    id: 2,
    name: '개인 영상',
    description: 'test01님의 개인 영상 그룹 입니다.',
    videos: [
      {
        id: 1,
        title: 'test',
        description: 'test',
      },
      {
        id: 6,
        title: 'test',
        description: 'test',
      },
      {
        id: 11,
        title: 'webex test 입니둥!',
        description: '이것은 테스트이빈다!!!',
      },
    ],
    users: [
      {
        email: 'test01@gmail.com',
        name: 'test01',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
      {
        email: 'test02@gmail.com',
        name: 'test02',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
    ],
  },
  {
    id: 6,
    name: 'test01 plus',
    description: 'tsestest plus',
    videos: [],
    users: [
      {
        email: 'test01@gmail.com',
        name: 'test01',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
    ],
  },
];

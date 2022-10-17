import { LectureSpaceT } from '@/interfaces/setting';

export const data: LectureSpaceT[] = [
  {
    id: 1,
    name: '개인 영상',
    description: '정벽벽님의 개인 영상 그룹 입니다.',
    videos: [
      {
        id: 1,
        title: '아아아',
        description: 'dldlddqw',
      },
      {
        id: 2,
        title: 'test2',
        description: 'test2',
      },
    ],
    users: [
      {
        email: 'jasd@naver.com',
        name: '엄준식',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
      {
        email: 'jawwsd@naver.com',
        name: '엄준식',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
    ],
  },
  {
    id: 4,
    name: 'test',
    description: 'tsestest',
    videos: [
      {
        id: 3,
        title: '아아아',
        description: 'dldlddqw',
      },
    ],
    users: [
      {
        email: 'jasd@naver.com',
        name: '엄준식',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
      {
        email: 'jasddd@naver.com',
        name: '엄준식',
        picture:
          'https://lh3.googleusercontent.com/a/ALm5wu30vxzpsZnUhBIzgRdhl7FeR-dEt0WTCQxaLNUC=s96-c',
      },
    ],
  },
];

export const tempSpace: LectureSpaceT = {
  id: 0,
  name: '',
  description: '',
  videos: [],
  users: [],
};

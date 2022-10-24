import { LectureStreamSpaceT } from '@/interfaces/space';

export const data: LectureStreamSpaceT[] = [
  {
    id: 1,
    name: '개인 영상',
    description: '정벽벽님의 개인 영상 그룹 입니다.',
    videos: [
      {
        id: 1,
        individualVideoId: '486fbc3d-9b50-4cec-aeb7-627e41889387',
        title: '아아아',
        description: 'dldlddqw',
      },
      {
        id: 2,
        individualVideoId: 'cc02c5f2-57ae-4940-9607-7fc5ff8b8ea6',
        title: 'test2',
        description: 'test2',
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
        individualVideoId: '5de192fb-e235-426b-8ce5-3993c0cfd6ff',
        title: '아아아',
        description: 'dldlddqw',
      },
    ],
  },
];

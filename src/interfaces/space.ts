import { LectureSpaceT, SpaceVideoT } from './setting';

export interface LectureVideoT extends SpaceVideoT {
  individualVideoId: string;
  lastAccessTime: string;
  progressRate: number;
  thumbnailImagePath: string;
}

export interface LectureStreamSpaceT extends Omit<Omit<LectureSpaceT, 'videos'>, 'users'> {
  videos: LectureVideoT[];
}

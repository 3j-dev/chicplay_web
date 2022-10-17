export interface SpaceVideoT {
  id: number;
  title: string;
  description: string;
}

export interface SpaceUserT {
  email: string;
  name: string;
  picture: string;
}

export interface LectureSpaceT {
  id: number;
  name: string;
  description: string;
  videos: SpaceVideoT[];
  users: SpaceUserT[];
}

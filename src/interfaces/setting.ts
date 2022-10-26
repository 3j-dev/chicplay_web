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

export interface SpaceSimpleT {
  id: number;
  name: string;
  description: string;
}

export interface LectureSpaceT extends SpaceSimpleT {
  videos: SpaceVideoT[];
  users: SpaceUserT[];
}

export interface UserPlusT {
  id: number;
  userEmail: string;
}

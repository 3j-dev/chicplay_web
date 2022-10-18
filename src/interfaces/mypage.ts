export interface StudiedVideoT {
  videoSpaceId: number;
  videoSpaceName: string;
  videoSpaceDescription: string;
  individualVideoId: string;
  updatedDate: string;
  videoTitle: string;
  videoDescription: string;
  lastAccessTime: string;
}

export interface MyDataT {
  email: string;
  name: string;
  picture: string;
  lastStudiedIndividualVideo: StudiedVideoT;
  videoSpaceCount: number;
  totalIndividualVideoCount: number;
  completedIndividualVideoCount: number;
  dashboardIndividualVideos: StudiedVideoT[];
  connectedWebex: boolean;
}

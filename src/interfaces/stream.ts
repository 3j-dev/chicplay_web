export interface IndivudalVideoInfoT {
  title: string;
  description: string;
  videoFilePath: string;
  visualIndexImageFilePathList: string[];
  createdDate: string;
}

export interface SnapshotInfoT {
  filePath: string;
  time: string;
}

export interface TextMemoT {
  individualVideoId: string;
  stateJson: string;
  videoTime: VideoTimeT;
  createdAt: string;
}

interface VideoTimeT {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

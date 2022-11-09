export const apiRoutes = {
  uploadVideo: '/api/videos',
  postImageSnapshot:
    '/api/individual-videos/{individual-video-id}/snapshot?video-time={video-time}',
  getVideoInfo: '/api/individual-videos/{individual-video-id}',

  createVideoSpace: '/api/video-space',
  deleteVideoSpace: '/api/video-space/{video-space-id}',
  plusUserInVideoSpace: '/api/video-space/{video-space-id}/{user-email}',
  getHostVideoSpaceList: '/api/video-space/hosted',

  updateTextMemo: '/api/individual-videos/{individual-video-id}/cache/text-memo-state',
  getTextMemo: '/api/individual-videos/{individual-video-id}/cache/text-memo-state-latest',
  reflectTextMemoInDB: '/api/individual-videos/{individual-video-id}/text-memo-states',

  refreshToken: '/api/auth/token',
  logout: '/api/auth/logout',
  getMyPageDashboard: '/api/my-page/dashboard',

  postWebexLoginCode: '/api/webex/token/{code}',
  getWebexRecordingList: '/api/webex/recordings',
  postWebexRecording: '/api/webex/recordings/{video-space-id}/{recording-id}',
  uploadVideoFile: '/api/videos/{video-space-id}',

  getVideoSpaceList: '/api/video-space',
  getIndividualVideo: '/api/individual-videos/{individual-video-id}',
  freshVideoAccessTime: '/api/individual-videos/{individual-video-id}/accessed',
  getNoteList: '/api/individual-videos/{individual-video-id}/text-memo-state-history',
};

export const apiRoutes = {
  uploadVideo: '/api/videos',
  postImageSnapshot: '/api/videos/{individual-video-id}/snapshot',
  getVideoInfo: '/api/videos/{individual-video-id}',

  createVideoSpace: '/api/video-space',
  getVideoSpaceList: '/api/video-space',
  plusUserInVideoSpace: '/api/video-space/{video-space-id}/{user-email}',
  getHostVideoSpaceList: '/api/video-space/hosted',

  updateTextMemo: '/api/videos/{individual-video-id}/cache/text-memo-states',
  getTextMemo: '/api/{individual-video-id}/cache/text-memo-state-latest',

  refreshToken: '/api/auth/token',
  logout: '/api/auth/logout',
  getMyPageDashboard: '/api/my-page/dashboard',
};

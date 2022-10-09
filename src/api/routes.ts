export const apiRoutes = {
  uploadVideo: '/api/videos',
  postImageSnapshot: '/api/videos/{individual-video-id}/snapshot',
  getVideoInfo: '/api/videos/{individual-video-id}',

  createVideoSpace: '/api/video-space',
  getVideoSpaceList: '/api/video-space',
  addSpaceAccount: '/api/video-space-participant',

  updateTextMemo: '/api/videos/{individual-video-id}/cache/text-memo-states',
  getTextMemo: '/api/{individual-video-id}/cache/text-memo-state-latest',

  refreshToken: '/auth/token',
};

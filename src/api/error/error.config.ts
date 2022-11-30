import { pushNotification } from '@/util/notification';

type ErrorConfig = { message: string };

const errorConfig: Record<string, ErrorConfig> = {
  // Common
  C01: {
    message: '잘못된 입력값입니다',
  },
  C02: {
    message: '잘못된 입력값입니다',
  },
  C03: {
    message: '해당 객체를 찾을 수 없습니다',
  },
  C04: {
    message: '서버에 문제가 발생했습니다',
  },
  C05: {
    message: '잘못된 타입의 값입니다',
  },

  //User
  A01: {
    message: '접근 권한이 없습니다',
  },
  A03: {
    message: '해당 사용자를 찾을 수 없습니다',
  },
  A04: {
    message: '비밀번호 입력 가능 횟수를 초과했습니다.',
  },
  A05: {
    message: '이메일이 중복되었습니다',
  },

  //User-Token
  AT01: {
    message: '로그인이 만료되었습니다',
  },
  AT02: {
    message: '유효하지 않은 접근입니다',
  },
  AT03: {
    message: '로그인을 진행해주십시오',
  },
  'AT03-1': {
    message: '웨벡스 로그인을 우선 진행해주십시오',
  },
  AT04: {
    message: '로그인을 진행해주십시오',
  },
  AT05: {
    message: '로그인이 만료되었습니다',
  },
  AT06: {
    message: '로그인이 만료되었습니다',
  },

  //Video
  V01: {
    message: '접근 권한이 없습니다',
  },
  V02: {
    message: '해당 영상을 찾을 수 없습니다',
  },
  V03: {
    message: '영상 업로드가 실패했습니다',
  },

  //Individual Video
  IV01: {
    message: '개인 영상 접근 권한이 없습니다',
  },
  IV02: {
    message: '해당 개인 영상을 찾을 수 없습니다',
  },
  IV03: {
    message: '이미지 업로드가 실패했습니다',
  },
  IV04: {
    message: '필기 기록이 존재하지 않습니다',
  },

  //Video Space
  VS01: {
    message: '해당 비디오 스페이스에 접근 권한이 없습니다',
  },
  VS02: {
    message: '해당 비디오 스페이스 공간을 찾을 수 없습니다',
  },
  VS03: {
    message: '해당 유저는 이미 스페이스에 존재합니다',
  },
  VS04: {
    message: '해당 유저를 스페이스에서 찾을 수 없습니다',
  },
  VS05: {
    message: '해당 비디오 스페이스에 대한 호스트 권한이 필요합니다',
  },
  VS06: {
    message: '해당 스페이스의 호스트를 삭제할 수 없습니다',
  },

  //External API
  E01: {
    message: '외부 서비스 호출에 실패했습니다',
  },
};

export const getErrorToast = (errorCode: string): void => {
  const error = errorConfig[errorCode];

  if (!error) {
    return pushNotification('알 수 없는 에러가 발생했습니다', 'error');
  }
  return pushNotification(error.message, 'error');
};

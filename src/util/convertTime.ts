const getMinute = (_number: number): number => {
  return Math.floor(_number / 60);
};

const getSecond = (_number: number, _minute: number): number => {
  return Math.floor(_number - _minute * 60);
};

const makeString = (_minute: number, _second: number): string => {
  const timeArray: string[] = [String(_minute).padStart(2, '0'), String(_second).padStart(2, '0')];
  return timeArray.join(':');
};

export const convertTime = (_time: number | undefined): string => {
  if (!_time) return '';
  const minute: number = getMinute(_time);
  const second: number = getSecond(_time, minute);

  const timeString: string = makeString(minute, second);

  return timeString;
};

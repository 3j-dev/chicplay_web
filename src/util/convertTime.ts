const getMinute = (_number: number): number => {
  return Math.floor(_number / 60);
};

const getSecond = (_number: number, _minute: number): number => {
  return Math.floor(_number - _minute * 60);
};

const getMilisecond = (_number: number): number => {
  const tenMultipleNumber = _number * 10;
  return Math.round(tenMultipleNumber % 10);
};

const makeString = (_minute: number, _second: number, _milisecond: number): string => {
  const timeArray: string[] = [
    String(_minute).padStart(2, '0'),
    String(_second).padStart(2, '0'),
    String(_milisecond).padStart(2, '0'),
  ];
  return timeArray.join(' : ');
};

export const convertTime = (_time: number): string => {
  const minute: number = getMinute(_time);
  const second: number = getSecond(_time, minute);
  const milisecond: number = getMilisecond(_time);

  const timeString: string = makeString(minute, second, milisecond);

  return timeString;
};

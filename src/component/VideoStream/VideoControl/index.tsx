import { BsFillPlayFill } from '@react-icons/all-files/bs/BsFillPlayFill';
import { BsFillPauseFill } from '@react-icons/all-files/bs/BsFillPauseFill';
import { BsFillSkipEndFill } from '@react-icons/all-files/bs/BsFillSkipEndFill';
import { BsFillSkipStartFill } from '@react-icons/all-files/bs/BsFillSkipStartFill';
import { BsVolumeUpFill } from '@react-icons/all-files/bs/BsVolumeUpFill';
import { BsVolumeMuteFill } from '@react-icons/all-files/bs/BsVolumeMuteFill';

import { useState, useEffect } from 'react';

import {
  VideoControlBar,
  VideoControlBarContainer,
  VideoControlBottom,
  VideoControlContainer,
  VideoControlInput,
  VideoControlLeft,
  VideoControlRight,
  VideoControlTime,
  VideoNowTime,
  VideoTotalTime,
} from './style';
import { convertTime } from '@/util/convertTime';

interface Props {
  playerRef: React.RefObject<HTMLVideoElement>;
}

const VideoControl: React.FC<Props> = ({ playerRef }: Props) => {
  const [nowPlaying, setNowPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const totalTime: number = (playerRef && playerRef.current && playerRef.current.duration) || 0;
  const playerElement: HTMLVideoElement | null = playerRef && playerRef.current;
  const videoPercent: number = (currentTime / totalTime) * 100;

  const addTimeUpdate = () => {
    const observedPlayerElement = playerRef && playerRef.current;
    if (observedPlayerElement) {
      observedPlayerElement.addEventListener('timeupdate', () => {
        setCurrentTime(observedPlayerElement.currentTime);
      });
    }

    setNowPlaying(true);
    observedPlayerElement?.play();
  };

  const onProgressChange = (percent: number) => {
    if (playerElement) {
      const playingTime = playerElement.duration * (percent / 100);
      setCurrentTime(playingTime);
    }
  };

  const onMouseUp = () => {
    if (playerElement) {
      // controller를 옮긴 시점에 currentTime이 최신화 되지 않아, 이를 위해 수정
      playerElement.currentTime = currentTime;
      nowPlaying ? playerElement.play() : playerElement.pause();
    }
  };

  const onMouseDown = () => {
    if (playerElement) playerElement.pause();
  };

  const handleVolume = () => {
    if (!playerElement?.muted && playerElement) playerElement.muted = true;
    else {
      if (playerElement) playerElement.muted = false;
    }
  };

  const onPlayIconClick = () => {
    if (playerElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        playerElement.pause();
      } else {
        setNowPlaying(true);
        playerElement.play();
      }
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  return (
    <VideoControlContainer>
      <VideoControlBarContainer>
        <VideoControlBar videoPercent={videoPercent} />
        <VideoControlInput
          onChange={(e) => onProgressChange(parseInt(e.target.value, 10))}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          type="range"
          min="0"
          max="100"
          step="1"
          value={videoPercent}
        />
      </VideoControlBarContainer>
      <VideoControlBottom>
        <VideoControlLeft>
          <BsFillSkipStartFill size={24} />
          {nowPlaying ? (
            <BsFillPauseFill size={48} onClick={onPlayIconClick} />
          ) : (
            <BsFillPlayFill size={48} onClick={onPlayIconClick} />
          )}
          <BsFillSkipEndFill size={24} />
        </VideoControlLeft>
        <VideoControlRight>
          <VideoControlTime>
            <VideoNowTime>{convertTime(currentTime)}</VideoNowTime>
            <VideoTotalTime>{`/${convertTime(totalTime)}`}</VideoTotalTime>
          </VideoControlTime>
          {playerElement?.muted ? (
            <BsVolumeMuteFill onClick={handleVolume} size={24} />
          ) : (
            <BsVolumeUpFill onClick={handleVolume} size={24} />
          )}
        </VideoControlRight>
      </VideoControlBottom>
    </VideoControlContainer>
  );
};

export default VideoControl;

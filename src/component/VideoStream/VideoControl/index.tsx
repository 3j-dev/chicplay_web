import { PlayerPlay, PlayerPause } from 'tabler-icons-react';
import { useState, useEffect } from 'react';

import { VideoControlContainer } from './style';

interface Props {
  playerRef: React.RefObject<HTMLVideoElement>;
}

const VideoControl: React.FC<Props> = ({ playerRef }: Props) => {
  const [nowPlaying, setNowPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const totalTime: number = (playerRef && playerRef.current && playerRef.current.duration) || 0;
  const playerElement: HTMLVideoElement | null = playerRef && playerRef.current;

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
    !showControl && setShowControl(true);
    if (playerElement) {
      const playingTime = playerElement.duration * (percent / 100);
      setCurrentTime(playingTime);
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
      {nowPlaying ? (
        <PlayerPause onClick={onPlayIconClick} />
      ) : (
        <PlayerPlay onClick={onPlayIconClick} />
      )}
      {currentTime}
    </VideoControlContainer>
  );
};

export default VideoControl;

import React, { useState, useEffect, useContext } from 'react';
import { SongContext, RefContext } from '../context';
import { playAudio } from '../utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

export default function Player() {
  // Hooks
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const {
    currentSong: { audio, id },
    isPlaying,
    setIsPlaying,
    songs,
    setCurrentSong,
    setActiveSong
  }: PlayerTypes = useContext(SongContext);

  const audioRef = useContext(RefContext);

  useEffect(() => {
    setActiveSong(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  // Event Handlers
  const playSongHandler = (): void => {
    // Play/Pause Music
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLAudioElement>): void => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
  };

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({
      ...songInfo,
      currentTime: Number.parseFloat(e.target.value), // This was probably coming is as a string, converted it to Float
    });
  };

  const skipTrackHandler = (direction: string) => {
    // get Current Song Index
    let currentIndex = songs.findIndex((song) => song.id === id);
    // Skip Track
    if (direction === 'skip-forward') {
      setCurrentSong(songs[
        (currentIndex + 1) % songs.length // The modulus resets the currentIndex to 0, if the songs are over. 
      ]) 
    } else if (direction === 'skip-back') {
      if (currentIndex === 0) { // First Track
        setCurrentSong(songs[songs.length - 1])
      } else {
        setCurrentSong(songs[currentIndex - 1])
      }
    }
    playAudio(isPlaying, audioRef);
  };

  // Utils
  function formatTime(time: number) {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
          name=""
          id=""
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-back')}
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className={isPlaying ? 'pause' : 'play'}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')}
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
      <audio
        ref={audioRef}
        src={audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      ></audio>
    </div>
  );
}

interface PlayerTypes {
  currentSong: {
    audio: string;
    id: string;
  };
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  songs: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  }[];
  setCurrentSong: React.Dispatch<
    React.SetStateAction<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: string;
      active: boolean;
    }>
  >;
  setActiveSong: Function
}

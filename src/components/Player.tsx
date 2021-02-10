import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export default function Player({ currentSong: { audio }, isPlaying, setIsPlaying }: PropTypes) {
  // Hooks
  const [songInfo, setSongInfo] = useState({
    currentTime: 0, 
    duration: 0
  })
  const audioRef = useRef(null);

  // Event Handlers
  const playSongHandler = (): void => {
    // Play/Pause Music 
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false);
     } else {
      audioRef.current.play(); 
      setIsPlaying(true)
     } 
  }

  const timeUpdateHandler = (e: React.ChangeEvent<HTMLAudioElement>): void  => { 
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, 
      currentTime,
      duration
    })
  }

  const dragHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {  
    audioRef.current.currentTime = e.target.value
    setSongInfo({
      ...songInfo, 
      currentTime: Number.parseFloat(e.target.value)  // This was probably coming is as a string, converted it to Float
    })
  }

  // Utils
  function formatTime(time: number) {    
    return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range" name="" id=""/>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className={isPlaying ? "pause" : "play"} size="2x" icon={isPlaying ? faPause : faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={audio} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ></audio>
    </div>
  )
}

interface PropTypes {
  currentSong: {
    audio: string
  },
  isPlaying: boolean,
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}
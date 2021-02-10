import React, { useState, createContext } from 'react'
import chillHop from '../utils/chillHop';

export const SongContext = createContext<any>(null);   // ? Not sure about the type

export function SongProvider({ children }: any) {  // ? Not sure about the type

  // State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <SongContext.Provider value={{songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying}}>
      { children }
    </SongContext.Provider>
  )
}

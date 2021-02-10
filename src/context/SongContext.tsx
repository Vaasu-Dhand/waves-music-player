import React, { useState, createContext } from 'react'
import { chillHop } from '../utils';

export const SongContext = createContext<any>(null);   // ? Not sure about the type

export function SongProvider({ children }: any) {  // ? Not sure about the type

  // State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // Functions
  const setActiveSong = (songID: string) => { // Sets the Active Song
    setSongs(songs.map(song => {  // Changes the active property of the selectedSong and saves it to state.
      return (song.id === songID) ? {...song, active: true} : { ...song, active: false };
    }))
  }

  const store = {
    songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, setActiveSong
  }

  return (
    <SongContext.Provider value={store}>
      { children }
    </SongContext.Provider>
  )
}

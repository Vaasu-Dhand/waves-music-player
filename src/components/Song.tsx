import { useContext } from 'react';
import { SongContext } from '../context'

export default function Song() {

  const {currentSong: { name, cover, artist }}: SongTypes = useContext(SongContext);

  return (
    <div className="song-container">
      <img src={cover} alt="cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

interface SongTypes { // * Double Destructuring Typescript Types
  currentSong: {
    cover: string;
    name: string;
    artist: string
  }
}

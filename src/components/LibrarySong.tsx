import { useContext } from 'react';
import { SongContext, RefContext } from '../context';
import { playAudio } from '../utils'

export default function LibrarySong({ song }: PropTypes) {
  const { setCurrentSong, isPlaying, setActiveSong }: SongContextTypes = useContext(
    SongContext
  );

  // Hooks
  const audioRef = useContext(RefContext);

  // Event Handlers
  const songSelectHandler = () => {
    setCurrentSong(song);
    setActiveSong(song.id)
    playAudio(isPlaying, audioRef)
  };

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

interface PropTypes {
  song: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: string;
    active: boolean;
  };
}

interface SongContextTypes {
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
  setActiveSong: Function;
  isPlaying: boolean;
}

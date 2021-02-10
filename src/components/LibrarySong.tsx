import { useContext } from 'react';
import { SongContext, RefContext } from '../context';

export default function LibrarySong({ song }: PropTypes) {
  const { setCurrentSong, isPlaying, setActiveSong }: SongContextTypes = useContext(
    SongContext
  );

  // Hooks
  const audioRef = useContext(RefContext);

  // Event Handlers
  const songSelectHandler = () => {
    // To Get the song that the user clicked on
    // console.log(song);

    setCurrentSong(song);
    
    // Code for Setting Active track
    setActiveSong(song.id)

    if (isPlaying) {
      // * I dont get this
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          audioRef.current.play();
        });
      }
    }
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

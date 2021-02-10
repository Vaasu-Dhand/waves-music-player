export default function LibrarySong({ song, setCurrentSong }: PropTypes) {
  const songSelectHandler = () => {
    console.log(song);
    // To Get the song that the user clicked on
    setCurrentSong(song);
  };

  return (
    <div className="library-song" onClick={songSelectHandler}>
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
}

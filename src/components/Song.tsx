export default function Song({ currentSong: { cover, name, artist } }: SongProps) {
  return (
    <div className="song-container">
      <img src={cover} alt="cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  )
}

interface SongProps { // * Double Destructuring Typescript Types
  currentSong: {
    cover: string;
    name: string;
    artist: string
  }
}

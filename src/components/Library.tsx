import React, { useContext } from 'react';
import { SongContext } from '../context'
import { LibrarySong } from './index';

export default function Library() {

  const { songs }: LibraryTypes = useContext(SongContext);

  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
}

interface LibraryTypes {
  // Array of Songs
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
}

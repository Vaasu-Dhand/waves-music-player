import React, { useState } from 'react'
import { Song, Player } from './components/index'
import './styles/app.scss'
import chillHop from './utils/chillHop'

function App() {
  // State
  const [songs, setSongs] = useState(chillHop());
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;

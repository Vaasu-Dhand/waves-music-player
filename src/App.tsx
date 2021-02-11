import React from 'react';
import { Song, Player, Library, Nav } from './components/index';
import './styles/app.scss';
import { SongProvider, RefProvider, NavProvider } from './context';


function App() {
  
  return (
    <div className="App">
      <NavProvider>
        <Nav />
      <SongProvider>
        <Song />
        <RefProvider>
          <Player />
          <Library />
        </RefProvider>
      </SongProvider>
      </NavProvider>
    </div>
  );
}

export default App;


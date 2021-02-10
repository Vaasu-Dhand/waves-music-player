import React from 'react';
import { Song, Player, Library } from './components/index';
import './styles/app.scss';

import { SongProvider, RefProvider } from './context';

function App() {

  return (
    <div className="App">
      <SongProvider>
        <Song />
        <RefProvider>
          <Player />
        <Library/>
        </RefProvider>
      </SongProvider>
    </div>
  );
}

export default App;

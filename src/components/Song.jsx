import React from 'react'

export default function Song({ currentSong: { cover, name, artist } }) {
  return (
    <div className="song-container">
      <img src={cover} alt="cover" />
      <h2>{name}</h2>
      <h3>{artist}</h3>
      
    </div>
  )
}

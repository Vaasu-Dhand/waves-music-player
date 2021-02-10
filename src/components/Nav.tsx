import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'
import { NavContext } from '../context'

export default function Nav() {

  const { isLibraryVisible, setIsLibraryVisible } = useContext(NavContext);

  return (
    <nav>
      <h1>Waves</h1>
      <button
        className={isLibraryVisible ? "library-active" : ""}
        onClick={() => setIsLibraryVisible(!isLibraryVisible)}
      >
        Library
        <FontAwesomeIcon icon={faMusic}></FontAwesomeIcon>
      </button>
    </nav>
  )
}

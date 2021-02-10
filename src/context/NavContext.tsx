import React, { useState, createContext } from 'react'

export const NavContext = createContext<any>(null); // ? Not Sure about the type

export function NavProvider({ children }: any) {  // ? Not sure about the type

  const [isLibraryVisible, setIsLibraryVisible] = useState(false)

  return (
    <NavContext.Provider value={{isLibraryVisible, setIsLibraryVisible}}>
      { children }
    </NavContext.Provider>
  )
}

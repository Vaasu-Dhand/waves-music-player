import React, { useRef, createContext } from 'react'

export const RefContext = createContext<React.MutableRefObject<any> | null>(null);

export function RefProvider({ children }: any) {  // ? Not sure about the type

  const audioRef = useRef(null);

  return (
    <RefContext.Provider value={audioRef}>
      { children }
    </RefContext.Provider>
  )
}

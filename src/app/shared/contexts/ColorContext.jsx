import { createContext, useState } from 'react';

export const ColorContext = createContext('#232323');

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState('#232323');
  
  return (
    <ColorContext.Provider value={{ color, setColor }}>
      {children}
    </ColorContext.Provider>
  )
}

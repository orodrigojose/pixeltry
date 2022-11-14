import { createContext, useState } from 'react';

export const ToolContext = createContext('pen');

export const ToolContextProvider = ({ children }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [outlinePixel, setOutlinePixel] = useState(false);
  const [colorPicker, setColorPicker] = useState(false);
  const [tool, setTool] = useState('pen');
  
  const actions = {
    fullscreen: (doc) => {
      const $body = document.querySelector('.container-editor')
      
      setIsFullscreen(state => !state)
      isFullscreen ? $body.requestFullscreen() : doc.exitFullscreen()
    },
    toggleColorPicker: () => {
      setColorPicker(state => !state)
    }
  }
  
  return (
    <ToolContext.Provider value={{ tool, setTool, outlinePixel, setOutlinePixel, actions, colorPicker }}>
      {children}
    </ToolContext.Provider>
  )
}

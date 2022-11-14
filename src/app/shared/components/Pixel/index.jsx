import { useState, useContext } from 'react'
import { ColorContext } from '../../contexts/ColorContext'
import { ToolContext } from '../../contexts/ToolContext'

const Pixel = ({ size }) => {
  const { tool, setTool, outlinePixel } = useContext(ToolContext)
  const { color, setColor } = useContext(ColorContext)
  
  const [canChangeColor, setCanChangeColor] = useState(true)
  const [pixelColor, setPixelColor] = useState("#fff")
  const [oldColor, setOldColor] = useState(pixelColor)

  const pixelSize = 
    size.width >= 50 || size.height >= 50 ? '0.5'
    : (size.width >= 32 || size.height >= 32 ? '0.8'
    : size.width >= 20 || size.height >= 20 
    ? '1' : '1.5');

  const runAction = (event = null) => {
    if (['pen', 'eraser'].indexOf(tool) !== -1) {
      setPixelColor(tool === 'pen' ? color : '#fff')
      setCanChangeColor(false); return
    }

    setColor(event.target.style.backgroundColor)
    setTool('pen')
  }

  const changeColorOnHover = () => {
    setOldColor(pixelColor)
    setPixelColor(color)
  }

  const resetColor = () => {
    if (canChangeColor) setPixelColor(oldColor)
    setCanChangeColor(true)
  }
  
  const onMouseOver = (event) => {
    if (event.buttons === 1) runAction()
  }

  return (
    <div className="pixel"
      onClick={runAction}
      onDragStart={event => event.preventDefault()}
      onMouseDown={runAction}
      onTouchStart={runAction}
      onMouseOver={onMouseOver}
      onMouseEnter={() => {if (tool !== 'picker') changeColorOnHover()}}
      onMouseLeave={() => {if (tool !== 'picker') resetColor()}}
      style={{
        backgroundColor: pixelColor,
        width: `${pixelSize}em`, height: `${pixelSize}rem`,
        border: `${outlinePixel ? "0.15px solid black" : ''}`
      }}
    ></div>
  )
}

export default Pixel

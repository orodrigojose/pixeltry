import Sidebar from '../../shared/components/Sidebar'
import Canvas from '../../shared/components/Canvas'
import { SketchPicker } from 'react-color'
import { useRef, useContext } from 'react'
import { ToolContext } from '../../shared/contexts/ToolContext'
import { ColorContext } from '../../shared/contexts/ColorContext'
import './styles.sass'

const Editor = ({ width, height, draw, setDraw }) => {
  const { color, setColor } = useContext(ColorContext);
  const { colorPicker } = useContext(ToolContext);
  const canvasRef = useRef()
  
  return (
    <main className="container-editor">
      {colorPicker ?
        <SketchPicker
          color={color}
          onChangeComplete={(newColor) => setColor(newColor.hex)}
          className='sketchPicker'
        /> : null
      }
      <section className="editor">
        <Canvas
          width={width}
          height={height}
          canvasRef={canvasRef}
        />
        <Sidebar
          draw={draw}
          setDraw={setDraw}
          canvasRef={canvasRef}
        />
      </section>
    </main>
  )
}

export default Editor

import { ColorContext } from '../../contexts/ColorContext'
import { ToolContext } from '../../contexts/ToolContext'
import { useContext } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image'
import { FaExpand, FaPen, FaTrashAlt, FaTint, FaSave, FaPalette, FaTimesCircle, FaEraser, FaBorderAll } from 'react-icons/fa'
import './styles.sass'

const Sidebar = ({ draw, setDraw, canvasRef }) => {
  const { color, setColor } = useContext(ColorContext);
  const { tool, setTool, actions, setOutlinePixel, colorPicker } = useContext(ToolContext);
  
  const colors = [
    "#f44336", "#e91e63", "#9c27b0","#673ab7", "#3f51b5", "#2196f3",
    "#03a9f4", "#00bcd4", "#009688","#4caf50", "#8bc34a", "#cddc39",
    "#ffeb3b", "#ffc107", "#ff9800","#ff5722", "#795548", "#607d8b"
  ]

  return (
    <section className="sidebar">
      <div id="tools">
        <button onClick={() => setTool('pen')}
          className={`tool ${tool === "pen"? "selected": ""}`}
        >
          <FaPen />
        </button>
        <button onClick={() => setTool('eraser')} 
          className={`tool ${tool === "eraser"? "selected": ""}`}
        >
          <FaEraser />
        </button>
        <button
          onClick={(e) => setTool('picker')}
          className={`tool ${tool === "picker"? "selected": ""}`}
        >
          <FaTint />
        </button>
        <button
          className="tool"
          onClick={() => {
            const isConfirmed = window.confirm('Você quer apagar o desenho?')
            setDraw((state) => isConfirmed ? false : state)
          }}
        >
          <FaTrashAlt />
        </button>
        <button onClick={() => actions.fullscreen(document)} className="tool">
          <FaExpand />
        </button>
        <button onClick={() => setOutlinePixel(state => !state)} className="tool">
          <FaBorderAll />
        </button>
      </div>
      <div id="colors">
        <div
          id="colors-used"
          style={{backgroundColor: color}}
          onClick={() => actions.toggleColorPicker()}
        >
          {colorPicker 
            ?<FaTimesCircle className="icon" />
            : <FaPalette className="icon" />
          }
        </div>
        <ul id="pallete">
          {colors.map((color, i) =>
            <li className="color"
              key={i}
              onClick={() => setColor(color)}
              style={{ backgroundColor: color }}
            ></li>
          )}
        </ul>
      </div>
      <button onClick={() => exportComponentAsPNG(canvasRef, {fileName: 'canvas'})} id="export-btn">
        <FaSave/>
      </button>
    </section>
  )
}

export default Sidebar

import { FaUndoAlt, FaPlus, FaMinus } from 'react-icons/fa'
import { createRef } from 'react'
import PrismaZoom from 'react-prismazoom'
import Row from '../Row'
import './styles.sass'

const Canvas = ({ width, height, canvasRef }) =>{
  const prismaZoom = createRef()
  const rows = []
  const defaultWidth = 0 < width && width <= 54 ? width : 16
  const defaultHeight = 0 < height && height <= 54 ? height : 16
  
  for (let i = 0; i < defaultHeight; i++) {
    rows.push(<Row key={i} size={{width: defaultWidth, height: defaultHeight}} />)
  }
  
  return (
    <div className="canvas-container">
      <PrismaZoom
        doubleTouchMaxDelay={0}
        allowTouchEvents={true}
        ref={prismaZoom}
      >
        <div id="pixels" ref={canvasRef}>{rows}</div>
      </PrismaZoom>
      <section id="canvas-actions">
        <button className="action" onClick={() => prismaZoom.current.reset()}>
          <FaUndoAlt />
        </button>
        <button className="action" onClick={() => prismaZoom.current.zoomIn(1)}>
          <FaPlus />
        </button>
        <button className="action" onClick={() => prismaZoom.current.zoomOut(1)}>
          <FaMinus />
        </button>
      </section>
    </div>
  )
}

export default Canvas

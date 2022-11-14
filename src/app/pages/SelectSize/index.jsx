import { useState } from 'react'
import './styles.sass'

const InputSize = ({ size, setSize }) => {
  return (
    <input
      className="panelInput"
      defaultValue={size}
      min="1" max="54"
      onChange={(e) => setSize(parseInt(e.target.value))}
    />
  )
}

const PanelSize = (props) => {
  const { setDraw, setWidth, width, setHeight, height } = props
  const [displayWidth, setDisplayWidth] = useState(width)
  const [displayHeight, setDisplayHeight] = useState(height)
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const isNumber = (typeof displayWidth === "number" && typeof displayHeight === "number");
    const isMaxHeight = 55 > displayHeight && displayHeight > 0;
    const isMaxWidth = 55 > displayWidth && displayWidth > 0;

    if (isNumber && isMaxHeight && isMaxWidth) {
      setWidth(displayWidth)
      setHeight(displayHeight)
      setDraw(true); return
    }

    window.alert('Por favor, informe uma resolução válida;')
  }
  
  return (
    <section id="panel-container">
      <main id="panel">
        <section id="left">
          <h1>PixelTry</h1>
          <p>Esta é uma ferramenta simples para fazer pixel art, selecione a resolução(máximo 54px) para começar</p>
          <p>*Não recarregue a página durante o desenho, poid pode acontecer de apagar-lo</p>
        </section>
        <section id="right">
          <form onSubmit={handleSubmit}>
            <div id="size-params">
              <div className="size">
                <span>width</span>
                <InputSize size={displayWidth} setSize={setDisplayWidth} />
              </div>
              <span id="center-x">x</span>
              <div className="size">
                <span>height</span>
                <InputSize size={displayHeight} setSize={setDisplayHeight} />
              </div>
            </div>
            <button type="submit">Pronto!</button>
          </form>
        </section>
      </main>
    </section>
  )
}

export default PanelSize

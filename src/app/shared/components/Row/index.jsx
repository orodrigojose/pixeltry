import Pixel from '../Pixel'
import './styles.sass'

const Row = ({ size }) => {
  let pixels = []
  
  for (let i = 0; i < size.width; i++) {
    pixels.push(<Pixel size={size} key={i} />)
  }
  
  return <div className="row">{pixels}</div>
}

export default Row

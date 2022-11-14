import { FaGithub } from 'react-icons/fa'
import './styles.sass'

const Footer = () => {
  return (
    <footer className="footer-container">
      <span>made with 💜 by <a href="https://github.com/sennshi">Rodrigo j. sennshi</a></span>
      <a id="github-link" href="https://github.com/sennshi/pixeltry"><FaGithub className="icon"/></a>
    </footer>
  )
}

export default Footer

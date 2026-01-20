import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Mohammed Firdouse Pasha</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <a href="https://linkedin.com/in/pashafirdous" target="_blank" rel="noopener noreferrer" className="btn-primary">Connect</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

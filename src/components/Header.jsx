import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>My Blog</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/" className="nav-link">About</Link>
          <Link to="/" className="nav-link">Topics</Link>
          <button className="btn-primary">Get Started</button>
        </nav>
      </div>
    </header>
  )
}

export default Header

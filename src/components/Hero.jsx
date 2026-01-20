import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">What I'm thinking today</h1>
          <p className="hero-subtitle">
            Discover my thoughts, ideas, and insights on technology, learning, and problem-solving. Welcome to my personal knowledge space.
          </p>
          <a href="/about" className="hero-btn">Learn more about me</a>
        </div>
        <div className="hero-image">
          <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" fill="#000" opacity="0.1"/>
            <circle cx="220" cy="180" r="120" fill="#000" opacity="0.15"/>
            <circle cx="180" cy="220" r="100" fill="#000" opacity="0.2"/>
            <rect x="150" y="150" width="100" height="100" fill="#000" opacity="0.1" rx="10"/>
            <rect x="180" y="180" width="80" height="80" fill="#000" opacity="0.15" rx="8"/>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero

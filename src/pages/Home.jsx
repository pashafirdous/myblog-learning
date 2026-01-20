import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <main className="main-content">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Recent Thoughts & Insights</h2>
            <p className="section-subtitle">Exploring cloud architecture, cybersecurity, DevOps, and the technologies shaping modern infrastructure</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">Help</a>
            <a href="#">Status</a>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Text to speech</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

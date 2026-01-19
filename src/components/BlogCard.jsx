import { Link } from 'react-router-dom'
import './BlogCard.css'

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card-content">
        <div className="blog-card-author">
          <img src={post.authorAvatar} alt={post.author} className="author-avatar" />
          <span className="author-name">{post.author}</span>
        </div>
        <Link to={`/post/${post.id}`} className="blog-card-link">
          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>
        </Link>
        <div className="blog-card-meta">
          <span className="blog-card-date">{post.date}</span>
          <span className="blog-card-reading-time">{post.readingTime} min read</span>
          <span className="blog-card-tag">{post.tag}</span>
        </div>
      </div>
      {post.image && (
        <Link to={`/post/${post.id}`} className="blog-card-image-link">
          <img src={post.image} alt={post.title} className="blog-card-image" />
        </Link>
      )}
    </article>
  )
}

export default BlogCard

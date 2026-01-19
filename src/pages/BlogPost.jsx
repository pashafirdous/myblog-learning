import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './BlogPost.css'

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-content">
          <h1>Post not found</h1>
          <Link to="/" className="back-link">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-post">
      <article className="blog-post-container">
        <div className="blog-post-header">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1 className="blog-post-title">{post.title}</h1>
          <div className="blog-post-meta">
            <div className="post-author-info">
              <img src={post.authorAvatar} alt={post.author} className="post-author-avatar" />
              <div>
                <div className="post-author-name">{post.author}</div>
                <div className="post-meta-details">
                  <span>{post.date}</span>
                  <span>·</span>
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {post.image && (
          <div className="blog-post-image-container">
            <img src={post.image} alt={post.title} className="blog-post-image" />
          </div>
        )}

        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="blog-post-footer">
          <div className="post-tag-large">{post.tag}</div>
        </div>
      </article>

      <div className="blog-post-sidebar">
        <div className="author-card">
          <img src={post.authorAvatar} alt={post.author} className="author-card-avatar" />
          <h3 className="author-card-name">{post.author}</h3>
          <p className="author-card-bio">Writer and developer passionate about technology and design.</p>
          <button className="author-follow-btn">Follow</button>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

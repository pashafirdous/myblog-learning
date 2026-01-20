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

        {post.pdfUrl && (
          <div className="pdf-attachment">
            <div className="pdf-header">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
              <h3>Download Resource</h3>
            </div>
            <p>Get the full PDF version of this article with additional resources.</p>
            <a href={post.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-download-btn">
              Download PDF
            </a>
          </div>
        )}

        {post.externalLinks && post.externalLinks.length > 0 && (
          <div className="external-links">
            <h3>Related Resources</h3>
            <ul>
              {post.externalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="blog-post-footer">
          <div className="post-tag-large">{post.tag}</div>
        </div>
      </article>

      <div className="blog-post-sidebar">
        <div className="author-card">
          <img src={post.authorAvatar} alt={post.author} className="author-card-avatar" />
          <h3 className="author-card-name">{post.author}</h3>
          <p className="author-card-bio">Technology Strategy & Transformation Leader | 16+ years in Cloud, DevOps, and Cybersecurity | CISSP, AWS, GCP Certified</p>
          <a href="https://linkedin.com/in/pashafirdous" target="_blank" rel="noopener noreferrer" className="author-follow-btn">Connect on LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default BlogPost

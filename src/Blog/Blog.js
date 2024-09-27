import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // If you're using axios, otherwise you can use fetch
import './blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetching blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/v1/getBlogs');
        setBlogs(response.data.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the blogs:', error);
        setError('Failed to load blogs.');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-container">
      <h2 className="latest-articles">Latest Articles</h2>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog.ID} className="blog-card">
            <div className="blog-thumbnail">
              <img
                src={blog.feature_images} // Using API-provided image
                alt={blog.title}
              />
            </div>
            <div className="blog-content">
              <p className="author">{blog.author}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="summary">{blog.content.substring(0, 150)}...</p> {/* Truncate content */}
              <Link to={`/blog/${blog.ID}`} className="continue-reading">
                Continue Reading
              </Link>
              <div className="blog-meta">
                <span className="date">{new Date(blog.created_at).toLocaleDateString()}</span>
                <span className="tags">
                  {blog.tags.split(', ').map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

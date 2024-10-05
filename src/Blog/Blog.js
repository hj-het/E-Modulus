import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import slugify from "slugify";
import "./blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://www.thebrainmoney.com/v1/getBlogs"
        );
        setBlogs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blogs:", error);
        setError("Failed to load blogs.");
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

  const createSlug = (title) => {
    return slugify(title, { lower: true, strict: true });
  };

  return (
    <div className="blog-container">
      <h2 className="latest-articles">Latest Articles</h2>
      <div className="blogs">
        {blogs.map((blog) => (
          <div key={blog.ID} className="blog-card">
            <div className="blog-thumbnail">
              <img src={blog.feature_images} alt={blog.title} />
            </div>
            <div className="blog-content">
              <p className="author">{blog.author}</p>
              <Link
                to={`/blog/${createSlug(blog.title)}`}
                className="continue-title"
              >
                <h3 className="blog-title">{blog.title}</h3>
              </Link>
              <p className="summary">{blog.content.substring(0, 150)}...</p>

             
              <Link
                to={`/blog/${createSlug(blog.title)}`}
                className="continue-reading"
              >
                Continue Reading
              </Link>

              <div className="blog-meta">
                <span className="date">
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>
                <span className="tags">
                  {blog.tags.split(", ").map((tag, index) => (
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

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BlogDetail = () => {
  const { id } = useParams(); // Get blog ID from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`/v1/getBlogs`);
        const foundBlog = response.data.data.find((b) => b.ID === parseInt(id)); 
        setBlog(foundBlog);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the blog details:', error);
        setError('Failed to load blog details.');
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-detail-container">
      <h2>{blog.title}</h2>
      <p className="author">{blog.author}</p>
      <p>{new Date(blog.created_at).toLocaleDateString()}</p>
      <div className="content">
        <p>{blog.content}</p>
      </div>
      <img src={blog.feature_images} alt={blog.title} />
      <div className="tags">
        {blog.tags.split(', ').map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;

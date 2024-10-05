import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import slugify from "slugify"; // For creating slugs, if needed
import "./blogdetails.css"

const BlogDetail = () => {
  const { slug } = useParams(); // Get blog slug from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const response = await axios.get(`https://www.thebrainmoney.com/v1/getBlogs`);
        const blogs = response.data.data;
        
        // Find the blog matching the slug
        const foundBlog = blogs.find((b) => 
          slugify(b.title, { lower: true, strict: true }) === slug
        );
        
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog not found.");
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the blog details:", error);
        setError("Failed to load blog details.");
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="blog-detail-container">
      <h2 className="blogd1">{blog.title}</h2>
      <div className="imageblogdetails">
        <img src={blog.feature_images} alt={blog.title} />
      </div>
      <p className="author">By {blog.author}</p>
      <p>{new Date(blog.created_at).toLocaleDateString()}</p>
      <div className="content">
        <p>{blog.content}</p> {/* If content has HTML, use dangerouslySetInnerHTML */}
      </div>
     
      <div className="tags">
        {blog.tags.split(", ").map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;

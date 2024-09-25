import React, { useState } from 'react';
import "../Review/ReviewForm.css"

const ReviewForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(null);

    const handleRating = (value) => {
        setRating(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send data to a server
        console.log({ name, email, feedback, rating });
        // Reset form after submission (optional)
        setName('');
        setEmail('');
        setFeedback('');
        setRating(null);
    };

    return (
        <div className="review-container">
            <h2>Leave a Review</h2>
            <form className="feedback-form" onSubmit={handleSubmit}>
                <div className="up">
                    <div className="left-column">
                        <input
                            type="text"
                            className='reviewforminput'
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            name="email"
                            className='reviewforminput'
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="right-column">
                        <textarea
                            id="feedback"
                            name="feedback"
                            className='textareareview'
                            rows="4"
                            placeholder="Your Review"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="down">
                    <div className="stars left-column" id="rating">
                        <label>Rating</label>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${rating >= star ? 'active' : ''}`}
                                onClick={() => handleRating(star)}
                            >
                                &#9733;
                            </span>
                        ))}
                        <input type="hidden" id="ratingValue" name="rating" value={rating || ''} required />
                    </div>

                    <div className="reviewbutton">
                        <button type="submit" className='buttontext'>Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;

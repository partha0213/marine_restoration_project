import React, { useState } from 'react';
// Make sure to import your CSS styles


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Basic validation
        if (!name || !email || !message) {
            setError('Please fill in all fields.');
            return;
        }

        // Handle the form submission logic (e.g., API call)
        console.log('Form submitted:', { name, email, message });

        // Simulate a successful submission (remove this in production)
        setSuccess(true);

        // Reset form
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Thank you for contacting us!</div>}
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;

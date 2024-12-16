import React, { useState } from 'react';
import './Contact.css';

// Contact page with a form
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  // Validate fields
  const validateField = (field, value) => {
    if (!value) return 'This field is required.';
    if (field === 'email' && !/\S+@\S+\.\S+/.test(value)) return 'Enter a valid email address.';
    return '';
  };

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          onBlur={(e) => handleChange(e)}
        />
        {errors.name && <small className="error">{errors.name}</small>}
        
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          onBlur={(e) => handleChange(e)}
        />
        {errors.email && <small className="error">{errors.email}</small>}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          onBlur={(e) => handleChange(e)}
        />
        {errors.message && <small className="error">{errors.message}</small>}

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

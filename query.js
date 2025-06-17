import React, { useState } from 'react';
import './style.css';
import Footer from './footer'
import Nav from './nav';

const Query = () => {
  const [form, setForm] = useState({ name: '', email: '', query: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      alert('Please enter a valid email!');
      return;
    }
    alert(`Thanks, ${form.name}! Your query was submitted.`);
  };

  return (
    <div>
      <Nav />
    <div className="query1">
      <input
        className="query2"
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        value={form.name}
      />
      <input
        className="query3"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={form.email}
      />
      <textarea
        className="query4"
        name="query"
        placeholder="Your Query"
        onChange={handleChange}
        value={form.query}
      />
      <button className="query5" onClick={handleSubmit}>submit query</button>
    </div>
    <Footer />
  </div>
  );
};

export default Query;



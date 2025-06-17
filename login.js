import React, { useState } from 'react';
import './style.css';
import {Link} from 'react-router-dom';

const Login = () => {
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    setError(emailValid ? '' : 'Invalid email format');
    if (emailValid) alert('Submitted!');
  };

  return (
    <form className="form-login-box" onSubmit={handleSubmit}>
      <h2 className="form-title">SihnUp</h2>

      <input name="username" type="text" placeholder="Username" onChange={handleChange} className="input-field" required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input-field" required />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input-field" required />

      {error && <p className="form-error">{error}</p>}

      <button type="submit" className="submit-btn">Submit</button>

      <div className='linklog' ><Link to="/signup">login</Link></div>
      
    </form>

    
  );
};

export default Login;

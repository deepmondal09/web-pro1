import React from 'react'
import './style.css'

const signup = () => {
  return (
    <div>
         <div className="login-box">
      <h2 className="login-title">Login</h2>
      <div className="login-field">
        <input
          type="tel"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          maxLength="10"
          className="login-input"
        />
      </div>
      <div className="login-field">
        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />
      </div>
      <div className="login-field">
        <button className="login-button">Login</button>
      </div>
    </div>
    </div>
  )
}

export default signup
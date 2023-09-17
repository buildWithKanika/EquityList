// LoginForm.jsx
import React, { useState } from 'react';
import '../style/Login.css'

function LoginPage({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // why is onSubmit called here?
    // onSubmit is a prop passed to the LoginForm component
    // onSubmit is a function that is passed from the parent component (App)
    onSubmit(username); // Pass the username to the parent component when the form is submitted
  };

  return (
<div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export {LoginPage};

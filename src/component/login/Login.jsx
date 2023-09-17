/* this component is a form that takes in a username and passes it to the parent component (App)
   we use this component to get the username from the user
  we have three users in our database: complicated, simple, and duplicate
  I have selected these usernames as we have three different types of transactions in our database
  complicated , simple, and duplicate*/
import React, { useState } from 'react';
import '../style/Login.css'

function Login({ onSubmit }) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder='Enter complicated,simple, or duplicate'
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

export {Login};

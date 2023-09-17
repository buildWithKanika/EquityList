
import React, { useState } from 'react';
import { Login } from './component/login/Login.jsx';
import { ProcessTransaction } from './component/transaction/ProcessTransaction';

function App() {
  // State to hold submitted status and username
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  // Function to handle form submission
  const handleFormSubmit = (username) => {
    setUsername(username);
    setSubmitted(true);
  };

  return (
    // Return login component if form is not submitted
    // else return ProcessTransaction component
    // username is passed as the prop and can have 'complicated' , 'simple' or 'duplicate' as value
    <div className="App">
      {submitted ? (
        <ProcessTransaction username={username} />
      ) : (
        <Login onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;



import React, { useState } from 'react';
import { LoginPage } from './component/login/Login.jsx'
import { ProcessTransaction } from './component/transaction/ProcessTransaction.js';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');

  const handleFormSubmit = (username) => {
    setUsername(username);
    setSubmitted(true);
  };

  return (
    <div className="App">
      {submitted ? (
        <ProcessTransaction username={username} />
      ) : (
        <LoginPage onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;


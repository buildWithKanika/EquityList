
import React, { useState } from 'react';
import { Login } from './component/login/Login.jsx';
import { ProcessTransaction } from './component/transaction/ProcessTransaction';

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
        <Login onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default App;


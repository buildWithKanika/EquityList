
// import { LoginPage } from './component/Login/Login.jsx';
// function App() {
//   return (
//     <div className="App">
//         <LoginPage></LoginPage>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { LoginPage } from './component/Login/Login.jsx';
import {ProcessTransaction} from './component/Transaction/ProcessTransaction.js'

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


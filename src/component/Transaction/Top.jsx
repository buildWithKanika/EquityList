import React from "react";
import "../style/Header.css"; 

function Header(props) {
  // Initialize the balance state with an initial value (e.g., 1000)
  return (
    <header>
      <p>Balance: ${props.balance}</p>
    </header>
  );
}

export {Header};

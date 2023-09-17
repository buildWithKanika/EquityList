import React from "react";
import "../style/Top.css"; 
// This component is used to display the Header of transaction page
function Top(props) {
  // Initialize the balance state with an initial value (e.g., 1000)
  return (
    <header>
      <p>Balance: ${props.balance}</p>
    </header>
  );
}

export {Top};

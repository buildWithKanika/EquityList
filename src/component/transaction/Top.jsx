import React from "react";
import "../style/Top.css"; 
// This component is used to display the Header of transaction page
function Top(props) {
  return (
    <header>
      <p>Balance: ${props.balance}</p>
    </header>
  );
}

export {Top};

import React from "react"; 
import "../style/Transaction.css"; 
// This component is used to display a single transaction
// TransactionItem.jsx is a child component of TransactionList.jsx
function TransactionItem({ transaction }) {
    return (
            <tr>
                <td>{transaction.date}</td>
                <td>{transaction.type}</td>
                <td>{transaction.description}</td>
                <td>${transaction.amount}</td>
                <td>${transaction.balance}</td>
            </tr>
    )
};
export {TransactionItem};
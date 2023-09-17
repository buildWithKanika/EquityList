import React from "react"; 
import "../style/Transaction.css"; 
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
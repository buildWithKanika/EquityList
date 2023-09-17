
import { TransactionItem } from "./TransactionItem";
import React from "react";
import "../style/Transaction.css"; 

const TransactionList = (props) => {
    return(
        <table className="styled-table">
        <thead>
        <tr>
          <th>Date</th>
          <th>Transaction</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        {props.transactions.map((transaction) => (
            <TransactionItem key={transaction.activity_id} transaction={transaction} />
        ))}
      </tbody>
        </table>
    )


};
export {TransactionList};

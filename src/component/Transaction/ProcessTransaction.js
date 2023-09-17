import React, { useEffect, useState } from "react";
import { TransactionList } from "./TransactionList";
import { fetchLedgerData } from "../../service/mockApi";
import { Header } from "./Top";


function ProcessTransaction(props) {
    // State to hold ledger data
    const [ledger, setLedger] = useState([]);
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        // Fetch ledger data from the API
        console.log(props.username)
        fetchLedgerData(props.username.toLowerCase())
            .then((ledgerData) => {
                const uniqueActivityIds = new Set();
                const uniqueTransactions = [];
                for (const transaction of ledgerData) {
                    if (!uniqueActivityIds.has(transaction.activity_id)) {
                        uniqueActivityIds.add(transaction.activity_id);
                        uniqueTransactions.push(transaction);
                    }
                }
                
                // Sort transactions by date
                uniqueTransactions.sort((a, b) => new Date(b.date) - new Date(a.date));

                // Format ledger data for rendering
                const formattedLedger = uniqueTransactions.map((transaction) => ({
                    date: new Date(transaction.date).toLocaleDateString('en-GB'), // Format date as "dd/mm/yyyy"
                    type: transaction.type,
                    description: `${transaction.source.description} -> ${transaction.destination.description}`,
                    amount: transaction.amount,
                    balance: transaction.balance,
                }));

                // Set the formatted ledger data in the state
                setLedger(formattedLedger);
                setBalance(formattedLedger[0]?.balance || 0);
            })
            .catch((error) => {
                console.error('Error fetching ledger data:', error);
            });
    }, [props.username]);

    return (
        // if ledger data is nulll display user can be simple complicated or duplicate
        // else call the header and transaction list component
        <div>

            {ledger.length===0? (
                <div>
                    <h1>user can be simple, complicated or duplicate</h1>
                </div>
            ) : (
                <div>
                    <Header balance={balance} />
                    <TransactionList transactions={ledger} />
                </div>
            )}
            </div>
        // <div>
        //     {/* Render the TransactionList component with the ledger data */}
        //     <Header balance={balance} />
        //     <TransactionList transactions={ledger} />
        // </div>
    );
}

export { ProcessTransaction };

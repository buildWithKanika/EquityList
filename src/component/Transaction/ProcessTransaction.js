import React, { useEffect, useState } from "react";
import { TransactionList } from "./TransactionList";
import { fetchLedgerData } from "../../service/mockApi";
import { Top } from "./Top";

function ProcessTransaction(props) {
  // State to hold ledger data
  const [ledger, setLedger] = useState([]);
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch ledger data from the API
    fetchLedgerData(props.username.toLowerCase())
      .then((ledgerData) => {
        // if ledger data is null than set error
        if (ledgerData.length === 0) {
          setError("User not found");
            setIsLoading(false);
        } else {
            // Remove duplicate transactions
          const uniqueActivityIds = new Set();
          const uniqueTransactions = [];
          for (const transaction of ledgerData) {
            if (!uniqueActivityIds.has(transaction.activity_id)) {
              uniqueActivityIds.add(transaction.activity_id);
              uniqueTransactions.push(transaction);
            }
          }

          // Sort transactions by date
          uniqueTransactions.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );

          // Format ledger data for rendering
          const formattedLedger = uniqueTransactions.map((transaction) => ({
            date: new Date(transaction.date).toLocaleDateString("en-GB"), // Format date as "dd/mm/yyyy"
            type: transaction.type,
            description: CreateDescription(transaction.source.description,transaction.destination.description,transaction.type),
            amount: transaction.amount,
            balance: transaction.balance,
          }));

          // Set the formatted ledger data in the state
          setLedger(formattedLedger);
          setBalance(formattedLedger[0]?.balance || 0);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching ledger data:", error);
        
      });
  }, [props.username]);

  return (
    //  When API is loading show loading message
    // When API has returned data either show the error message or the ledger data
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <>
          {error && <div>{error}</div>}
          {!error && (
            <div>
              <Top balance={balance} />
              <TransactionList transactions={ledger} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
// This function is used to create the description of the transaction
function CreateDescription(sourceDescription, destinationDescription,typeOfTransaction) {
    // if any parameter is null than makes its value ****
    if(sourceDescription===undefined || sourceDescription===null){
        sourceDescription="****";
    }
    if(destinationDescription===undefined || destinationDescription===null){
        destinationDescription="****";
    }
    if(typeOfTransaction===null || typeOfTransaction===undefined){
        typeOfTransaction="****";
    }
    var description="";
    typeOfTransaction=typeOfTransaction.toUpperCase();
    switch(typeOfTransaction){
        case "TRANSFER":
              description=`Transfer from ${sourceDescription} to ${destinationDescription}`;
              break;
        case "WITHDRAW":
                description=`Withdrawl from  ${sourceDescription} to ${destinationDescription}`;
                break;
        case "INVESTMENT":
                description=`Investment done -> ${sourceDescription} to ${destinationDescription}`; 
                break;  
        case'DEPOSIT':
                description=`Deposit done from ${sourceDescription} to  ${destinationDescription}`;
                break
        case 'REFUND':
                description=`Refund came from ${sourceDescription} to ${destinationDescription}`; 
                break;
        case 'TRANSFER':
                description=`Transfer from ${sourceDescription} to ${destinationDescription}`;
                break;               
        default:
            description=`${sourceDescription} ${destinationDescription}`;        
    }
    return description;

}

export { ProcessTransaction };

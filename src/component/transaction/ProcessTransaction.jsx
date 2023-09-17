import React, { useEffect, useState } from "react";
import { TransactionList } from "./TransactionList";
import { fetchLedgerData } from "../../service/mockApi";
import { CleanAndFormatTransaction } from "./CleanAndFormatTransaction";
import { Top } from "./Top";
/* in this component 
we are fetching the ledger data from the API
we are cleaning and formatting the data with CleanAndFormatTransaction function
passing the formatted data to the TransactionList component */
function ProcessTransaction(props) {
  // State to hold ledger data
  const [ledger, setLedger] = useState([]);
  // State to hold balance
  const [balance, setBalance] = useState(0);
  // State to hold error
  const [error, setError] = useState(null);
  // State to hold loading status (while api is fetching data this will be true and once data is fetched this will be false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch ledger data from the API
    fetchLedgerData(props.username)
      .then((ledgerData) => {
        // if ledger data is null than set error
        if (ledgerData.length === 0) {
          setError("User not found");
          setIsLoading(false);
        } else {
          let formattedLedger = CleanAndFormatTransaction(ledgerData);
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
  //  When API is loading show loading message
  // When API has returned data either show the error message or the ledger data
  return (
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


export { ProcessTransaction };

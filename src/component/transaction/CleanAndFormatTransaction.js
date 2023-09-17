/*This function is used to process the transaction
   1. Fetch the data from the bank API
   2. Remove the duplicate transactions
   3. Sort the transactions by date
   4. Format the ledger data for rendering
   5 return the formatted ledger data to the ProcessTransaction component
   */
function CleanAndFormatTransaction(ledgerData) {
    // Remove duplicate from the ledger data
    // Duplicate transactions are transactions with same activity_id
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
        date: new Date(transaction.date).toLocaleDateString("en-GB"), // Format date as "dd/mm/yyyy"
        type: transaction.type,
        // create description of the transaction
        description: CreateDescription(
            transaction.source.description,
            transaction.destination.description,
            transaction.type
        ),
        amount: transaction.amount,
        balance: transaction.balance,
    }));
    return formattedLedger;
}
// This function is used to create the description of the transaction
function CreateDescription(sourceDescription, destinationDescription, typeOfTransaction) {
    // if any parameter is null than makes its value ****
    if (sourceDescription === undefined || sourceDescription === null) {
        sourceDescription = "****";
    }
    if (destinationDescription === undefined || destinationDescription === null) {
        destinationDescription = "****";
    }
    if (typeOfTransaction === null || typeOfTransaction === undefined) {
        typeOfTransaction = "****";
    }
    var description = "";
    typeOfTransaction = typeOfTransaction.toUpperCase();
    switch (typeOfTransaction) {
        case "TRANSFER":
            description = `Transfer from ${sourceDescription} to ${destinationDescription}`;
            break;
        case "WITHDRAW":
            description = `Withdrawl from  ${sourceDescription} to ${destinationDescription}`;
            break;
        case "INVESTMENT":
            description = `Investment done -> ${sourceDescription} to ${destinationDescription}`;
            break;
        case "DEPOSIT":
            description = `Deposit done from ${sourceDescription} to  ${destinationDescription}`;
            break;
        case "REFUND":
            description = `Refund came from ${sourceDescription} to ${destinationDescription}`;
            break;
        default:
            description = `${sourceDescription} ${destinationDescription}`;
    }
    return description;
}

export { CleanAndFormatTransaction };

async function fetchLedgerData(user){
    try{
        //const ledgerData = await import('../Data/simple_ledger.json');
        const ledgerData = require('../Data/complicated_ledger.json');
        // read the file from data folder

        await new Promise(resolve => setTimeout(resolve, 1000));
        return ledgerData;
    }
    catch(error){
        throw new Error("Failed to fetch ledger data    ");
    }

}
export {fetchLedgerData};
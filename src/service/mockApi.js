// Desc: mock api for fetching ledger data
// in real time this will be replaced by actual api call which will fetch the data from bank server
async function fetchLedgerData(user){
    try{
        user=user.toLowerCase(); 
        // ledgerData will have the data of the transactions   
        let ledgerData = null;
        switch(user){
            case 'complicated':
                   ledgerData = require('../data/complicated_ledger.json');
                   break
            case 'simple':
                 ledgerData = require('../data/simple_ledger.json');
                 break;
            case 'duplicate':
                 ledgerData = require('../data/duplicate_ledger.json'); 
                 break;  
            default:
                ledgerData=[];         
        }

        // read the file from data folder
        await new Promise(resolve => setTimeout(resolve, 1000));
        return ledgerData;
    }
    catch(error){
        throw new Error("Failed to fetch ledger data ");
    }

}
export {fetchLedgerData};
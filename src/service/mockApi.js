// user to userType
async function fetchLedgerData(user){
    try{
        //const ledgerData = await import('../Data/simple_ledger.json');
        // according to user name which can be complicated simple and duplicate call the ledger data
        let ledgerData = null;
        switch(user){
            case 'complicated':
                   ledgerData = require('../Data/complicated_ledger.json');
                   break
            case 'simple':
                 ledgerData = require('../Data/simple_ledger.json');
                 break;
            case 'duplicate':
                 ledgerData = require('../Data/duplicate_ledger.json'); 
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
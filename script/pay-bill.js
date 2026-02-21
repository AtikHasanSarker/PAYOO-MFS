document.getElementById('pay-bill-btn').addEventListener('click', function(){
    const bankAccount = getValueFormInput('pay-bill-bank');
    if(bankAccount == 'Select Bank'){
        alert("Please select a bank");
        return;
    }

    const bankAccountNumber = getValueFormInput('pay-bill-number');
    if(bankAccountNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const amount = getValueFormInput('pay-bill-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance)
    const pin = getValueFormInput('pay-bill-pin');
    if(pin === "4321"){
        alert(`Add Money Successful from ${bankAccount} 
        at ${new Date()}`)
        setBalance(newBalance);
        //Transactions record
        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-md">
        Payment Successful to ${bankAccount} 
            Account No: ${bankAccountNumber}
            at ${new Date()}
        </div> 
        `
        history.appendChild(newHistory);
    }else{
        alert("Wrong Pin")
        return;
    }
})
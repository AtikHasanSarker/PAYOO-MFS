document.getElementById('add-money-btn').addEventListener('click', function(){
    const bankAccount = getValueFormInput('add-money-bank');
    if(bankAccount == 'Select Bank'){
        alert("Please select a bank");
        return;
    }

    const bankAccountNumber = getValueFormInput('add-money-number');
    if(bankAccountNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const amount = getValueFormInput('add-money-amount');
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    console.log(newBalance)
    const pin = getValueFormInput('add-money-pin');
    if(pin === "4321"){
        alert(`Add Money Successful from ${bankAccount} 
        at ${new Date()}`)
        setBalance(newBalance);
    }else{
        alert("Wrong Pin")
        return;
    }
})
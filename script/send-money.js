document.getElementById('send-money-btn').addEventListener('click', function(){
    const currentBalance = getBalance();

    const userNumber = getValueFormInput('user-acc-number');
    if(userNumber.length !== 11){
        alert("Invalid User Number");
        return;
    }
    const sendMoneyAmount = getValueFormInput('send-money-amount');
    const newBalance = currentBalance - Number(sendMoneyAmount);
    if(newBalance < 0){
        alert("Insufficient Balanced.");
        return;
    }
    
    const pin = getValueFormInput('send-money-pin');
    if(pin === "4321"){
        alert(`Send Money Successful to ${userNumber} 
        at ${new Date()}`)
        setBalance(newBalance);

        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-md">
        Send Money to ${userNumber} 
        at ${new Date()}}
        </div> 
        `
        history.appendChild(newHistory);
    }else{
        alert("Wrong Pin")
        return;
    }
})
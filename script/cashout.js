document.getElementById('cashout-btn').addEventListener('click', function(){
    const currentBalance = getBalance();

    const agentNumber = getValueFormInput('agent-number');
    if(agentNumber.length !== 11){
        alert("Invalid Agent Number");
        return;
    }
    const cashoutAmount = getValueFormInput('cashout-amount');
    const newBalance = currentBalance - Number(cashoutAmount);
    if(newBalance < 0){
        alert("Insufficient Balanced.");
        return;
    }
    
    const pin = getValueFormInput('input-pin');
    if(pin === "4321"){
        alert("Cashout Successful.")
        setBalance(newBalance);
    }else{
        alert("Wrong Pin")
        return;
    }
})






// document.getElementById('cashout-btn').addEventListener('click', function(){
//     //get the current balance
//     const balanceElement = document.getElementById('balance');
//     const balance = balanceElement.innerText;

//     //get agent nmbr
//     const agentNumberInput = document.getElementById('agent-number');
//     const agentNumber = agentNumberInput.value;
//     if(agentNumber.length !== 11){
//         alert("Invalid Agent Number");
//         return;
//     }

//     //get cashout amount
//     const cashoutAmountInput = document.getElementById('cashout-amount');
//     const cashoutAmount = cashoutAmountInput.value;
//     const newBalance = Number(balance) - Number(cashoutAmount);
//     if(newBalance < 0){
//         alert("Insufficient Balanced.");
//         return;
//     }

//     //get the pin
//     const pinInput = document.getElementById('input-pin');
//     const pin = pinInput.value;
//     if(pin === "4321"){
//         alert("Cashout Successfully.")
//         balanceElement.innerText = newBalance;
//     }else{
//         alert("Invalid Pin")
//         return;
//     }
// })
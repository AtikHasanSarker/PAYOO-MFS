document.getElementById('get-bonus-btn').addEventListener('click', function(){
    const currentBalance = getBalance();
    
    const coupon = getValueFormInput('get-bonus-coupon');
    if(coupon === "254682"){
        alert(`Bonus Received 500 TAKA.`)
        const newBalance = currentBalance + 500;
        setBalance(newBalance);
        
        const history = document.getElementById('history-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100 rounded-md">
        Bonus Received 500 TAKA. 
        at ${new Date()}}
        </div> 
        `
        history.appendChild(newHistory);
    }else{
        alert("Wrong Coupon")
        return;
    }
})
// input value dhorar mahcine

function getValueFormInput (id){
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//Balance dhorar machine
function getBalance(){
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    return Number(balance);
}

//Machine value => set balance
function setBalance(value){
    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = value;
}

function showOnly(id){
    const addMoney = document.getElementById('add-money')
    const cashout = document.getElementById('cashout');
    addMoney.classList.add("hidden")
    cashout.classList.add("hidden")

    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}
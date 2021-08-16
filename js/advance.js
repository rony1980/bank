// common function
function getInputValue(inputId) {
    // input field
    const inputField = document.getElementById(inputId);
    // get input value and covert string to integer
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    //Clear input value
    inputField.value = '';
    return inputValue;
}
function updateTotalField(totalFieldId, depositAmount) {
    const depositShow = document.getElementById(totalFieldId);
    // deposited amount show and convert string to integer
    const depositTotalText = depositShow.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // sum of previous deposit and new deposit
    depositShow.innerText = previousDepositTotal + depositAmount;
}
function getCurrentBalance() {
    const balance = document.getElementById('balance-total');
    const balanceText = balance.innerText;
    const balanceInt = parseFloat(balanceText);
    return balanceInt;
}
function balance(DivId, inputValue, isAdd) {
    const balance = document.getElementById(DivId);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        const balanceAmount = previousBalanceTotal + inputValue;
        balance.innerText = balanceAmount;
    } else {
        const balanceAmount = previousBalanceTotal - inputValue;
        balance.innerText = balanceAmount;
    }
}
// Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const inputVal = getInputValue('deposit-input');
    // no negetive value
    if (inputVal > 0) {
        const total = updateTotalField('deposit-total', inputVal);
        //show the banalce
        balance('balance-total', inputVal, true);
    }

})
// WithDraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const inputVal = getInputValue('withdraw-input');
    const lastBalance = getCurrentBalance();
    if (inputVal > 0 && inputVal <= lastBalance) {
        const total = updateTotalField('withdraw-total', inputVal);
        //show the banalce
        balance('balance-total', inputVal, false);
    }
    if (inputVal > lastBalance) {
        console.log('You can not withdraw more than what you have in your account');
    }
})
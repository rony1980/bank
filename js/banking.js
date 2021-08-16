// Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    // input field
    const depositInput = document.getElementById('deposit-input');

    // get input value and covert string to integer
    const inputValueText = depositInput.value;
    const inputValue = parseFloat(inputValueText);

    // diposited amount
    const depositShow = document.getElementById('deposit-total');

    // deposited amount show and convert string to integer
    const depositTotalText = depositShow.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    // sum of previous deposit and new deposit
    depositShow.innerText = previousDepositTotal + inputValue;

    //show the banalce
    const balance = document.getElementById('balance-total');
    const currentBalance = balance.innerText;
    const currentBalanceInt = parseFloat(currentBalance);
    const balanceAmount = currentBalanceInt + inputValue;
    balance.innerText = balanceAmount;

    //Clear input value
    depositInput.value = '';
})

// WithDraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');

    const withdrawValue = withdrawInput.value;
    const withdrawValueInt = parseFloat(withdrawValue);

    const withdrawShow = document.getElementById('withdraw-total');
    const withdrawTotal = withdrawShow.innerText;
    const withdrawTotalInt = parseFloat(withdrawTotal);

    withdrawShow.innerText = withdrawValueInt + withdrawTotalInt;

    // clear the input
    withdrawInput.value = '';

    //show the banalce
    const balance = document.getElementById('balance-total');
    const currentBalance = balance.innerText;
    const currentBalanceInt = parseFloat(currentBalance);
    const balanceAmount = currentBalanceInt - withdrawValueInt;
    balance.innerText = balanceAmount;
})



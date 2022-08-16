document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputFieldElement = document.getElementById('withdraw-field');
    const inputFieldString= inputFieldElement.value;
    const inputField = parseFloat(inputFieldString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);
    const withdrawTotalAmount = withdrawTotal + inputField;
    withdrawTotalElement.innerText = withdrawTotalAmount;

    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const balanceTotalAmount = parseFloat(balanceElementString);
    const totalBalance = balanceTotalAmount - inputField;
    balanceElement.innerText = totalBalance;

    inputFieldElement.value = '';
})
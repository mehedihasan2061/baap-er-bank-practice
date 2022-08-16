document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositValueString = depositField.value;
    const depositValue = parseFloat(depositValueString);
    
    
    const depositElement = document.getElementById('deposit-total');
    const dopositTotalString = depositElement.innerText;
    const depositTotal = parseFloat(dopositTotalString);
    const depositAmount = depositTotal + depositValue;
    depositElement.innerText = depositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotalValue = parseFloat(balanceTotalString);
    const balanceTotal = balanceTotalValue + depositValue; 
    balanceTotalElement.innerText = balanceTotal;

    depositField.value = '';
})
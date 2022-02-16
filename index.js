
function evaluateInputField(event) {
    const monthlyInputField = document.getElementById(event);
    const monthlyInputFieldText = monthlyInputField.value;
    const monthlyInputAmount = parseFloat(monthlyInputFieldText);
    // clear the inputfield 

    return monthlyInputAmount;
}

function evaluateBalance(inputTwo) {

    const balanceAmountText = document.getElementById(inputTwo).innerText;
    const balanceInAmount = parseFloat(balanceAmountText);
    return balanceInAmount;


}
// calculate btn 
document.getElementById('calculate-btn').addEventListener('click', function () {
    // income-input
    const monthlyIncomeAmount = evaluateInputField('monthly-income');

    // expances input 
    // food 
    const foodExpansesAmount = evaluateInputField('expance-food');
    // rent 
    const rentExpansesAmount = evaluateInputField('expance-rent');
    // clothes 
    const clothesExpansesAmount = evaluateInputField('expance-cloths');

    // calculate btn evaluate
    if (monthlyIncomeAmount > 0 && foodExpansesAmount > 0 && rentExpansesAmount > 0 && clothesExpansesAmount > 0) {
        const totalExpances = document.getElementById('total-expances');
        totalExpances.innerText = foodExpansesAmount + rentExpansesAmount + clothesExpansesAmount;

        const totalBalance = document.getElementById('total-balance');
        totalBalance.innerText = monthlyIncomeAmount - parseFloat(totalExpances.innerText);
    }

    else if (monthlyIncomeAmount !== "number" && foodExpansesAmount !== "number" && rentExpansesAmount !== "number" && clothesExpansesAmount !== "number") {
        alert('pls pass a number')
    }
    else {
        alert('pls pass a positve number')
    }

})

document.getElementById('save-btn').addEventListener('click', function () {
    // saving amount 
    const savePercentageAmount = evaluateInputField('save-input');

    const monthlyIncomeAmount = evaluateInputField('monthly-income');

    const savingAmount = document.getElementById('save-amount');
    savingAmount.innerText = monthlyIncomeAmount * (savePercentageAmount / 100);

    // remaining balance 

    const totalBlanceAmont = evaluateBalance('total-balance');

    const savingInAmount = evaluateBalance('save-amount');

    const remainingBalance = document.getElementById('remaining-amount');
    remainingBalance.innerText = totalBlanceAmont - savingInAmount;
})

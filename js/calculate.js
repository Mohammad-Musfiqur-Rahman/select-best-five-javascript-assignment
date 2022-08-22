// Common function 1
function getInputValue(element){
    const input = document.getElementById(element);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
}
// Common function 2
function getTextSet(element, value){
    const input = document.getElementById(element);
    const inputString = input.innerText;
    const inputNumber = parseInt(inputString);
    input.innerText = value;

}

// Calculate Button
document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const perPlayerNumber = getInputValue('per-player-input');

    const expenses = document.getElementById('count');
    const expensesString = expenses.innerText;
    const expensesCost = parseInt(expensesString);

    const sum = perPlayerNumber * expensesCost;

    const expensesText = getTextSet('player-expenses-text', sum);
    return expensesText;
})

// Total button
document.getElementById('total-btn').addEventListener('click', function(){
    const managerCost = getInputValue('manager-input');
    const coachCost = getInputValue('coach-input');

    const expenses = document.getElementById('player-expenses-text');
    const expensesString = expenses.innerText;
    const expensesCost = parseInt(expensesString);

    const totalCost = expensesCost + managerCost + coachCost;

    getTextSet('total-text', totalCost);

})
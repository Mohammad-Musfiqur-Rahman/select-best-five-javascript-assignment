// console.log('connected calculator')


function getInputValue(element){
    const input = document.getElementById(element);
    const inputString = input.value;
    const inputNumber = parseInt(inputString);
    return inputNumber;
}

function getTextSet(element, value){
    const input = document.getElementById(element);
    const inputString = input.innerText;
    const inputNumber = parseInt(inputString);
    input.innerText = value;

}

document.getElementById('calculate-btn').addEventListener('click', function(){
    
    const perPlayerNumber = getInputValue('per-player-input');

    const sum = perPlayerNumber * 4;

    const expensesText = getTextSet('player-expenses-text', sum);
    return expensesText;
})

document.getElementById('total-btn').addEventListener('click', function(){
    const managerCost = getInputValue('manager-input');
    const coachCost = getInputValue('coach-input');
    const expensesCost = parseInt(expensesText);

    const totalCost = expensesCost + managerCost + coachCost;

    getTextSet('total-text', totalCost);



    console.log(expensesCost)
})
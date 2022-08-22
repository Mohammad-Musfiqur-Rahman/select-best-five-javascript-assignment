
const playerArr = [];

function displayPlayer(arr){

const tableDisplay = document.getElementById('table-display');
    tableDisplay.innerHTML = '';

    for(let i = 0; i < 5; i++){
        
        let displayPlayer = arr[i].playerNamer;

        let tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${displayPlayer}</td>
        `;
        tableDisplay.appendChild(tr);
        
        let totalPlayer = document.getElementById('count').innerText = i + 1;
        let totalPlayerNum = parseInt(totalPlayer);
    }
    return totalPlayerNum;

}
// console.log(displayPlayer());

function playerSelect(element){
    // console.log(element.parentNode.parentNode.childNodes[1].innerText) 

    const playerNamer = element.parentNode.parentNode.childNodes[1].innerText;
     
    const playerObj = {
        playerNamer: playerNamer
    }
    playerArr.push(playerObj);    
    
    // document.getElementById('count').innerText = playerArr.length;
    displayPlayer(playerArr);
    // console.log(playerArr);
}


const playerArr = [];

function displayPlayer(arr){
// Display Player in Table
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

// Select Player
function playerSelect(element){
    const playerNamer = element.parentNode.parentNode.childNodes[1].innerText;     
    const playerObj = {
        playerNamer: playerNamer
    }
    playerArr.push(playerObj);
    displayPlayer(playerArr);
    
}

// selects the table element

function getColumnLabel(index) {
    let label = '';
    while (index >= 0) {
      label = String.fromCharCode((index % 26) + 65) + label;
      index = Math.floor(index / 26) - 1;
    }
    return label;
}

const table = document.getElementById('spreadsheet');
    
for (let i = 0; i < 50; i++) {
    const newRow = document.createElement('tr');
    table.appendChild(newRow)

    for (let j = 0; j < 50; j++) {
        const newCell = document.createElement('td');
        if (i === 0 && j > 0) {
            const alphabet = getColumnLabel(j - 1)
            newCell.textContent = alphabet
        } else if (j === 0 && i > 0) {            
            newCell.textContent = i
        } else if (j === 0 && i === 0){
            newCell.textContent = "";
            newCell.setAttribute('contenteditable','false')
        } else {
            newCell.textContent = "";
            newCell.setAttribute('contenteditable','true')
        }
        newRow.appendChild(newCell);
    }            
}

const indexColumn = document.getElementById('index-column');
    

const indexRow = document.getElementById('index-row');


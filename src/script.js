// selects the table element
const table = document.getElementById('spreadsheet');
    
for (let i = 0; i < 50; i++) {
    const newRow = document.createElement('tr');
    table.appendChild(newRow)

    for (let j = 0; j < 50; j++){
        const newCell = document.createElement('td');
        newCell.textContent = "";
        newCell.setAttribute('contenteditable','true')
        newRow.appendChild(newCell);
    }            
}

const indexColumn = document.getElementById('index-column');
    

const indexRow = document.getElementById('index-row');


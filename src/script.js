
const spreadsheetData = new Map();

const savedData = localStorage.getItem('spreadsheetData');

if (savedData) {
    const entries = JSON.parse(savedData); // turns it into an array
    for (const [key, value] of entries) {
      spreadsheetData.set(key, value);
    }
  }

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
        const alphabet = j > 0 ? getColumnLabel(j - 1) : '';

        if (i === 0 && j > 0) {            
            newCell.textContent = alphabet
        } else if (j === 0 && i === 0){
            newCell.textContent = "";
            newCell.setAttribute('contenteditable','false')
        } else if (j === 0 && i > 0) {            
            newCell.textContent = i;       
        } else {                        
            newCell.dataset.col = alphabet;
            newCell.dataset.row = i;            
            newCell.setAttribute('contenteditable','true');            

            const cellID = `${alphabet}${i}`;            
            if (!spreadsheetData.has(cellID)) {
            spreadsheetData.set(cellID, '');            
            }

            newCell.textContent = spreadsheetData.get(cellID);
        }
        newRow.appendChild(newCell);
    }            
}

table.addEventListener("click" , (event) => {
    const cell = event.target;
    const row = cell.dataset.row
    const col = cell.dataset.col    
    cellID = `${col}${row}` 
    spreadsheetData.set(cellID,cell.textContent)
    console.log(`cell: ${cellID} value: ${spreadsheetData.get(cellID)}`);

})


table.addEventListener("input", (event) => {
    cell = event.target;    
    cellID = `${cell.dataset.col}${cell.dataset.row}` 
    spreadsheetData.set(cellID,cell.textContent)  

    localStorage.setItem("spreadsheetData", JSON.stringify([...spreadsheetData]));    
})
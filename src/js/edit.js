import { ifFormula } from "./formulas.js";
import { spreadsheetData, table } from "./data.js";

function getCellID(event) {
    const cell = event.target;
    const cellID = `${cell.dataset.col}${cell.dataset.row}`
    return {cell, cellID}
}

export function addEventListeners() {    
    table.addEventListener("click" , (event) => {        
        const {cell, cellID} = getCellID(event)
        spreadsheetData.set(cellID,cell.textContent)
        ifFormula(cell);
    })
    
    table.addEventListener("input", (event) => {
        const {cell, cellID} = getCellID(event)
        spreadsheetData.set(cellID,cell.textContent)    
        localStorage.setItem("spreadsheetData", JSON.stringify([...spreadsheetData]));      
        ifFormula(cell);
    })

    table.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const cell = event.target;
            cell.blur();
            event.preventDefault();            
            ifFormula(cell);
        }
    }); 
}

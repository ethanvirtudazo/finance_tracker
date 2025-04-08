import { spreadsheetData } from './script.js'; 

function ifFormula(data){
    if (data.startsWith("=")) {
        console.log("Formula")
    } else {
        console.log("Not a formula")
    }        
}

export function Formulas() {  
    const table = document.getElementById('spreadsheet')     

    table.addEventListener('input', (event) => {
        const cell = event.target;
        const data = cell.textContent;
        ifFormula(data)
    })
}


import { spreadsheetData } from './script.js'; 

export function Formulas() {  
    const table = document.getElementById('spreadsheet') 
    
    function ifFormula(data){
        if (data.startsWith("=")) {
            console.log("Formula")
        } else {
            console.log("Not a formula")
        }        
    }

    table.addEventListener('input', (event) => {
        const cell = event.target;
        const data = cell.textContent;
        ifFormula(data)
    })
}


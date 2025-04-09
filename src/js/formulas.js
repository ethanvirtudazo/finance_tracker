import { spreadsheetData, table } from "./data.js"

function trackFormula(cell) {
    cell.dataset.formula = "formula1"
}

export function ifFormula(cell){
    const data = cell.textContent
    if (data.startsWith("=")) {
        console.log("Formula")
        trackFormula(cell)  
        console.log(cell.dataset.formula)        
    } else {
        console.log("Not a formula")
    }        
}




export function Formulas() {  
    const table = document.getElementById('spreadsheet')     

    table.addEventListener('input', (event) => {
        const cell = event.target;
        ifFormula(cell)
    })
}


import { spreadsheetData, table } from "./data.js"



function validateFormula(data) {
    const regex = /^=SUM\(([A-Z]\d+),([A-Z]\d+)\)$/;
    if (regex.test(data)) {
        console.log("validated")
    } else {
        console.log("invalid")    
    }              
}

function trackFormula(cell) {
    cell.dataset.formula = cell.textContent
}

export function ifFormula(cell){
    const data = cell.textContent
    if (!data.startsWith("=")) {
        return        
    }        
    if (!validateFormula(data)) {
        return
    }

    trackFormula(cell)  
}


export function Formulas() {  
    const table = document.getElementById('spreadsheet')     

    table.addEventListener('input', (event) => {
        const cell = event.target;
        ifFormula(cell)
    })
}


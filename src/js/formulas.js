import { spreadsheetData, table } from "./data.js"

export function ifFormula(cell){
    if (!cell) {        
        return;
    }
    const data = cell.textContent
    if (!data) return;

    if (data.startsWith("=")) {
        console.log("Formula")
        if (cell.dataset.formula) { 
            console.log(cell.dataset.formula)        
        }
        
    } else {
        console.log("Not a formula")
    }        
}

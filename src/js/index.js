import { manageData, createTable } from './script.js'; 
import { addEventListeners } from './edit.js';
import { ifFormula } from './formulas.js'; 


document.addEventListener('DOMContentLoaded', () => {
    manageData();   
    createTable();
    addEventListeners();
    ifFormula();         
});     
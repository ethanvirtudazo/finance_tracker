import { manageData, createTable } from './script.js'; 
import { addEventListeners } from './edit.js';
import { Formulas } from './formulas.js'; 


document.addEventListener('DOMContentLoaded', () => {
    manageData();   
    createTable();
    addEventListeners();
    Formulas();         
});     
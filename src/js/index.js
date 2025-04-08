import { manageData, createTable, addEventListeners } from './script.js';
import { Formulas } from './formulas.js';

document.addEventListener('DOMContentLoaded', () => {
    manageData();   
    createTable();
    addEventListeners();
    Formulas(); 
});
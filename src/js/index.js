import { manageData, createTable, addEventListeners } from './script.js';

document.addEventListener('DOMContentLoaded', () => {
    manageData();   
    createTable();
    addEventListeners();
});
// Import stylesheets
import './style.css';
import { jsEngine } from './jsEngine.js';

// Write Javascript code!
const appDiv = document.getElementById('app');
const terEngine = jsEngine('var x = 5');
appDiv.innerHTML = `<h1>JS Starter</h1> ${terEngine}`;
console.log(terEngine);

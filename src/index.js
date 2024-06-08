import './style.css';
import { homePage } from './load.js';
import { menuClick } from './menu.js';

console.log("test");

const homeBtn = document.querySelector('#homebtn');
const menuBtn = document.querySelector('#menubtn');
const contactBtn = document.querySelector('#contactbtn');

const content = document.getElementById('content');

menuBtn.addEventListener('click', menuClick);

document.addEventListener("DOMContentLoaded", homePage);

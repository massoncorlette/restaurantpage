import './style.css';
import { homePage } from './load.js';
import { menuClick } from './menu.js';
import { contactClick } from './contact.js';

console.log("test");

const homeBtn = document.querySelector('#homebtn');
const menuBtn = document.querySelector('#menubtn');
const contactBtn = document.querySelector('#contactbtn');

const content = document.getElementById('content');

homeBtn.addEventListener('click', homePage);
menuBtn.addEventListener('click', menuClick);
contactBtn.addEventListener('click', contactClick);

document.addEventListener("DOMContentLoaded", homePage);

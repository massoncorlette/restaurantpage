import pizza from './images/pizza.jpg';
import italyArt from './images/italyart.jpg';
import basil from './images/basil.png';
import tomato from './images/tomato.png'; 

export function contactClick() {
 
    const content = document.getElementById('content');
    // using innerHTML method to clear page, so menu tab loads in
    content.innerHTML = ''
  
    const title = document.createElement('div');
    title.id = 'title';
    title.textContent = "Vito's Pizza";
    content.appendChild(title);
  
    const container = document.createElement('div');
    const italy = document.createElement('img');
    const address = document.createElement('p');
    italy.src = italyArt;
    italy.id = 'italyArt';
    address.id = 'addressTxt';
    address.textContent = "Vito's Pizzeria 1234 Napoli Way Little Italy, NY 10012 USA"
    container.appendChild(italy);
    container.appendChild(address);
    container.id = 'contactContainer';
    content.appendChild(container);
  

};



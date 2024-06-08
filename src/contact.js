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
    title.textContent = "Vitos's Pizza";
    content.appendChild(title);
  
    const container = document.createElement('div');
    container.id = 'contactContainer';
    content.appendChild(container);
  

};



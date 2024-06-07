import './style.css';
import pizza from './images/pizza.jpg';
import italyArt from './images/italyart.jpg';

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById('content');

  //create and append title section
  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = "Vito's Pizza";
  content.appendChild(title);

  //create and append first container
  const container1 = document.createElement('div');
  container1.className = 'container';

  const aboutTxt1 = document.createElement('div');
  aboutTxt1.className = 'abouttxt';
  aboutTxt1.textContent = 'About our pizzas: ...';
  container1.appendChild(aboutTxt1);

  const pizzaImg1 = document.createElement('img');
  pizzaImg1.className = 'pizza';
  pizzaImg1.src = pizza;
  container1.appendChild(pizzaImg1);

  content.appendChild(container1);

  const container2 = document.createElement('div');
  container2.id = 'sectiontwo';
  container2.className = 'container';

  const aboutTxt2 = document.createElement('div');
  aboutTxt2.className = 'abouttxt';
  aboutTxt2.textContent = 'More about our pizzas: ...';
  container2.appendChild(aboutTxt2);

  const pizzaImg2 = document.createElement('img');
  pizzaImg2.className = 'pizza';
  pizzaImg2.src = italyArt;
  container2.appendChild(pizzaImg2);

  content.appendChild(container2);
});

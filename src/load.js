import pizza from './images/pizza.jpg';
import italyArt from './images/italyart.jpg';
import basil from './images/basil.png';
import tomato from './images/tomato.png'; 


export function homePage() {
  const content = document.getElementById('content');

  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = "Vito's Pizza";
  content.appendChild(title);

  const container1 = document.createElement('div');
  container1.className = 'container';

  const textContainer1 = document.createElement('div');
  textContainer1.className = 'textContainer';

  const basilImg = document.createElement('img');
  basilImg.src = basil;
  basilImg.className = 'designpngs';

  const aboutTxt1 = document.createElement('div');
  aboutTxt1.className = 'abouttxt';
  aboutTxt1.textContent = 'Indulge in the true taste of Italy with our hand-tossed, wood-fired pizzas made from the freshest ingredients and traditional recipes. From classic Margherita to gourmet specialties, experience authentic flavors that transport you straight to Naples.';

  textContainer1.appendChild(basilImg);
  textContainer1.appendChild(aboutTxt1);
  container1.appendChild(textContainer1);

  const pizzaImg1 = document.createElement('img');
  pizzaImg1.className = 'pizza';
  pizzaImg1.src = pizza;
  container1.appendChild(pizzaImg1);

  content.appendChild(container1);

 
  const container2 = document.createElement('div');
  container2.id = 'sectiontwo';
  container2.className = 'container';

  const textContainer2 = document.createElement('div');
  textContainer2.className = 'textContainer';

  const pizzaImg2 = document.createElement('img');
  pizzaImg2.className = 'pizza';
  pizzaImg2.src = italyArt;
  container2.appendChild(pizzaImg2);

  const tomatoImg = document.createElement('img');
  tomatoImg.src = tomato;
  tomatoImg.className = 'designpngs';
  tomatoImg.id = 'tomato';

  const aboutTxt2 = document.createElement('div');
  aboutTxt2.className = 'abouttxt';
  aboutTxt2.textContent = "At Vito's, we are dedicated to preserving the rich traditions of Italian cuisine and ambiance. Our cozy, rustic decor and warm hospitality create the perfect setting for enjoying our delicious, hand-crafted pizzas. Alongside our classic Margherita and gourmet specialties, our menu features a variety of antipasti, fresh salads, hearty pastas, and delectable desserts, ensuring an authentic Italian dining experience. Buon appetito!";

  textContainer2.appendChild(tomatoImg);
  textContainer2.appendChild(aboutTxt2);
  container2.appendChild(textContainer2);


  content.appendChild(container2);
};
 
// grabbing hero div
const hero = document.querySelector(`.hero`);

// Modify background image
hero.style.backgroundImage = `url('./assets/angel.jpg')`;

const name = document.querySelector('.hero h1 span');
name.innerHTML = `Sarah Patrick's`

const greeting = document.querySelector(`.hero h3`);
greeting.innerHTML = `How does a lion greet the other animals in the field? A: Pleased to eat you.`

const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `https://ih1.redbubble.net/image.3084060802.3940/st,small,507x507-pad,600x600,f8f8f8.jpg`;

// favorite things (array)
const favorites = [{
  img: `./assets/crumb.jpg`,
  title: `Socializing`,
  desc: `Talking to people is fun on the occasion!`
},
{
img: `./assets/crumbsad.jpg`,
title: `Running`,
desc: `Torturous yet rewarding (sometimes)`
},

{img: `./assets/crumball.jpg`,
title: `Gaming`,
desc: `Guilty pleasure.`
}
]
// Grab Gallery
const gallery = document.querySelector(`.info-gallery`);
// Map favs generate info item for each
// then place in Gallery

favorites.map((favorite) => {
// create new elelemtn
let newEl = document.createElement(`div`);
// Add correct class
newEl.classList.add(`info-item`);
// Generate HTMl for item

newEl.innerHTML = `
<img src="${favorite.img}" alt="${favorite.title}" class="item-img"/>
<h4>${favorite.title}</h4>
<p>${favorite.desc}</p>
`
// Add to document
gallery.appendChild(newEl);
})

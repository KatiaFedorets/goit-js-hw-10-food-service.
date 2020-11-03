import foodCardTml from './templates/food-card.hbs'
import menuCards from "./menu.json"
import './theme'



const menuList = document.querySelector('.js-menu');
const input = document.querySelector('.js-switch-input');
const body = document.querySelector('body');



const cardsMarkup = foodCardTml(menuCards);
menuList.insertAdjacentHTML('beforeend', cardsMarkup);

// function createMenuCards(foodCard) {
//     // return menuCards.map(foodCardTml).join('');
//    

// };





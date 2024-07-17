import _ from 'lodash';;
import './styles.css';
import { home } from './home.js'
import { menu } from './menu.js'
import { catering } from './catering.js'
import { contact } from './contact.js'

document.getElementById('content').appendChild(home());

function fadeIn(element) {
    element.classList.add('hidden');
    setTimeout(() => {
        element.classList.add('visible');
    }, 50);

}

document.getElementById('home-tab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    const home_element = home();
    document.getElementById('content').appendChild(home_element);
    fadeIn(home_element);
});

document.getElementById('menu-tab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    const menu_element = menu();
    document.getElementById('content').appendChild(menu_element);
    fadeIn(menu_element);;
});

document.getElementById('catering-tab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    const catering_element = catering();
    document.getElementById('content').appendChild(catering_element);
    fadeIn(catering_element);
});

document.getElementById('contact-tab').addEventListener('click', () => {
    document.getElementById('content').innerHTML = '';
    const contact_element = contact();
    document.getElementById('content').appendChild(contact_element);
    fadeIn(contact_element);
});
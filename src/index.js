import renderHome from './home';

import "./styles.css";
import trattoriaTrussardi from './images/trattoria-trussardi.png';

function renderNav() {
    const header = document.querySelector("header"); 

    const logoContainer = document.createElement("div"); 
    logoContainer.classList.add("logo");

    const logoImg = document.createElement("img");
    logoImg.classList.add("welcome-sign");
    logoImg.src = trattoriaTrussardi;

    logoContainer.appendChild(logoImg);
    header.insertBefore(logoContainer, document.querySelector("nav"));
}

renderNav();
renderHome();
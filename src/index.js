import renderHome from './home';
import renderMenu from './menu'; 

import "./styles.css";
import trattoriaTrussardi from './images/trattoria-trussardi.png';

let contentDiv = document.querySelector("#content");

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

function home() {
    contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    renderHome();
}

function menu() {
    contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    renderMenu();
}

renderNav();
home();

document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "Home") home();
    if (target === "Menu") menu(); 
});

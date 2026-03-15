import renderHome from './home';
import renderMenu from './menu'; 
import renderAbout from './about';

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
    contentDiv.innerHTML = "";
    renderHome();
}

function menu() {
    contentDiv.innerHTML = "";
    renderMenu();
}

function about() {
    contentDiv.innerHTML = "";
    renderAbout();
}

renderNav();
home();


document.addEventListener("click", (e) => {
    const target = e.target.innerText;

    if (target === "Home") home();
    if (target === "Menu") menu();
    if (target === "About") about();
});

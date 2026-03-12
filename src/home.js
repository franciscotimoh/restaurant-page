import tonioTrussardi from './images/tonio-trussardi.png';

function render() {
    const contentDiv = document.querySelector("#content");

    const homePage = document.createElement("div");
    homePage.classList.add("dialog");
    homePage.classList.add("home");

    const welcomeMsg = document.createElement("div");
    welcomeMsg.classList.add("welcome-message");
    welcomeMsg.textContent = "いらっしゃいませ, Benvenuti, Welcome to Trattoria Trussardi! - Chef Tonio Trussardi"; 

    const chefImg = document.createElement("img");
    chefImg.classList.add('chef');
    chefImg.src = tonioTrussardi;

    homePage.appendChild(welcomeMsg);
    homePage.appendChild(chefImg);
    contentDiv.appendChild(homePage);
}

export default render; 
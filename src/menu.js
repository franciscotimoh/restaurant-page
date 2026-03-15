import salad from './images/tonio-salad.png';
import spaghetti from './images/tonio-spaghetti.png';
import lamb from './images/tonio-lamb.png';

const menuItems = ['salad', 'spaghetti', 'lamb'];

function render() {
    const contentDiv = document.querySelector('#content');

    const menuPage = document.createElement('div');
    menuPage.classList.add("dialog");
    menuPage.classList.add("menu");

    menuItems.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");
        const menuImg = document.createElement('img');
        const menuName = document.createElement('span'); 

        if (item === "salad") {
            menuImg.src = salad;
            menuName.textContent = "Mozzarella and Tomato Caprese Salad";
        } else if (item === "spaghetti") {
            menuImg.src = spaghetti;
            menuName.textContent = "Spaghetti alla Puttanesca (Harlot Spaghetti)";
        } else {
            menuImg.src = lamb;
            menuName.textContent = "Lamb Chops with Apple Sauce"; 
        }
        menuItem.appendChild(menuImg);
        menuItem.appendChild(menuName);

        menuPage.appendChild(menuItem);
    });

    contentDiv.appendChild(menuPage);
}

export default render; 
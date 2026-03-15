const paragraphTexts = [
    "This website is a non-commercial fan project created for educational purposes as part of The Odin Project.",
    "All characters, names, and references to JoJo's Bizarre Adventure--specifically Diamond is Unbreakable--are the property of Hirohiko Araki, Lucky Land Communications, and SHUEISHA Inc.",
    "No copyright infringement is intended.",
    "Let the voice of love take you higher! Let the joy of love give you an answer!",
]

function render() {
    const contentDiv = document.querySelector('#content');

    const aboutPage = document.createElement('div');
    aboutPage.classList.add("dialog");
    aboutPage.classList.add('menu');

    paragraphTexts.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        aboutPage.appendChild(paragraph);
    });

    contentDiv.appendChild(aboutPage);
}

export default render;
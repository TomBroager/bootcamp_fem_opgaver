document.addEventListener('DOMContentLoaded', () => {

function skjulElementViaCssSelector(cssSelector){

    let displayNoneElement = document.querySelector(cssSelector);

    if(displayNoneElement){                                             // validering: skal kun udføre function hvis element eksisterer
        displayNoneElement.style.display = 'none';
    }
};

skjulElementViaCssSelector('.heading2');

});
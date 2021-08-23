document.addEventListener('DOMContentLoaded', () => {

function skjulElementViaCssSelector(cssSelector){

    let dsiplayNoneElement = document.querySelector(cssSelector);
    dsiplayNoneElement.style.display = 'none';

};

skjulElementViaCssSelector('.heading3');

});
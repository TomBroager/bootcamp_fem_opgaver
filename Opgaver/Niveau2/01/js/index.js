const buttonContainer = document.querySelector('#buttons');
const ButtonHighlightColor = 'yellow';
const buttonElementNodeList = document.querySelectorAll('button');                    // variabel med button nodelist

buttonContainer.addEventListener('click', event => {

    if(event.target.localName === 'button'){
        buttonElementNodeList.forEach(button => button.removeAttribute('style'));
        event.target.style.backgroundColor = ButtonHighlightColor;
    };

});
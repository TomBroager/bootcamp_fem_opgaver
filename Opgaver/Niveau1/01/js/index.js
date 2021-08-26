document.addEventListener('DOMContentLoaded', () => {

    const button = document.querySelector('#my-button');
    
    const buttonColor = ['blue', 'yellow'];
    
    button.style.backgroundColor = buttonColor[0];
    
    button.addEventListener('click', () => {
        button.style.backgroundColor = buttonColor[1];
        buttonColor.reverse();
    });

});

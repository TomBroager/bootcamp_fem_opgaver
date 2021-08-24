const buttons = document.querySelector('#buttons');
const ButtonHighlightColor = 'yellow';

function buttonHighlight(event){
    
    if(event.target.tagName === 'BUTTON'){                              // hvis target er et BUTTON tag ==>
        let highlightElement = document.querySelector('.highlight');    // highlightElement = <button class="" style="">D</button>
        
        if(highlightElement){                                           // fjerner color og className
            highlightElement.style.backgroundColor = '';
            highlightElement.classList.remove('highlight');
        };
        
        event.target.classList.add('highlight');                        // tilføjer className til button tag
        event.target.style.backgroundColor = ButtonHighlightColor;      // tilføjer color til target
    };
    
};

buttons.addEventListener('click', event => buttonHighlight(event));
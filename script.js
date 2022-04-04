const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-game');

function flyShip(event){
    if(event.key === 'ArrowUp'){
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown'){
        event.preventDefault();
        moveUp();
    } else if(event.key === " "){
        event.preventDefault();
        fireLaser();
    }
}
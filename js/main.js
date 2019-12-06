let play = document.querySelector('#start-game');
let cells  = document.querySelectorAll('.cell');
let turn = true;

function addSymbol(cell,player ,symbol){
    cell.innerHTML = `<${player}>${symbol}</${player}>`;
}
function toggleSymbols(toggle){
    return toggle ? "X" : "O"
}
play.addEventListener('click', () => {
    let div = document.querySelector('#hidden');
    div.classList.add('hidden');
});

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML == '')
        {   
            let player = '';
            if (turn)
                player = 'blue';
            else
                player = 'red'
            addSymbol(cell, player,toggleSymbols(turn));
            turn = !turn;    
        }
    });
});

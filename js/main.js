import {Player} from './player.js';
import {Game} from './game.js';
let play = document.querySelector('#start-game');
let cells  = document.querySelectorAll('.cell');
let label = document.querySelector('#player-name');
let turn = true;
let namePlayer1 = 'Player 1';
let namePlayer2 = 'Player 2';
let player1;
let player2;
let arrBoard = ['', '', '', '', '', '', '', '', ''];
let game = Game(arrBoard);

function addSymbol(cell,player ,symbol){
    cell.innerHTML = `<${player}>${symbol}</${player}>`;
}
function toggleSymbols(toggle){
    return toggle ? "X" : "O"
}
play.addEventListener('click', () => {
    let div = document.querySelector('#hidden');
    let formPlayerName1 = document.querySelector('#player1').value;
    let formPlayerName2 = document.querySelector('#player2').value;

    if (formPlayerName1 != '')
        namePlayer1 = document.querySelector('#player1').value;
    if(formPlayerName2 != '')
        namePlayer2 = document.querySelector('#player2').value;

    player1 = Player(namePlayer1, 'X');
    player2 = Player(namePlayer2, 'O');    
    player1.sayPlayerName(label);
    div.classList.add('hidden');
});

cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        if (cell.innerHTML == '')
        {   
            let pTurn = '';
            let player = '';
            if (turn){
                pTurn = 'blue';
                player = player2;
            }
                
            else{
                pTurn = 'red';
                player = player1;
            }
            game.registerPosition( parseInt(cell.classList[1]) - 1, player.symb)
            addSymbol(cell, pTurn,toggleSymbols(turn));
            player.sayPlayerName(label);
            turn = !turn;    
        }
    });
});

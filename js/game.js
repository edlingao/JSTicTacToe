
const Game = (board) => {
    const registerPosition = (position, symbol) => {
        board[position] = symbol;
    };
    const win = ()=>{

    };
    return{registerPosition, win};
};

export {Game};
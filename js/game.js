
const Game = (board) => {
    const registerPosition = (position, symbol) => {
        board[position] = symbol;
    };

    const win = (symbol)=>{
        let win_b = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        let winner = win_b.some((win) => {
            return win.every((element) => {
                return board[element] == symbol;
            });
        });
        return winner;
    };
    let draw = ()=>{
        return board.every((space) => space != '');
    };
    return{registerPosition, win, draw};
};

export {Game};
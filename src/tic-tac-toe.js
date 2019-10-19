class TicTacToe {
    constructor() {

        this.gameArea = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
        this.currentPlayer = "x";
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameArea[rowIndex][columnIndex] === null){
            this.gameArea[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer === "x" ? this.currentPlayer = "o" : this.currentPlayer = "x";
        }
    }

    isFinished() {
        return this.isDraw() || Boolean(this.getWinner());
    }

    getWinner() {
        if (this.gameArea[0][0] === this.gameArea[1][1] && this.gameArea[1][1] === this.gameArea[2][2]) return this.gameArea[0][0]; 
        if (this.gameArea[2][0] === this.gameArea[1][1] && this.gameArea[1][1] === this.gameArea[0][2]) return this.gameArea[2][0]; 
    
        if (this.gameArea[0][0] === this.gameArea[0][1] && this.gameArea[0][1] === this.gameArea[0][2]) return this.gameArea[0][0]; 
        if (this.gameArea[1][0] === this.gameArea[1][1] && this.gameArea[1][1] === this.gameArea[1][2]) return this.gameArea[1][0]; 
        if (this.gameArea[2][0] === this.gameArea[2][1] && this.gameArea[2][1] === this.gameArea[2][2]) return this.gameArea[2][0]; 
    
        if (this.gameArea[0][0] === this.gameArea[1][0] && this.gameArea[1][0] === this.gameArea[2][0]) return this.gameArea[0][0]; 
        if (this.gameArea[0][1] === this.gameArea[1][1] && this.gameArea[1][1] === this.gameArea[2][1]) return this.gameArea[0][1]; 
        if (this.gameArea[0][2] === this.gameArea[1][2] && this.gameArea[1][2] === this.gameArea[2][2]) return this.gameArea[0][2]; 
    
        else return null;
    }

    noMoreTurns() {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.gameArea[i][j] == null)
                    return false;
            }
        }
        return true;
    }

    isDraw() { 
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameArea[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
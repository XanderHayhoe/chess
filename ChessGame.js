
const startFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
class player {

}

class Piece {
    construtor() {
    const King = 1
    const Pawn = 2;
    const Knight = 3;
    const Bishop = 4;
    const Rook = 5;
    const Queen = 6;
    }
    

}
class board {
    constructor() {
        square(64);
        square[0] = Piece.White | Piece.Bishop;
        square[63] = Piece.Black | Piece.Knight;
    }
}
var PieceType = {
    "k" : Piece.King , "q" : Piece.Queen , "b" : Piece.Bishop, 
    "p" : Piece.Pawn , "k" : Piece.Knight , "r" : Piece.Rook
};

function load_start(startFEN) {




}


function createBoard(){
    var board = document.getElementById('boardInner');
    const board1 = (usesLabels) =>{
        for (let i = 0; i < 8; ++i) {
            var row = documnet.createElement('DIV')
            row.className = 'row'
            if (i % 2 == 0) {
                row.style.flexDirection = 'row-reverse'; 
            } 
            for (let j = 0; j < 8; ++j) {
                var square = document.createElement('DIV')
                square.className = 'square'
                if (j % 2 == 0){
                    square.style.backgroundColor = 'white'
                }

                else {
                    square.style.backgroundColor = 'black'
                }
                row.appendChild(square)
                }
            board.appendChild(row)
            }
        }
    }

function start() {

}
function setBoard(){

}
function isCheck(){
    
}

function isCheckmate(){

}
//I need a controller which has a board object and 2 player objects that alternate between turns. Each action will allow 
// inside while loop
function doturnplayer_1(){

}
function doturnplayer_2(){

}
// close while loop 

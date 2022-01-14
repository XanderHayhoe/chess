



class boardPiece {
    construtor() {


    }

    position
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


function resetBoard(){

}

function isWinner(){

}

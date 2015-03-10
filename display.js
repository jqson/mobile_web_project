var canvas = document.getElementsByTagName('canvas')[0];
var scoreBoard = document.getElementById('score_board');
var ctx = canvas.getContext('2d');
var W = 400, H = 800;
var BLOCK_W = W/COLS, BLOCK_H = H/ROWS;

var colors = [
    'cyan', 'orange', 'blue', 'yellow', 'red', 'green', 'purple'
];

// draw single square at (x, y)
function drawBlock(x, y, color) {
    var grd=ctx.createLinearGradient(BLOCK_W * x, BLOCK_H * y, BLOCK_W * (x+1), BLOCK_H * (y+1));
    grd.addColorStop(0, "white");
    grd.addColorStop(1, color);
    ctx.fillStyle = grd;
    
    ctx.fillRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
    ctx.strokeRect(BLOCK_W * x, BLOCK_H * y, BLOCK_W - 1, BLOCK_H - 1);
}


// draws the board and the moving shape
function render() {
    ctx.clearRect(0, 0, W, H);

    if (start || lose) {
        ctx.strokeStyle = 'black';
        for (var x = 0; x < COLS; ++x) {
            for (var y = 0; y < ROWS; ++y) {
                if (board[y][x]) {
                    drawBlock( x, y, colors[board[y][x] - 1]);
                }
            }
        }

        ctx.strokeStyle = 'black';
        for (var y = 0; y < 4; ++y) {
            for (var x = 0; x < 4; ++x) {
                if (current[y][x]) {
                    drawBlock( currentX + x, currentY + y, colors[current[y][x] - 1]);
                }
            }
        }
    }
    
    scoreBoard.innerHTML = score;
}

//showScore();
setInterval(render, 20);

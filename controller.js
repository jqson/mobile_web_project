var startButton = document.getElementById('start_button');
startButton.onclick = function() {
    action('start');
};

var pauseButton = document.getElementById('pause_button');
pauseButton.onclick = function() {
    action('pause');
};

var endButton = document.getElementById('end_button');
endButton.onclick = function() {
    action('end');
};

var helpButton = document.getElementById('help_button');
helpButton.onclick = function() {
    var help_text = "Start:\tS\nPause:\tP\nEnd:\tE\nRotate:\tUP\n\n"
    help_text = help_text + "1 line:\t100pt\n2 lines:\t300pt\n3 lines:\t600pt\n4 lines:\t1000pt\n\n"
    help_text = help_text + "Author:\tYuanfeng"
    window.confirm(help_text);
};

var keys = {
        37: 'left',
        39: 'right',
        40: 'down',
        38: 'rotate',
		83: 'start',
		80: 'pause',
        69: 'end'
    };

document.body.onkeydown = function(e) {
    if (typeof keys[e.keyCode] != 'undefined') {
        action(keys[e.keyCode]);
        render();
    }
};
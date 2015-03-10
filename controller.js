var TOUCH_SENSITIVITY = 15;

var keys = {
  37: 'left',
  39: 'right',
  40: 'down',
  38: 'rotate',
	83: 'start',
	80: 'pause',
  69: 'end'
};

function buttonAction() {
  $('#start_button').click(function() {
    action('start');
  });
  
  $('#pause_button').click(function() {
    action('pause');
  });

  $('#end_button').click(function() {
    action('end');
  });

  $('#help_button').click(function() {
     var help_text = "Start:\tS\nPause:\tP\nEnd:\tE\nRotate:\tUP\n\n"
    help_text = help_text + "1 line:\t100pt\n2 lines:\t300pt\n3 lines:\t600pt\n4 lines:\t1000pt\n\n"
    help_text = help_text + "Author:\tYuanfeng"
    window.confirm(help_text);
  });
}

function keyAction() {
 $(document).keydown(function(event) {
    if (typeof keys[event.which] != 'undefined'){
      action(keys[event.which]);
      render();
    }
  });
}

var touchAction = {
  isTouching: false,
  direction: {
    x: 0,
    y: 0
  },

  handleTouchStart: function(ev) {
    $('#debug').text('start');
    var touch = ev.originalEvent.touches;
    if(touch.length == 1) {
      var x = touch[0].pageX;
      var y = touch[0].pageY;

      touchAction.originalTouchInfo = {
        touch: touch,
        origX: x,
        origY: y,
      }
      
      touchAction.isTouching = true;
      touchAction.direction.x = 0;
      touchAction.direction.y = 0;
    }
    return true;
  },

  handleTouchMove: function(ev) {
    if(touchAction.isTouching) {
      var touch         = ev.originalEvent.touches,
          origTouchInfo = touchAction.originalTouchInfo,
          origX         = origTouchInfo.origX,
          origY         = origTouchInfo.origY;
      touchAction.direction.x = touch[0].pageX-origX;
      touchAction.direction.y = touch[0].pageY-origY;

      $('#debug').html([
          'origX: ', origX,
          '<br/> origY: ', origY,
          '<br/> dir.x: ', touchAction.direction.x, 
          '<br/> dir.y: ', touchAction.direction.y 
      ].join(''));

      ev.originalEvent.preventDefault();

      return true;
    }
  },

  handleTouchEnd: function(ev) {
    var command = touchAction.touchCommand();
    $('#debug').text(command);
    if (command != 'none') {
      action(command);
      render();
    }
    
    this.isTouching = false;
  },

  touchCommand: function() {
    var x = touchAction.direction.x;
        y = touchAction.direction.y;
    if (Math.abs(x) < TOUCH_SENSITIVITY && Math.abs(y) < TOUCH_SENSITIVITY) {
      return 'rotate';
    }

    if (Math.abs(y) < Math.abs(x)) {
      if (x > 0) return 'right';
      else return 'left';
    }
    else if (y < 0) {
      return 'rotate';
    }
    else if (y > 0) {
      return 'down';
    }

    return 'none';
  },

  init: function() {
    $('canvas').on('touchstart',this.handleTouchStart);
    $('canvas').on('touchend', this.handleTouchEnd);
    $('canvas').on('touchmove', this.handleTouchMove);
  }
};


$(document).ready(function() {
  buttonAction();
  
  keyAction();

  touchAction.init();  
});

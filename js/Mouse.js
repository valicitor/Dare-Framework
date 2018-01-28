/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 19/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Handle Mouse and Tap Events
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 19/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Mouse.js
 * @author Ryon James
 * @namespace Mouse
 */

// Available Popups
var MOUSE_STATE = {
    NONE: "NONE",
    CLICK: "CLICK",
    DRAG: "DRAG"
};

/**
 * @description Mouse event results
 */
window.Mouse = {
    Left: false,
    Middle: false,
    Right: false,
    x: 0,
    y: 0,
    State: MOUSE_STATE.NONE,
    _TouchId: null
};


/**
 * @description Mouse Down Event
 */
$(document).unbind('mousedown');
$(document).bind('mousedown', function (event) {
    var isLeftMB, isMiddleMB, isRightMB;
    event = event || window.event;
    //event.preventDefault();

    if ("which" in event) {
        if (event.which == 1) {
            isLeftMB = true;
        }
        else if (event.which == 2) {
            isMiddleMB = true;
        }
        else if (event.which == 3) {
            isRightMB = true;
        }

    }
    else if ("button" in event) {
        if (event.button == 1) {
            isLeftMB = true;
        }
        else if (event.button == 2) {
            isRightMB = true;
        }
        else if (event.button == 4) {
            isMiddleMB = true;
        }
    }

    if (isLeftMB)
        Mouse.Left = true;
    if (isRightMB)
        Mouse.Right = true;
    if (isMiddleMB)
        Mouse.Middle = true;

    Mouse.State = MOUSE_STATE.CLICK;
});

/**
 * @description Mouse Up Event
 */
$(document).unbind('mouseup');
$(document).bind('mouseup', function (event) {
    var isLeftMB, isMiddleMB, isRightMB;
    event = event || window.event;
    //event.preventDefault();

    if ("which" in event) {
        if (event.which == 1) {
            isLeftMB = true;
        }
        else if (event.which == 2) {
            isMiddleMB = true;
        }
        else if (event.which == 3) {
            isRightMB = true;
        }

    }
    else if ("button" in event) {
        if (event.button == 1) {
            isLeftMB = true;
        }
        else if (event.button == 2) {
            isRightMB = true;
        }
        else if (event.button == 4) {
            isMiddleMB = true;
        }
    }

    if (isLeftMB)
        Mouse.Left = false;
    if (isRightMB)
        Mouse.Right = false;
    if (isMiddleMB)
        Mouse.Middle = false;

    Mouse.State = MOUSE_STATE.NONE;
});

/**
 * @description Mouse Move Event
 */
$(document).unbind('mousemove');
$(document).bind('mousemove', function (event) {
    event = event || window.event;

    Mouse.x = event.pageX;
    Mouse.y = event.pageY;

    if(Mouse.Left)
        Mouse.State = MOUSE_STATE.DRAG;
});

/**
 * @description Touch Start Event
 */
$(document).unbind('touchstart');
$(document).bind('touchstart', function (event) {
    event = event || window.event;
    //event.preventDefault();

    var touches = event.originalEvent.changedTouches;

    if (touches != undefined && touches != null) {
        // Don't need All touches just the first one
        for (var i = 0; i < touches.length; i++) {
            if (Mouse._TouchId == null) {
                Mouse._TouchId = touches[i].identifier;

                Mouse.Left = true;

                Mouse.x = touches[i].screenX;
                Mouse.y = touches[i].screenY;
            };
        };
    };

    Mouse.State = MOUSE_STATE.CLICK;
});

/**
 * @description Touch End Event
 */
$(document).unbind('touchend');
$(document).bind('touchend', function (event) {
    event = event || window.event;
    //event.preventDefault();

    var touches = event.originalEvent.changedTouches;

    if (touches != undefined && touches != null) {
        // Don't need All touches just the first one
        for (var i = 0; i < touches.length; i++) {
            if (Mouse._TouchId != null && Mouse._TouchId == touches[i].identifier) {
                Mouse._TouchId = null;

                Mouse.Left = false;

                Mouse.x = touches[i].screenX;
                Mouse.y = touches[i].screenY;
            };
        };
    }

    Mouse.State = MOUSE_STATE.NONE;
});

/**
 * @description Mouse Move Event
 */
$(document).unbind('touchmove');
$(document).bind('touchmove', function (event) {
    event = event || window.event;

    var touches = event.originalEvent.changedTouches;

    if (touches != undefined && touches != null) {
        // Don't need All touches just the first one
        for (var i = 0; i < touches.length; i++) {
            if (Mouse._TouchId != null && Mouse._TouchId == touches[i].identifier) {
                Mouse.x = touches[0].screenX;
                Mouse.y = touches[0].screenY;
            };
        };
    }

    if(Mouse.Left)
        Mouse.State = MOUSE_STATE.DRAG;
});

/**
 * @description Mouse Move Event
 */
$(document).unbind('touchcancel');
$(document).bind('touchcancel', function (event) {
    event = event || window.event;

    var touches = event.originalEvent.changedTouches;

    if (touches != undefined && touches != null) {
        // Don't need All touches just the first one
        for (var i = 0; i < touches.length; i++) {
            if (_TouchId != null && _TouchId == touches[i].identifier) {
                _TouchId = null;
            };
        };
    }

    Mouse.State = MOUSE_STATE.NONE;
});


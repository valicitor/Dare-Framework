/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 19/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Handle Keyboard input
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 19/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Keyboard.js
 * @author Ryon James
 * @namespace Keyboard
 */

/**
 *  @description Object to handle Key Timers
 */
var KeyTimer = function (key) {
    this.key = key;
    this.tick = FRAMERATE.FPS;
}

/*
 * @description Keyboard class, handle Keyboard input
 */
window.KeyboardKey = {
    /*
     * @description Array of queued keys on cooldown
     */
    _queue: [],

    /*
     * @description Acces Modifier - Get - Fetch Queue
     */
    get Queue() {
        return this._queue;
    },

    /*
     * @description On call, it will reduce the cooldown of all queued keys by one tick
     */
    TickDownQueue: function () {
        var iQueueLength = this._queue.length;
        for (var i = iQueueLength - 1; i >= 0; i--) {
            this._queue[i].tick--;

            if (this._queue[i].tick < 1) {
                this._queue.splice(i, 1);
            }
        }
    },

    /*
     * @description Private variables for keyboard keys
     */
    _enter: false,
    _space: false,
    _left: false,
    _right: false,
    _up: false,
    _down: false,

    /*
     * @description Acces Modifier - Get - Fetch Enter Status
     */
    get Enter() {
        return this._enter;
    },
    /*
     * @description Acces Modifier - Set - Set Enter Status
     */
    set Enter(Val) {
        this._enter = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Enter");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Acces Modifier - Get - Fetch Space Status
     */
    get Space() {
        return this._space;
    },
    /*
     * @description Acces Modifier - Set - Set Space Status
     */
    set Space(Val) {
        this._space = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Space");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Acces Modifier - Get - Fetch Left Arrow Status
     */
    get Left() {
        return this._left;
    },
    /*
     * @description Acces Modifier - Set - Set Left Arrow Status
     */
    set Left(Val) {
        this._left = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Left");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Acces Modifier - Get - Fetch Right Arrow Status
     */
    get Right() {
        return this._right;
    },
    /*
     * @description Acces Modifier - Set - Set Right Arrow Status
     */
    set Right(Val) {
        this._right = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Right");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Acces Modifier - Get - Fetch Up Arrow Status
     */
    get Up() {
        return this._up;
    },
    /*
     * @description Acces Modifier - Set - Set Up Arrow Status
     */
    set Up(Val) {
        this._up = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Up");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Acces Modifier - Get - Fetch Down Arrow Status
     */
    get Down() {
        return this._down;
    },
    /*
     * @description Acces Modifier - Set - Set Down Arrow Status
     */
    set Down(Val) {
        this._down = Val;

        if (Val == false) {
            var newKeyTimer = new KeyTimer("Down");
            this._queue.push(newKeyTimer);
        }
    },

    /*
     * @description Check if any keys are down
     */
    AreKeysDown: function () {
        return (this._enter || this._space || this._left || this._right || this._up || this._down);
    }
};

/*
 * @description Key Up Event
 */
$(document).unbind('keyup');
$(document).bind('keyup', function (event) {
    var code = event.which;
    if (code == 13) event.preventDefault();
    switch (code) {
        case 188:
        case 186:
        case 13: // ENTER
            KeyboardKey.Enter = false;
            break;
        case 32: // SPACE
            KeyboardKey.Space = false;
            break;

        case 37: // left arrow
            KeyboardKey.Left = false;
            break;
        case 38: // up arrow
            KeyboardKey.Up = false;
            break;
        case 39: // right arrow
            KeyboardKey.Right = false;
            break;
        case 40: // down arrow
            KeyboardKey.Down = false;
            break;

        case 65: // a
            KeyboardKey.Left = false;
            break;
        case 68: // d
            KeyboardKey.Right = false;
            break;
        case 83: // s
            KeyboardKey.Down = false;
            break;
        case 87: // w
            KeyboardKey.Up = false;
            break;
    }

    return false;
});

/*
 * @description Key Down Event
 */
$(document).unbind('keydown');
$(document).bind('keydown', function (event) {
    var code = event.which;
    if (code == 13) event.preventDefault();
    switch (code) {
        case 188:
        case 186:
        case 13: // ENTER
            KeyboardKey.Enter = true;
            break;
        case 32: // SPACE
            KeyboardKey.Space = true;
            break;

        case 37: // left arrow
            KeyboardKey.Left = true;
            break;
        case 38: // up arrow
            KeyboardKey.Up = true;
            break;
        case 39: // right arrow
            KeyboardKey.Right = true;
            break;
        case 40: // down arrow
            KeyboardKey.Down = true;
            break;

        case 65: // a
            KeyboardKey.Left = true;
            break;
        case 68: // d
            KeyboardKey.Right = true;
            break;
        case 83: // s
            KeyboardKey.Down = true;
            break;
        case 87: // w
            KeyboardKey.Up = true;
            break;
    }

    return false;
});

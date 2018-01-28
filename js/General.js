/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 19/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : General Settings and Controls
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 19/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file General.js
 * @author Ryon James
 * @namespace General
 */

/*******************************************************************************
 *                                  SCREEN
 ******************************************************************************/

/**
 * @description Canvas Size
 */
var SCREEN = {
    /**
     * @description euclidean GCD (Greatest Common Denominator)
     */
    GCD: function (a, b) {
        if (b > a) { var temp = a; a = b; b = temp }
        while (b != 0) { var m = a % b; a = b; b = m; }
        return a;
    },
    RATIO: function (x, y) {
        var c = this.GCD(x, y);
        return "" + (x / c) + ":" + (y / c)
    },
    get SCALE() { return (window.devicePixelRatio !== undefined) ? window.devicePixelRatio : 1; },
    get WIDTH() { return 1160 * this.SCALE; },
    get HEIGHT() { return 640 * this.SCALE; },
}

var SCREEN_WIDTH = SCREEN.WIDTH;
var SCREEN_HEIGHT = SCREEN.HEIGHT;


/*******************************************************************************
 *                           FRAME RATE SETTINGS
 ******************************************************************************/

var FRAMERATE = {
    /**
     * @description Frames Per Second
     */
    get FPS() { return 30; },

    /**
     * @description Milliseconds to wait between each frame
     */
    get SECOND() { return 1000; },

    /**
     * @description To convert speed to distance based on frame rate
     */
    get INTERVAL() { return this.SECOND / this.FPS; },

    /**
     * @description To convert speed to distance based on frame rate
     */
    get STEP() { return this.INTERVAL / this.SECOND; }
};

/*******************************************************************************
 *                              SETTINGS
 ******************************************************************************/

var SETTINGS = {
    /**
     * @description Master Volume, controls all volume (% of max volume)
     */
    MASTER_VOLUME: 50,

    /**
     * @description Volume of Music (% of master volume)
     */
    MUSIC_VOLUME: 100,

    /**
     * @description Volume of Sound effects (% of master volume)
     */
    SFX_VOLUME: 50
};

/*******************************************************************************
 *                           CUSTOM CONTROL LIBRARIES
 ******************************************************************************/

// Custom Controls
window.Custom = {};

// Basic Controls
window.Basic = {};

// Base/General Controls
window.Base = {};

// Popup Controls
window.Popup = {};

// Screen Controls 
window.Screen = {};

/*******************************************************************************
 *                           PROGRAM CONTROLS
 ******************************************************************************/

// Program states
var PROGRAM_STATE = {
    RUN: "RUN",
    PAUSE: "PAUSE"
};

/**
 * @description Handle Program 
 */
var Program = {
    /**
     * @description Current State of the Program
     */
    State: PROGRAM_STATE.RUN,

    /**
     * @description Contains id of the current frame interval(wait event until next frame render)
     */
    iIntervalId: -1,

    /**
     * @description Run the program
     */
    Run: function () {
        if (this.iIntervalId == -1) {
            this.State = PROGRAM_STATE.RUN;
            this.iIntervalId = setInterval(function () {
                if (typeof (Main) == "function") {
                    Main();
                }
            }, FRAMERATE.INTERVAL);
        };
    },

    /**
     * @description Run the program
     */
    Pause: function () {
        this.State = PROGRAM_STATE.PAUSE;
        clearInterval(this.iIntervalId);
        this.iIntervalId = -1;
    }
};

/*******************************************************************************
 *                             CANVAS SETUP
 ******************************************************************************/

/**
 * @description View(Canvas) Setup
 */
var View1 = document.getElementById('cvsMainView');

View1.width = SCREEN_WIDTH;
View1.height = SCREEN_HEIGHT;
View1.style.pointerEvents = "none";
View1.tabIndex = 0;
View1.focus();

var View1Context = View1.getContext('2d');

View1Context.scale(SCREEN.SCALE, SCREEN.SCALE);

/**
 * @description Change the background color of a view
 * @param {Canvas} View 
 * @param {Number} red 
 * @param {Number} green 
 * @param {Number} blue 
 */
function ViewBackgroundColor(View, r, g, b) {
    $(View).css('background-color', 'rgba(' + r + ', ' + g + ', ' + b + ', 1)');
};


/*******************************************************************************
 *                             AUDIO CONTROLS
 ******************************************************************************/

/**
 * @description Play a Sound by linking the filepath
 * @param {String} URL 
 * @param {Number} iVolume 
 * @returns {Element} Audio element
 */
function PlaySound(URL, iVolume) {
    var Audio = document.createElement('audio');
    Audio.volume = iVolume / 100;
    Audio.style.display = "none";
    Audio.src = URL;
    Audio.autoplay = true;
    Audio.onended = function () {
        Audio.remove(); //Remove when played.
    };
    document.body.appendChild(Audio);
    return Audio;
};

/*******************************************************************************
 *                           SCREEN CONTROLS
 ******************************************************************************/

// Available Screens
var SCREEN = {
    LOADING: "LOADING",
    LOGO: "LOGO",
    MENU: "MENU",
    GAME: "GAME",
    GAMEOVER: "GAMEOVER"
};

// Available Popups
var POPUP = {
    NONE: "NONE",
    DIALOG: "DIALOG",
    SETTINGS: "SETTINGS"
};

/**
 * @description array of Active Popup
 */
var ACTIVE_POPUP = {};

/**
 * @description array of Active Screens
 */
var ACTIVE_SCREEN = {};

/**
 * @description Current State of the Screen
 */
var strCurrentScreen = SCREEN.LOADING;
var strActivePopup = POPUP.SETTINGS;


/**
 * @description Show modal(dark overlay)
 * @param {Context} TargetViewContext 
 * @param {Boolean} bShowPauseText 
 */
function ShowModal(TargetViewContext, bShowPauseText) {
    TargetViewContext.save();

    TargetViewContext.fillStyle = "#222222";
    TargetViewContext.globalAlpha = 0.5;
    TargetViewContext.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    if (bPauseScreen) {
        TargetViewContext.font = "72px Georgia";
        TargetViewContext.fillStyle = "white";
        TargetViewContext.textAlign = "center";
        TargetViewContext.fillText("PAUSED", SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2);
    }

    TargetViewContext.globalAlpha = 1.0;
    TargetViewContext.restore();
};

/**
 * @description Clear all content in the target view
 * @param {Context} TargetViewContext 
 */
function ClearContent(TargetViewContext) {
    // clear the entire canvas
    TargetViewContext.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
};

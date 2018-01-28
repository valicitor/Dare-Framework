/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 02/09/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Screen to show the loss condition of the game
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 02/09/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Game_Screen.js
 * @author Ryon James
 * @namespace Screens
 */

// Logo Screen
(function () {
    /**
     * @description Constructor
     */
    function GameOverScreen()
    {

    }

    /**
     * @description Inherit ScreenGeneral class
     */
    GameOverScreen.prototype = Object.create(Base.ScreenGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    GameOverScreen.prototype.constructor = GameOverScreen;

    /**
     * @description Update the screen
     */
    GameOverScreen.prototype.Update = function () {
        console.log('Implement Game Over');
    }

    /**
     * @description Draw the Screen
     */
    GameOverScreen.prototype.Draw = function () {
        ViewBackgroundColor(View1, 0, 0, 0);
    }

    // Add this class to the "Custom" array
    Screen.GameOverScreen = GameOverScreen;
})();
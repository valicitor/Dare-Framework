/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 02/09/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Screen for the main game
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
    function GameScreen()
    {
        this.bGameOver = false;
    }

    /**
     * @description Inherit ScreenGeneral class
     */
    GameScreen.prototype = Object.create(Base.ScreenGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    GameScreen.prototype.constructor = GameScreen;

    /**
     * @description Update the screen
     */
    GameScreen.prototype.Update = function () {
        console.log('Implement Game');

        if(this.bGameOver)
        {
            // Change to Game Over Screen
            strCurrentScreen = SCREEN.GAMEOVER;
        }
    }

    /**
     * @description Draw the Screen
     */
    GameScreen.prototype.Draw = function () {
        ViewBackgroundColor(View1, 0, 0, 100);
    }

    // Add this class to the "Custom" array
    Screen.GameScreen = GameScreen;
})();
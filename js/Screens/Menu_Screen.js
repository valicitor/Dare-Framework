/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 02/09/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Screen to show the menu to the game
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 02/09/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Menu_Screen.js
 * @author Ryon James
 * @namespace Screens
 */

// Logo Screen
(function () {
    /**
     * @description Constructor
     */
    function MenuScreen()
    {

    }

    /**
     * @description Inherit ScreenGeneral class
     */
    MenuScreen.prototype = Object.create(Base.ScreenGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    MenuScreen.prototype.constructor = MenuScreen;

    /**
     * @description Update the screen
     */
    MenuScreen.prototype.Update = function () {
        console.log('Implement Menu');

        // Change to Game Screen
        strCurrentScreen = SCREEN.GAME;
    }

    /**
     * @description Draw the Screen
     */
    MenuScreen.prototype.Draw = function () {
        ViewBackgroundColor(View1, 0, 100, 0);
    }

    // Add this class to the "Custom" array
    Screen.MenuScreen = MenuScreen;
})();
/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 20/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Base class for Screens
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 20/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file ScreenGeneral.js
 * @author Ryon James
 * @namespace Screens
 */

// Screen General
(function () {
    /**
     * @description Constructor
     */
    function ScreenGeneral() {

    }

    /**
     * @description Constructor
     */
    ScreenGeneral.prototype.constructor = ScreenGeneral;

    /**
     * @description Update the screen
     */
    ScreenGeneral.prototype.Update = function () {

    }

    /**
     * @description Draw the Screen
     */
    ScreenGeneral.prototype.Draw = function () {

    }

    /**
     * @description Main Entry point for all screens
     */
    ScreenGeneral.prototype.MainLoop = function () {
        this.Update();
        this.Draw();
    }

    /**
     * @description Dispose of this screen
     */
    ScreenGeneral.prototype.Dispose = function () {

    }

    // Add this Base class to the "Base" array
    Base.ScreenGeneral = ScreenGeneral;
})();
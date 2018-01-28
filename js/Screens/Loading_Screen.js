/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 20/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Screen to inform user data and assets are loading
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 20/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Loading_Screen.js
 * @author Ryon James
 * @namespace Screens
 */

// Loading Screen
(function () {
    /**
     * @description Constructor
     */
    function LoadingScreen()
    {

    }

    /**
     * @description Inherit ScreenGeneral class
     */
    LoadingScreen.prototype = Object.create(Base.ScreenGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    LoadingScreen.prototype.constructor = LoadingScreen;

    /**
    * @description Interval Id
    */
    LoadingScreen.prototype.iIntervalId = -1;

    /**
     * @description Update the screen
     */
    LoadingScreen.prototype.Update = function ()
    {
        //Check if Program has fully loaded
        if (document.getElementsByTagName('body')[0] !== undefined)
        {
            // To Test the Loading Screen We have it display for 3 seconds
            if (LoadingScreen.prototype.iIntervalId == -1) {
                console.log('Queue Interval');

                LoadingScreen.prototype.iIntervalId = window.setInterval(function () {

                    // Clean up wait(Interval) event
                    window.clearInterval(LoadingScreen.prototype.iIntervalId);

                    console.log('Implement Loading');

                    // Change to Logo Screen
                    strCurrentScreen = SCREEN.LOGO;
                }, 3000);
            }
        }
        else
        {
            //console.log('not ready');
        }
    }

    /**
     * @description Draw the Screen
     */
    LoadingScreen.prototype.Draw = function () {
        ViewBackgroundColor(View1, 100, 0, 0);
    }

    // Add this class to the "Custom" array
    Screen.LoadingScreen = LoadingScreen;
})();
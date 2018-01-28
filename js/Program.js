/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 19/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Program main entry point
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 19/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Program.js
 * @author Ryon James
 * @namespace Program
 */


/**
 * @description Main loop, called every frame
 */
function Main() {
    if (Program.State == PROGRAM_STATE.RUN)
    {
        // If multiple screens are in ACTIVE_SCREEN array
        if (ACTIVE_SCREEN.length > 1) { DisposeOfUnsedScreens(); }

        // If no popup should be in ACTIVE_POPUP or multiple popups are in ACTIVE_POPUP array 
        if (strActivePopup == POPUP.NONE || ACTIVE_POPUP.length > 1) { DisposeOfUnsedPopups(); }

        // If active screen hasn't been created
        if (ACTIVE_SCREEN[strCurrentScreen] == null) { CreateNewActiveScreen(); }

        // If active popup hasn't been created
        if (strActivePopup != POPUP.NONE && ACTIVE_POPUP[strActivePopup] == null) { CreateNewActivePopup(); }



        View1Context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        //Run the main loop
        ACTIVE_SCREEN[strCurrentScreen].MainLoop();

        if (strActivePopup != POPUP.NONE) {
            ACTIVE_POPUP[strActivePopup].MainLoop();
        }


        KeyboardKey.TickDownQueue();
    } else {
        // PAUSED
    }
};

/**
 * @description Removes all screens from ACTIVE_SCREEN array except for strCurrentScreen
 */
function DisposeOfUnsedScreens() {
    Object.getOwnPropertyNames(SCREEN).forEach(function (Property) {
        var Value = Object.getOwnPropertyDescriptor(SCREEN, Property);

        if (strCurrentScreen != Value && ACTIVE_SCREEN[Value] != null) {
            ACTIVE_SCREEN[Value].Dispose();
            ACTIVE_SCREEN[Value] = null;
        }
    });
}

/**
 * @description Removes all screens from ACTIVE_POPUP array except for strActivePopup
 */
function DisposeOfUnsedPopups() {
    Object.getOwnPropertyNames(POPUP).forEach(function (Property) {
        var Value = Object.getOwnPropertyDescriptor(POPUP, Property);

        if (strActivePopup != Value && strActivePopup != POPUP.NONE && ACTIVE_POPUP[Value] != null) {
            ACTIVE_POPUP[Value].Dispose();
            ACTIVE_POPUP[Value] = null;
        }
    });
}

/**
 * @description Create Screen if it has been marked as current
 */
function CreateNewActiveScreen() {
    if (strCurrentScreen == SCREEN.LOADING) {
        ACTIVE_SCREEN[SCREEN.LOADING] = new Screen.LoadingScreen();
    }
    else if (strCurrentScreen == SCREEN.LOGO) {
        ACTIVE_SCREEN[SCREEN.LOGO] = new Screen.LogoScreen();
    }
    else if (strCurrentScreen == SCREEN.MENU) {
        ACTIVE_SCREEN[SCREEN.MENU] = new Screen.MenuScreen();
    }
    else if (strCurrentScreen == SCREEN.GAME) {
        ACTIVE_SCREEN[SCREEN.GAME] = new Screen.GameScreen();
    }
    else if (strCurrentScreen == SCREEN.GAMEOVER) {
        ACTIVE_SCREEN[SCREEN.GAMEOVER] = new Screen.GameOverScreen();
    }
}

/**
 * @description Create Popup if it has been marked as active
 */
function CreateNewActivePopup() {
    if (strActivePopup == POPUP.DIALOG) {
        ACTIVE_POPUP[POPUP.DIALOG] = new Popup.DialogPopup();
    }
    else if (strActivePopup == POPUP.SETTINGS) {
        var iCenterScreenWidth = SCREEN_WIDTH / 2;
        var iCenterScreenHeight = SCREEN_HEIGHT / 2;
        ACTIVE_POPUP[POPUP.SETTINGS] = new Popup.SettingsPopup(new Basic.Rectangle(iCenterScreenWidth - 140, iCenterScreenHeight - 155, 280, 310));
    }
}

/**
 * @description Main entry point into the program
 */
Program.Run();
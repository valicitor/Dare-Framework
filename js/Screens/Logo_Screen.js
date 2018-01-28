/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 20/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Screen to show and animate logo or design
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 20/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Logo_Screen.js
 * @author Ryon James
 * @namespace Screens
 */

// Logo Screen
(function () {
    /**
     * @description Constructor
     */
    function LogoScreen() {
        this.bLogoSettled = false;
        this.bLogoRevealed = false;
        this.bLogoSplashAnimationFinished = false;

        this.BackgroundRGB = 0;

        this.iLogoDisplayPeriod = 1000;

        this.LogoMoveSpeed = 200;
        this.Gravity = 9;
        this.MomentumDispersion = 125;
        this.SettleAtPointY = SCREEN_HEIGHT / 2 - 76;
        this.Logo = new Custom.SplashLogo("SplashLogo", new Basic.Rectangle((SCREEN_WIDTH / 2) - 240, -152, 479, 152), false);
    }

    /**
     * @description Inherit ScreenGeneral class
     */
    LogoScreen.prototype = Object.create(Base.ScreenGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    LogoScreen.prototype.constructor = LogoScreen;

    /**
     * @description Update the screen
     */
    LogoScreen.prototype.Update = function () {
        //console.log('Implement Logo');
        this.Logo.Update();

        //console.log(this.Logo.y);
        if (!this.bLogoSettled) {
            this.LogoMoveSpeed += this.Gravity;

            this.Logo.y += this.LogoMoveSpeed * FRAMERATE.STEP;

            if (this.Logo.y > this.SettleAtPointY && this.LogoMoveSpeed > 50) {
                this.LogoMoveSpeed -= this.MomentumDispersion;
                this.LogoMoveSpeed *= -1;
            }
            else if (this.Logo.y > this.SettleAtPointY) {
                this.LogoMoveSpeed = 0;
                this.bLogoSettled = true;
            }
        }
        else {
            if (!this.bLogoRevealed) {
                if (this.BackgroundRGB != 255) {
                    this.BackgroundRGB += 5;
                } else {
                    this.bLogoRevealed = true;
                }
            }
            else {
                if (this.iLogoDisplayPeriod > 0) {
                    this.iLogoDisplayPeriod -= FRAMERATE.INTERVAL;
                } else {
                    this.bLogoSplashAnimationFinished = true;
                }
            }
        }

        if (this.bLogoSplashAnimationFinished || window.Mouse.Left) {
            // Change to Menu Screen
            strCurrentScreen = SCREEN.MENU;
        }
    }

    /**
     * @description Draw the Screen
     */
    LogoScreen.prototype.Draw = function () {
        View1Context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

        ViewBackgroundColor(View1, this.BackgroundRGB, this.BackgroundRGB, this.BackgroundRGB);

        this.Logo.Draw(View1Context);
    }

    // Add this class to the "Custom" array
    Screen.LogoScreen = LogoScreen;
})();
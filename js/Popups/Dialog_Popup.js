/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 02/09/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Base class for Popups
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 02/09/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Dialog_Popup.js
 * @author Ryon James
 * @namespace Popups
 */

// Dialog Popup
(function () {
    /**
     * @description Constructor
     */
    function DialogPopup()
    {

    }

    /**
     * @description Inherit ScreenGeneral class
     */
    DialogPopup.prototype = Object.create(Base.PopupGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    DialogPopup.prototype.constructor = DialogPopup;

    /**
     * @description Update the popup
     */
    DialogPopup.prototype.Update = function () {

    }

    /**
     * @description Draw the popup
     */
    DialogPopup.prototype.Draw = function () {

    }

    /**
     * @description Dispose of this popup
     */
    DialogPopup.prototype.Dispose = function () {

    }

    // Add this Base class to the "Base" array
    Popup.DialogPopup = DialogPopup;
})();
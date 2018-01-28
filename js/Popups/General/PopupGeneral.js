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
 * @file PopupGeneral.js
 * @author Ryon James
 * @namespace Popups
 */

// Popup General
(function () {
    /**
     * Constructor
     */
    function PopupGeneral()
    {

    }

    /**
     * @description Constructor
     */
    PopupGeneral.prototype.constructor = PopupGeneral;

    /**
     * @description Update the popup
     */
    PopupGeneral.prototype.Update = function () {

    }

    /**
     * @description Draw the popup
     */
    PopupGeneral.prototype.Draw = function () {

    }

    /**
     * @description Main Entry point for all popups
     */
    PopupGeneral.prototype.MainLoop = function () {
        this.Update();
        this.Draw();
    }

    /**
     * @description Dispose of this popup
     */
    PopupGeneral.prototype.Dispose = function () {

    }

    // Add this Base class to the "Base" array
    Base.PopupGeneral = PopupGeneral;
})();
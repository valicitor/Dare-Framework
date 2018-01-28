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
 * @file Settings_Popup.js
 * @author Ryon James
 * @namespace Popups
 */

// Settings General
(function () {
    /**
     * @description Constructor
     */
    function SettingsPopup(DestinationRect)
    {
        this.Id = 'cvsSettingsPopup';
        this.DestinationRect = DestinationRect;
        this.SourceRect = new Basic.Rectangle(0, 0, 330, 360);

        this.bLoaded = true;
        this.bRendered = false;
        
        // Static Assets
        this.Background = new Custom.PopupBackground("Background", new Basic.Rectangle(25, 30, 280, 310), false);
        this.TitlePlate = new Custom.PopupPlate("TitlePlate", new Basic.Rectangle(70, 5, 195, 55), false);
        this.ButtonClose = new Custom.ButtonClose("ButtonClose", new Basic.Rectangle(265, 0, 65, 65), false);

        this.Title = new Basic.Text("Settings", 165, 5, 40, "fantasy", "center", "white", 2, "black");

        if ($('#' + this.Id).length == 0) {
            $('#divCanvasDisplayArea').append('<canvas id="' + this.Id + '" clientidmode="Static"></canvas>');

            this.Renderer = document.getElementById(this.Id);
            this.Renderer.width = this.SourceRect.width;
            this.Renderer.height = this.SourceRect.height;
            this.Renderer.style.display = "none";
            this.Renderer.style.pointerEvents = "none";

            this.RendererContext = this.Renderer.getContext('2d');
        } else {
            this.Renderer = document.getElementById(this.Id);
            this.RendererContext = this.Renderer.getContext('2d');
        }
    }

    /**
     * @description Inherit ScreenGeneral class
     */
    SettingsPopup.prototype = Object.create(Base.PopupGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    SettingsPopup.prototype.constructor = SettingsPopup;


    /**
     * @description Update the popup
     */
    SettingsPopup.prototype.Update = function () {
        this.Background.Update();
        this.TitlePlate.Update();
        this.ButtonClose.Update();

        if (!this.bRendered &&
            this.Background.bLoaded && this.Background.bRendered &&
            this.TitlePlate.bLoaded && this.TitlePlate.bRendered &&
            this.ButtonClose.bLoaded && this.ButtonClose.bRendered)
        {
            SettingsPopup.prototype.Render.call(this);
        }
    }

    /**
     * @description Render the asset to it's own canvas
     */
    SettingsPopup.prototype.Render = function () {
        this.RendererContext.clearRect(0, 0, this.SourceRect.width, this.SourceRect.height);

        this.Background.Draw(this.RendererContext);
        this.TitlePlate.Draw(this.RendererContext);
        this.ButtonClose.Draw(this.RendererContext);

        this.Title.Draw(this.RendererContext);

        this.bRendered = true;
    };

    /**
     * @description Draw the popup
     */
    SettingsPopup.prototype.Draw = function () {
        if (this.bRendered) {
            this.Render();
            View1Context.drawImage(this.Renderer, this.DestinationRect.left, this.DestinationRect.top, this.DestinationRect.width, this.DestinationRect.height);
        }
    }

    /**
     * @description Dispose of this popup
     */
    SettingsPopup.prototype.Dispose = function () {
        this.Background.Dispose();
        this.TitlePlate.Dispose();
        this.ButtonClose.Dispose();


        if ($('#' + this.Id).length > 0) {
            $('#' + this.Id).remove();
        }
    }

    // Add this Base class to the "Base" array
    Popup.SettingsPopup = SettingsPopup;
})();
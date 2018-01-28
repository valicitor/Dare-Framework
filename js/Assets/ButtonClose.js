/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 02/09/2017
 * -----------------------------------------------------------------------------
 * Functionality    : class for Button Close
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

// Close
(function () {

    /**
     * @description Constructor
     * @param {String} Id
     * @param {Rectangle} DestinationRect
     * @param {Boolean} bPreRender
     */
    function ButtonClose(Id, DestinationRect, bPreRender)
    {
        this.Id = Id;
        this.DestinationRect = DestinationRect;
        this.SourceRect = new Basic.Rectangle(0, 0, 65, 65);
        this.bPreRender = bPreRender || false;

        this.bLoaded = true;
        this.bRendered = false;
        
        // Static Assets
        this.btnBasePlate = new Custom.ButtonBasePlate("btnBasePlate", new Basic.Rectangle(0, 0, 65, 65), false);
        this.btnBlackClose = new Custom.ButtonBlackClose("btnBlackClose", new Basic.Rectangle(14.5, 9.5, 40, 40), false);
        this.btnWhiteClose = new Custom.ButtonWhiteClose("btnWhiteClose", new Basic.Rectangle(14.5, 9.5, 40, 40), false);

        if (this.bPreRender) {
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
        } else {
            this.btnBasePlate.x = this.btnBasePlate.x + DestinationRect.x;
            this.btnBasePlate.y = this.btnBasePlate.y + DestinationRect.y;

            this.btnBlackClose.x = this.btnBlackClose.x + DestinationRect.x;
            this.btnBlackClose.y = this.btnBlackClose.y + DestinationRect.y;

            this.btnWhiteClose.x = this.btnWhiteClose.x + DestinationRect.x;
            this.btnWhiteClose.y = this.btnWhiteClose.y + DestinationRect.y;
        }
    }

    /**
     * @description Inherit ScreenGeneral class
     */
    ButtonClose.prototype = Object.create(Base.GameAssetGeneral.prototype);

    /**
     * @description Overwrite Constructor
     */
    ButtonClose.prototype.constructor = ButtonClose;

    /**
     * @description Update the popup
     */
    ButtonClose.prototype.Update = function () {
        this.btnBasePlate.Update();
        this.btnBlackClose.Update();
        this.btnWhiteClose.Update();

        if (!this.bRendered && this.bPreRender &&
            this.btnBasePlate.bLoaded && this.btnBasePlate.bRendered &&
            this.btnBlackClose.bLoaded && this.btnBlackClose.bRendered &&
            this.btnWhiteClose.bLoaded && this.btnWhiteClose.bRendered)
        {
            ButtonClose.prototype.Render.call(this);
        }
        else if (!this.bRendered && !this.bPreRender &&
            this.btnBasePlate.bLoaded && this.btnBasePlate.bRendered &&
            this.btnBlackClose.bLoaded && this.btnBlackClose.bRendered &&
            this.btnWhiteClose.bLoaded && this.btnWhiteClose.bRendered)
        {
            this.bRendered = true;
        }
    }

    /**
     * @description Render the asset to it's own canvas
     */
    ButtonClose.prototype.Render = function () {
        this.RendererContext.clearRect(0, 0, this.SourceRect.width, this.SourceRect.height);

        this.btnBasePlate.Draw(this.RendererContext);
        this.btnBlackClose.Draw(this.RendererContext);
        this.btnWhiteClose.Draw(this.RendererContext);

        this.bRendered = true;
    };

    /**
     * @description Draw the popup
     */
    ButtonClose.prototype.Draw = function (context) {
        if (this.bPreRender) {
            this.Render();
            context.drawImage(this.Renderer, this.DestinationRect.left, this.DestinationRect.top, this.DestinationRect.width, this.DestinationRect.height);
        } else {
            this.btnBasePlate.Draw(context);
            this.btnBlackClose.Draw(context);
            this.btnWhiteClose.Draw(context);
        }
    };

    /**
     * @description Dispose of this popup
     */
    ButtonClose.prototype.Dispose = function () {
        this.btnBasePlate.Dispose();
        this.btnBlackClose.Dispose();
        this.btnWhiteClose.Dispose();

        if ($('#' + this.Id).length > 0) {
            $('#' + this.Id).remove();
        }
    }

    // Add this Base class to the "Custom" array
    Custom.ButtonClose = ButtonClose;
})();
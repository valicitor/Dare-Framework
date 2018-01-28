/*******************************************************************************
 * COPYRIGHT 2017
 * -----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 19/08/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Create Rectangle class object
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 19/08/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file GameAssetGeneral.js
 * @author Ryon James
 * @namespace Assets
 */

// Game Asset General
(function () {
    /**
     * @description Constructor
     * @param {String} Id
     * @param {Rectangle} DestinationRect
     * @param {Boolean} bPreRender
     */
    function GameAssetGeneral(Id, DestinationRect, bPreRender)
    {
        // Default Source and Image Path
        this.SourceRect = new Basic.Rectangle(0, 0, 0, 0);
        this.ImagePath = "";
        GameAssetGeneral.prototype.Init.call(this, Id, DestinationRect, bPreRender);
    };

    /**
     * @description Initalize the asset
     * @param {String} Id
     * @param {Rectangle} DestinationRect
     * @param {Boolean} bPreRender
     */
    GameAssetGeneral.prototype.Init = function (Id, DestinationRect, bPreRender) {
        this.Id = Id;
        this.DestinationRect = DestinationRect;
        this.bPreRender = bPreRender || false;

        if (this.bPreRender)
        {
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
        };

        this.bLoaded = false;
        this.bRendered = false;

        var self = this;
        var oImage = new Image();
        oImage.onload = function () {
            self.bLoaded = true;
        };
        oImage.src = this.ImagePath;
        this.SourceImage = oImage;
    };

    /**
     * @description Update the asset
     */
    GameAssetGeneral.prototype.Type = "Asset";

    /**
     * @description Update the asset
     */
    GameAssetGeneral.prototype.Update = function () {
        if (this.bLoaded && !this.bRendered && this.bPreRender) {
            GameAssetGeneral.prototype.Render.call(this);
        } else if (this.bLoaded && !this.bPreRender) {
            this.bRendered = true;
        }
    };

    /**
     * @description Render the asset to it's own canvas
     */
    GameAssetGeneral.prototype.Render = function () {
        this.RendererContext.clearRect(0, 0, this.SourceRect.width, this.SourceRect.height);

        this.RendererContext.drawImage(this.SourceImage,
            this.SourceRect.left, this.SourceRect.top, this.SourceRect.width, this.SourceRect.height,
            0, 0, this.SourceRect.width, this.SourceRect.height);

        this.bRendered = true;
    };

    /**
     * @description Draw the asset
     * @param {Context} context The context to draw the image
     */
    GameAssetGeneral.prototype.Draw = function (context) {
        if (this.bRendered && this.bPreRender) {
            context.drawImage(this.Renderer, this.DestinationRect.left, this.DestinationRect.top, this.DestinationRect.width, this.DestinationRect.height);
        } else if (this.bRendered) {
            context.drawImage(this.SourceImage,
                this.SourceRect.left, this.SourceRect.top, this.SourceRect.width, this.SourceRect.height,
                this.DestinationRect.left, this.DestinationRect.top, this.DestinationRect.width, this.DestinationRect.height);
        }
    };

    /**
     * @description Dispose of this asset
     */
    GameAssetGeneral.prototype.Dispose = function () {
        if ($('#' + this.Id).length > 0) {
            $('#' + this.Id).remove();
        }
    };

    /**
     * @description property x
     */
    Object.defineProperty(GameAssetGeneral.prototype, 'x', {
        get: function () {
            return this.DestinationRect.left;
        },
        set: function (value) {
            this.DestinationRect.left = value;
        }
    });

    /**
     * @description property y
     */
    Object.defineProperty(GameAssetGeneral.prototype, 'y', {
        get: function () {
            return this.DestinationRect.top;
        },
        set: function (value) {
            this.DestinationRect.top = value;
        }
    });

    /**
     * @description property width
     */
    Object.defineProperty(GameAssetGeneral.prototype, 'width', {
        get: function () {
            return this.DestinationRect.width;
        },
        set: function (value) {
            this.DestinationRect.width = value;
        }
    });

    /**
     * @description property height
     */
    Object.defineProperty(GameAssetGeneral.prototype, 'height', {
        get: function () {
            return this.DestinationRect.height;
        },
        set: function (value) {
            this.DestinationRect.height = value;
        }
    });

    /**
     * @description property sale
     */
    Object.defineProperty(GameAssetGeneral.prototype, 'scale', {
        get: function () {
            var WidthScale = this.DestinationRect.width / this.SourceRect.width;
            var HeightScale = this.DestinationRect.height / this.SourceRect.height;
            return (WidthScale > HeightScale) ? WidthScale : HeightScale;
        },
        set: function (value) {
            this.DestinationRect.width = this.SourceRect.width * value;
            this.DestinationRect.height = this.SourceRect.height * value;
        }
    });

    // Add this Base class to the "Base" array
    Base.GameAssetGeneral = GameAssetGeneral;
})();
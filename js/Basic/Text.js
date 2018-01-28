/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 29/10/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Create Text class object
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 29/10/2017   RAJ         Inital Creation
 ******************************************************************************/

/**
 * @file Text.js
 * @author Ryon James
 * @namespace Basic
 */

// Text
(function () {
    /**
     * @description Constructor
     * @param {String} text (optional param)
     * @param {Number} x (optional param)
     * @param {Number} y (optional param)
     * @param {Number} size (optional param)
     * @param {String} font (optional param)
     * @param {String} align (optional param)
     * @param {String} fillcolor (optional param)
     * @param {Number} linewidth (optional param)
     * @param {String} strokecolor (optional param)
     */
    function Text(text, x, y, size, font, align, fillcolor, linewidth, strokecolor) {
        this._text = text || "";
        this._x = x || 0;
        this._y = y || 0;

        this._size = size || 12;
        this._font = font || "Arial";
        this._align = align || "left";

        this._fillcolor = fillcolor || "white";

        this._linewidth = linewidth || 0;
        this._strokecolor = strokecolor || "black";
    }

    /**
     * @description property text
     */
    Object.defineProperty(Text.prototype, 'text', {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
        }
    });

    /**
     * @description property x
     */
    Object.defineProperty(Text.prototype, 'x', {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        }
    });

    /**
     * @description property y
     */
    Object.defineProperty(Text.prototype, 'y', {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        }
    });

    /**
     * @description property font
     */
    Object.defineProperty(Text.prototype, 'size', {
        get: function () {
            return this._size;
        },
        set: function (value) {
            this._size = value;
        }
    });

    /**
     * @description property font
     */
    Object.defineProperty(Text.prototype, 'font', {
        get: function () {
            return this._font;
        },
        set: function (value) {
            this._font = value;
        }
    });

    /**
     * @description property align
     */
    Object.defineProperty(Text.prototype, 'align', {
        get: function () {
            return this._align;
        },
        set: function (value) {
            this._align = value;
        }
    });

    /**
     * @description property fillcolor
     */
    Object.defineProperty(Text.prototype, 'fillcolor', {
        get: function () {
            return this._fillcolor;
        },
        set: function (value) {
            this._fillcolor = value;
        }
    });

    /**
     * @description property linewidth
     */
    Object.defineProperty(Text.prototype, 'linewidth', {
        get: function () {
            return this._linewidth;
        },
        set: function (value) {
            this._linewidth = value;
        }
    });

    /**
     * @description property strokecolor
     */
    Object.defineProperty(Text.prototype, 'strokecolor', {
        get: function () {
            return this._strokecolor;
        },
        set: function (value) {
            this._strokecolor = value;
        }
    });

    /**
     * @description Overwrite draw the asset
     * @param {Context} context
     */
    Text.prototype.Draw = function (context) {
        context.font = this.size + "px " + this._font;
        context.textAlign = this._align;

        context.fillStyle = this._fillcolor;
        context.fillText(this._text, this._x, (this._y + this.size));

        if (this._linewidth > 0) {
            context.lineWidth = this._linewidth;
            context.strokeStyle = this._strokecolor;
            context.strokeText(this._text, this._x, (this._y + this.size));
        };
    };

    /**
     * @description Dispose of this asset
     */
    Text.prototype.Dispose = function () { };


    // Add this class to the "Basic" array
    Basic.Text = Text;
})();
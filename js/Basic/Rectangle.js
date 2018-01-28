/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
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
 * @file Rectangle.js
 * @author Ryon James
 * @namespace Basic
 */

// Rectangle
(function () {
    /**
     * @description Constructor
     * @param {Number} left (optional param)
     * @param {Number} top (optional param)
     * @param {Number} width (optional param)
     * @param {Number} height (optional param)
     */
    function Rectangle(left, top, width, height) {
        this.left = left || 0;
        this.top = top || 0;
        this.width = width || 0;
        this.height = height || 0;
        this.right = this.left + this.width;
        this.bottom = this.top + this.height;
    }

    /**
     * @description Setup the area the Rectangle covers
     * @param {Number} left 
     * @param {Number} top
     * @param {Number} width (optional param)
     * @param {Number} height (optional param)
     */
    Rectangle.prototype.Set = function (left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width || this.width;
        this.height = height || this.height
        this.right = (this.left + this.width);
        this.bottom = (this.top + this.height);
    }

    /**
     * @description Check if target Rectangle is compeltely within this Rectangle
     * @param {Rectangle} rect 
     * @returns {Boolean} true/false
     */
    Rectangle.prototype.Within = function (rect) {
        return (rect.left <= this.left &&
                rect.right >= this.right &&
                rect.top <= this.top &&
                rect.bottom >= this.bottom);
    }

    /**
     * @description Check if target Rectangle is overlapping with this Rectangle
     * @param {Rectangle} rect 
     * @returns {Boolean} true/false
     */
    Rectangle.prototype.Overlaps = function (rect) {
        return (this.left < rect.right &&
                this.right > rect.left &&
                this.top < rect.bottom &&
                this.bottom > rect.top);
    }

    /**
     * @description property x
     */
    Object.defineProperty(Rectangle.prototype, 'x', {
        get: function () {
            return this.left;
        },
        set: function (value) {
            this.left = value;
        }
    });

    /**
     * @description property y
     */
    Object.defineProperty(Rectangle.prototype, 'y', {
        get: function () {
            return this.top;
        },
        set: function (value) {
            this.top = value;
        }
    });

    // Add this class to the "Basic" array
    Basic.Rectangle = Rectangle;
})();
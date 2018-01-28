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
 *
 *****************************************************************************/

/**
 * @file ImageMask.js
 * @author Ryon James
 * @namespace Basic
 */

/**
 * Get a small area of an Image
 */
(function () {
    /**
     * @description Constructor
     * @param {String} strImageLink
     * @param {Rectangle} SourceRect
     * @param {Rectangle} DestinationRect
     */
    function ImageMask(strImageLink, SourceRect, DestinationRect) {
        var oImage = new Image();
        oImage.src = strImageLink;

        this.image = oImage;

        this.SourceRect = SourceRect || new Custom.Rectangle();
        this.DestinationRect = DestinationRect || new Custom.Rectangle();
    }
    
    /**
     * @description Draw the Image to the context
     * @param {Context} ViewContext
     */
    function Draw(ViewContext) {
        ViewContext.drawImage(
            this.image,
            this.SourceRect.left, this.SourceRect.top, this.SourceRect.width, this.SourceRect.height,
            this.DestinationRect.left, this.DestinationRect.top, this.DestinationRect.width, this.DestinationRect.height
        );
    }

    // Add this Base class to the "Basic" array
    Basic.ImageMask = ImageMask;
})();
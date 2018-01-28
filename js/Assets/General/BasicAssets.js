/*******************************************************************************
 * COPYRIGHT 2017
 *-----------------------------------------------------------------------------
 * System           : Dare Framework
 * -----------------------------------------------------------------------------
 * Author           : Ryon James
 * -----------------------------------------------------------------------------
 * Date             : 01/12/2017
 * -----------------------------------------------------------------------------
 * Functionality    : Create Basic Asset objects
 * -----------------------------------------------------------------------------
 *  Date        Name        Comment
 * -----------------------------------------------------------------------------
 * 01/12/2017   RAJ         Inital Creation
 ******************************************************************************/

// CreateBasicAsset
function CreateBasicAsset(refSourceRect, refImagePath)
{
    /**
     * @description Constructor
     * @param {string} Id 
     * @param {Rectangle} DestinationRect 
     * @param {Boolean} bPreRender
     */
    function BasicAsset(Id, DestinationRect, bPreRender)
    {
        this.SourceRect = refSourceRect;
        this.ImagePath = refImagePath;

        BasicAsset.prototype.Init.call(this, Id, DestinationRect, bPreRender);
    };

    /**
     * @description Inherit GameAssetGeneral class
     */
    BasicAsset.prototype = Object.create(Base.GameAssetGeneral.prototype);

    /**
     * @description Update the asset
     */
    //BasicAsset.prototype.Update = function () { };

    /**
     * @description Render the asset to it's own canvas
     */
    //BasicAsset.prototype.Render = function () { };

    /**
     * @description Overwrite draw the asset
     */
    //BasicAsset.prototype.Draw = function (context) { };

    /**
     * @description Dispose of this asset
     */
    //BasicAsset.prototype.Dispose = function () { };

    return BasicAsset;
};

/**
 * @description Populate Custom Library with Basic Assets
 */
Custom = {
    SplashLogo:         CreateBasicAsset(new Basic.Rectangle(0, 0, 479, 152), "images/val_emp_logo.png"),

    ButtonBasePlate:    CreateBasicAsset(new Basic.Rectangle(60, 30, 65, 65), "images/GUI/GUI_Templates.png"),
    ButtonBlackClose:   CreateBasicAsset(new Basic.Rectangle(745, 120, 40, 40), "images/GUI/GUI_Templates.png"),
    ButtonWhiteClose:   CreateBasicAsset(new Basic.Rectangle(470, 120, 40, 40), "images/GUI/GUI_Templates.png"),

    PopupBackground:    CreateBasicAsset(new Basic.Rectangle(75, 510, 280, 310), "images/GUI/GUI_Templates.png"),
    PopupPaper:         CreateBasicAsset(new Basic.Rectangle(385, 560, 200, 230), "images/GUI/GUI_Templates.png"),
    PopupPlate:         CreateBasicAsset(new Basic.Rectangle(120, 285, 195, 55), "images/GUI/GUI_Templates.png"),
    PopupRibbon:        CreateBasicAsset(new Basic.Rectangle(90, 420, 250, 70), "images/GUI/GUI_Templates.png")
};
---
id: methods
title: RxView360 API Methods
sidebar_label: API Methods
---

### `add3DViewAttribute`

Adds a custom attribute to a 3D view.

Returns NA

**Parameters**:

-   `szname`: Name of the custom attribute (string)
-   `szvalue`: Value of the custom attribute (string)
-   `viewname`: Name of the 3D view (string)

**Example**:

```javascript
RxCore.add3DViewAttribute("description", "my description", annotitem.name);
```

### `addFill`

To populate various fill styles to use with CAD polygons, use the addFill method.

Returns NA

**Parameters:**

-   `type`: Should be either (string - 'hatch' or 'color')
-   `name`: name of the fill entry to be used when applying the fill (string)
-   `image`: for hatch the image object used as fill repeat image (Html image or null)
-   `tilesize`: size of the hatch image in pixels object \{w : number, h : number\}
-   `color`: color of the hatch or color fill (Html color)
-   `ledgend_description`: Description of the fill to be used in a ledgend displayed with the drawing (string)

    **Syntax**:

```javascript
RxCore.addFill (type : string, name : string, image : html image, tilesize : integer, color :  html color, legdger_description : string);
```

**Example**:

```javascript
//Red fill color with 0.5 transparency
RxCore.addFill("color", "transpred", null, null, "rgba(255,0,0,0.5)", "BTA");
//Adding a hatch using an image of 16x16 pixels.
RxCore.addFill(
	"hatch",
	" diagonal-forward ",
	image,
	{ w: 16, h: 16 },
	"rgba(255,0,0,0.5)",
	"Non usable space"
);
```

### `addGltftoDoc`

Add a model to an already open 3D model. Used to add separate type of 3D entities to a 3D model like VVS, Structural etc

Returns NA

**Parameters**

-   `URL`: URL or path to an IFC file to add to the currently open 3D model
    If path, it must be relative to the server

**Syntax**

```javascript
RxCore.addGltftoDoc(URL);
```

### `addHoverforBlock`

Mark a vector 2D polygon with a different color. Used in combination with GUI_2DBlockInfoPos for mouse over indication. Use clearHover to remove the marking.

Returns NA

**Parameters**

-   `blockindx`: Block index returned by GUI_2DBlockInfoPos
-   `color:` Highlight color to use on 2D vector polygon.

**Syntax**

```javascript
RxCore.addHoverforBlock(blockindx, color);
```

### `addMarkup`

Add one or more markup entities using XML encoded text

**Parameters**

-   `makupxml`: String in xml format that holds tags in accordance with RxView360 xml based markup format

Returns NA

**Syntax**

```javascript
RxCore.addMarkup(markupxml);
```

### `alignCompare`

Used to align two documents in an overlay compare. Takes an Array of align objects returned by the GUI_CompareMeasure callback

Returns NA

**Parameters**

-   `Array of align objects`: Align object \{dist: distance, angle : angle, offset : offset, pwidth : pagewidth\}
    offset = ,\{'x:xoffset,y:yoffset\}

**Syntax**

```javascript
RxCore.alignCompare(array);
```

### allowPolygonMove

Turns on the move capability of locked markups like area and polygon

Returns NA

**Parameters**

-   `Onoff`: Boolean true = on, false = off

**Syntax**

```javascript
RxCore.allowPolygonMove(onoff);
```

### `appendCustomBlockAttribute`

For vector files with blocks you can add custom attributes that can be displayed when selecting a block

Returns NA

**Parameters**

-   `blockid`: Unique ID of the block that attributes should be added to
-   `name`: Name of the added attribute
-   `value`: Value of the added attribute

**Syntax**

```javascript
RxCore.appendCustomBlockAttribute(blockid, name, value);
```

### `applyAngleLength`

When using a markup drawing tool that supports setting angle and length of a line, this can be used to override the mouse input and set angle and length using parameters. Values are in degrees and current active measurement unit. Works in conjunction with GUI_markupdrawParams event callback that Returns the values set or GUI_markupParamsError that will be called if values exceed drawing boundaries

Returns NA

**Parameters**

-   `angle`: Direction to draw the line in current active measurement unit. Ex mm
-   `length`: Length of the line in current active measurement unit. Ex mm.
-   `bAdvance`: If markup has multiple segments and this is true the active segment will be the next two points. If false the active segment will remain the current segment.

**Syntax**

```javascript
RxCore.applyAngleLength(angle, length, bAdvance);
```

### `applyAngleLengthSelected`

You can use this to set the angle and length of a markup line for selected markup that supports setting angle and length. Values are in degrees and current active measurement unit. Works in conjunction with GUI_markupdrawParams event callback that Returns the values set or GUI_markupParamsError that will be called if values exceed drawing boundaries.
Returns NA

**Parameters**

-   `angle`: Direction to draw the line in current active measurement unit. Ex mm
-   `length`: Length of the line in current active measurement unit. Ex mm
-   `bAdvance`: If markup has multiple segments and this is true the active segment will be the next two points. If false the active segment will remain the current segment

**Syntax**

```javascript
RxCore.applyAngleLengthSelected(angle, length, bAdvance);
```

### `applyMarkup`

If the drawing of a markup is overridden using applyWidthHeight or applyAngleLength this method will complete the creation of the new markup object. You can also restore mouse input using restoreMouseInput.

Returns NA

**Syntax**

```javascript
RxCore.applyMarkup();
```

**Parameters** none

### `applyWidthHeight`

When using a markup drawing tool that supports setting width and height values, this can be used to override the mouse input and set width and height using parameters. Values are in current active measurement unit. Works in conjunction with GUI_markupdrawParams event callback that Returns the values set or GUI_markupParamsError that will be called if values exceed drawing boundaries.

Returns NA

**Parameters**

-   `w`: Width in current active measurement unit. Ex mm.
-   `h`: Height in current active measurement unit. Ex mm.

**Syntax**

```javascript
RxCore.applyWidthHeight(w, h);
```

### `applyWidthHeightSelected`

You can use this to set the width and height of selected markup that has a width height value. Values are in current active measurement unit. Works in conjunction with GUI_markupdrawParams event callback that Returns the values set or GUI_markupParamsError that will be called if values exceed drawing boundaries.

Returns NA

**Syntax**

```javascript
RxCore.applyWidthHeightSelected(w, h);
**Parameters**

-   `w`: Width in current active measurement unit. Ex mm.
-   `h`: Height in current active measurement unit. Ex mm.

```

### `attributeMask`

For vector files with blocks that have attributes you can set a search expression to limit the returned attributes.

Returns NA

**Syntax**

```javascript
RxCore.attributeMask(attributeLoadMask);
```

**Parameters**

-   `attributeLoadMask`: String with wildcard “_” to match a list of attribute names. Ex “area_” matches all block names that begin with “area”.

### `backgroundColor`

Sets the default background color used when opening a vector type format drawing.

Returns NA

**Parameters**

-   `color`: Color string using supported html color notation Ex “#00FF00”

**Syntax**

```javascript
RxCore.backgroundColor(color);
```

### `backgroundCustomColor`

For vector files you can set a custom background color in addition to the supported grey, black and white.

Returns NA

**Syntax**

```javascript
RxCore.backgroundCustomColor(color);
```

**Parameters**

-   `color`: Color string using supported html color notation Ex “#00FF00”

### `birdseyetool`

Enable mouse event handling for birdseye overview tool.

Returns NA

**Syntax**

```javascript
RxCore.birdseyetool();
```

**Parameters** None

### `blockhoverevent`

Use to activate or turn off GUI_2DBlockInfoPos callback when moving mouse over 2D vector polygons.

Returns NA

**Syntax**

```javascript
RxCore.blockhoverevent(onoff);
```

**Parameters**

-   `onoff`: Boolean - true = on, false = off.

### `blockLoadMask`

For vector files with blocks you can limit the listed blocks in the blocks list by applying a selection mask.

Returns NA

**Syntax**

```javascript
RxCore. blockLoadMask (BlockLoadMask)`
```

**Parameters**

-   `BlockLoadMask`: String with wildcard “_” to match a list of block names. Ex “area_” matches all block names that begin with “area”.

### `bringIframeToFront`

Used with foxitintegration to display a PDF with foxit if more than one is open. Use getFoxitIframeID to get Iframe name by open files index.

Returns NA

**Syntax**

```javascript
RxCore. bringIframeToFront (iframename)`
```

Parameters

-   `iframename` : Name of iframe to display.

### `calibrate`

Initiate the Measurment Calibrate function that can be used to set the scale of a document or drawing.

Returns NA

**Syntax**

```javascript
RxCore.calibrate(selected);
```

**Parameters**

`Selected`: Boolean operator that toggle the function on/off

### `canvToImage`

Post an image representation of the current 3D view to server as PNG.

Returns NA

**Syntax**

```javascript
RxCore.canvToImage();
```

**Parameters** None

### `change3DMarkup`

Apply to selected 3D markup. Changes the texture for the current 3D markup to another texture. These textures must be pre-loaded to be available using create3DTexture.

Returns NA

**Syntax**

```javascript
RxCore.change3DMarkup(id);
```

**Parameters**

-   `id`: Number indicating the texture index.

### `change3DMarkupSize`

Apply to selected 3D markup. Changes the size of the current 3D markup.

Returns NA

**Syntax**

```javascript
RxCore.change3DMarkupSize(scale);
```

**Parameters**

-   'Scale`: Number where 1 is unchanged, 2 double size, fraction of 1 is fraction of current size.

### `change3DVectorBlock`

Use this method to toggle visibility of a 3D part by part name.

Returns NA

**Syntax**

```javascript
RxCore.change3DVectorBlock(name);
```

**Parameters**

-   `Name`: Name of 3D part to show/hide

### `changeColorAll`

Sets the fill, stroke or text color of all markup objects.

Returns NA

**Syntax**

```javascript
RxCore.changeColorAll(val, strokefill);
```

**Parameters**

-   `Val`: A color described using HTML notation
-   strokefill`; A number 0=fill color, 1=line color, 2= text color

### `changeColorMarkup`

Sets the fill, stroke or text color of a markup object.

Returns NA

**Syntax**

```javascript
RxCore.changeColorMarkup(markup, val, strokefill);
```

**Parameters**

-   `markup`: A markup object.
-   `Val`: A color described using HTML notation
-   `strokefill`: A number 0=fill color, 1=line color, 2= text color

### `changeFillColor`

Sets the fill color of currently selected markup object.

Returns NA

**Syntax**

```javascript
RxCore.changeFillColor(val);
```

**Parameters**

-   `Val`: A color described using HTML notation

### `changeFillColorByIndex`

Sets the line color of markup object by markup index.

Returns NA

**Syntax**

```javascript
RxCore.changeFillColorByIndex(index, color);
```

**Parameters**

-   `color`: A color described using HTML notation

-   `index`: Markup object index.

### `changeLabelTransp`

Sets the transparency of currently selected markup object label. Apply to area and length measurement objects.

Returns NA

**Syntax**

```javascript
RxCore.changeLabelTransp(val);
```

**Parameters**

-   `Val`: A value between 100 and 0 where 100 is fully opaque

### `changeMarkupLayer`

Moves selected markup to a new markup layer.

Returns NA

**Syntax**

```javascript
RxCore.changeMarkupLayer(layer);
```

**Parameters**

-   `Layer`: A number indicating a valid markup layer.

### `changePDFLayer`

Use this method to toggle visibility of a PDF layer by ID.

Returns NA

**Syntax**

```javascript
RxCore.changePDFLayer(index, visible);
```

**Parameters**

-   `index`: Index of PDF layer to show/hide
-   `visible`: true = on, false = off

### `changeSpaceCustomLabel`

Sets a custom text of a Rasterex space markup object label.

Returns NA

**Syntax**

```javascript
RxCore.changeSpaceCustomLabel(blockid, newtext);
```

**Parameters**

-   `blockid`: Id of space markpup object.
-   `Newtext`: Text to use with space object label

### `changeSnapState`

Turns on/off snap to vector for markup and measurement drawing

Returns NA

**Syntax**

```javascript
RxCore.changeSnapState(state);
```

**Parameters**

-   `State`: Boolean, true = on false = off.

### `changeStrokeColor`

Sets the line color of currently selected markup object.

Returns NA

**Syntax**

```javascript
RxCore.changeStrokeColor(val);
```

**Parameters**

-   `Val`: A color described using HTML notation

### `changeTextColor`

Sets the text color of currently selected text box object.

Returns NA

**Syntax**

```javascript
RxCore.changeTextColor(val);
```

**Parameters**

-   `Val`: A color described using HTML notation

### `changeTransp`

Sets the transparency of currently selected object. This applies to filled objects only.

Returns NA

**Syntax**

```javascript
RxCore.changeTransp(val);
```

**Parameters**

-   `Val`: A value between 100 and 0 where 100 is fully opaque

### `changeTranspMarkup`

Sets the transparency of a markup object. This applies to filled objects only.

**Syntax**

```javascript
RxCore.changeTransp(markup, val);
```

**Parameters**

-   `markup`: A markup object.
-   `Val`: A value between 100 and 0 where 100 is fully opaque
    Returns NA

### `changeVectorBlock`

Use this method to toggle visibility of a 2D block by name.
Syntax RxCore.changeVectorBlock (name)
Parameters Name Name of 2D part to show/hide
Returns NA

### `changeVectorLayer`

Use this method to toggle visibility of a 2D layer by name.

Returns NA

**Syntax**

```javascript
RxCore.changeVectorLayer(index);
```

**Parameters**

-   `index`: Index of 2D layer to show/hide

### `checkLargePDF`

Used with foxit integration to set large pdf state for documents with many pages.

Returns NA

**Syntax**

```javascript
RxCore.checkLargePDF(numpages);
```

**Parameters**

-   `numpages`: Number of pages in document.

### `clearHover`

Clear all markings created using addHoverforBlock.

Returns NA

**Syntax**

```javascript
RxCore.clearHover();
```

**Parameters** None

### `clearMarkup`

Clears all markup from currently open and active drawing or document.

Returns NA

**Syntax**

```javascript
RxCore.clearMarkup();
```

**Parameters** None

### `clipping3D`

Sets the transparency of currently selected object. This applies to filled objects only.

**Syntax**

```javascript
RxCore.clipping3D(onoff, plane, value);
```

**Parameters**

-   `onoff`: Boolean to turn clipping on / off.
-   `plane`: X, Y or Z plane given by numbers 0=X, 1=Y, 2=Z
-   `value`: A value in percent for the clipping range.

Returns NA

### `closeAll`

Closes all open documents.

Returns NA

**Syntax**

```javascript
RxCore.closeAll();
```

**Parameters** None

### `closeDocument`

Closes the currently active drawing or document.

Returns NA

**Syntax**

```javascript
RxCore.closeDocument();
```

**Parameters** None

### `closeDocumentEx`

Closes the currently active drawing or document. This is the preferred new method to use for closing a document.

Returns \<\promise>

**Syntax**

```javascript
RxCore.closeDocumentEx();
```

**Parameters** None

**Example**

```javascript
RxCore.closeDocumentEx().then(onCloseFileSuccess);

function onCloseFileSuccess() {
	//perform clean up on file close.
}
```

### `compare`

Used in combination with RxCore.compareDialog to create a compare overlay from two open files.

Returns NA

**Syntax**

```javascript
RxCore.compare(okcancel);
```

**Parameters**

-   `okcancel`: Boolean that has to be true for the compare to be created.

### `compareDialog`

Opens a dialog to create an overlay compare composite if defined in GUI and connected to rxcorefunctions using the RxCore_GUI_CompareDiag callback. Use `RxCore_Compare(okcancel)` to create the compare from selected files.

Returns NA

**Syntax**

```javascript
RxCore.compareDialog();
```

**Parameters** none

### `compareFiles`

Open two files and create a compare overlay.

Returns NA

**Syntax**

```javascript
RxCore.compareFiles(filebackground, fileoverlay);
```

**Parameters**

-   `filebackground`: URL of file to use as background
-   `fileoverlay`: URL of file to overlay

### `compareMeasure`

Starts the compare alignment function to get scale and offset for compare/overlay on a file even if the file is not currently part of a compare/overlay.

Returns NA

**Syntax**

```javascript
RxCore.compareMeasure(index);
```

**Parameters**

-   `Index`: 0 = background page, 1 = overlay page

### `compareNudgeOffset`

Changes the offset of a compare/overlay by a small increment to adjust the alignment.

Returns NA

**Syntax**

```javascript
RxCore.compareNudgeOffset(direction);
```

**Parameters**

-   `direction`: 0 = right, 1 = left, 2 = up, 3 = down

### `compareNudgeRotate`

Changes the rotation of the overlay file in a compare/overlay by a small increment to adjust the alignment.

Returns NA

**Syntax**

```javascript
RxCore.compareNudgeRotate(clockwise);
```

**Parameters**

-   `clockwise`: If true rotation is clockwise, if false rotation is counter clockwise

### `compareNudgeScale`

Changes the scale of a compare/overlay by a small increment to adjust the alignment.

Returns NA

**Syntax**

```javascript
RxCore.compareNudgeScale(updown);
```

**Parameters**

-   `direction`: 0 = scale overlay up, 1 = scale overlay down

### `compareScale`

Starts the compare alignment function to set scale and offset for compare/overlay.

Returns NA

**Syntax**

```javascript
RxCore.compareScale();
```

**Parameters** None

### `consolidate`

Sets the markup consolidate mode if the user has permission to consolidate markup.

Returns NA

**Syntax**

```javascript
RxCore.consolidate(OnOff);
```

**Parameters**

-   `OnOff`: Boolean true = consolidate on, false = consolidate off.

### `consolidatedOnly`

Sets the display of markup based on whether it is consolidated or not.

Returns NA

**Syntax**

```javascript
RxCore.consolidatedOnly(OnOff);
```

**Parameters**

-   `OnOff`: Boolean true = only consolidated markup displayed.. false = all markup displayed.

### `copyMarkUp`

Copy selected markup to LocalStorage

Returns NA

**Syntax**

```javascript
RxCore.copyMarkUp();
```

**Parameters** None

### `create3Dfloorplan`

Creates a plane from a 2D drawing that can be inserted into a 3D model.

**Syntax**

```javascript
RxCore.create3Dfloorplan(sourceindex, targetdocindex, floornum);
```

**Parameters**

-   `sourceindex`: An open file index of a 2D drawing.
-   `targetdocindex`: An open file index of the target 3D model
-   `floornum`: The floor index of the 3D model the floorplan plane is for.

Returns NA

### `create3DfloorplanfromPage`

Creates a plane from a 2D drawing that can be inserted into a 3D model using the currently active document and page.

Syntax RxCore. create3DfloorplanfromPage(targetdocindex, floornum)

Parameters

targetdocindex An open file index of the target 3D model
floornum The floor index of the 3D model the floorplan plane is for.

Returns NA

### `create3DfloorplanfromCanvas`

Creates a floor plan plane from a canvas that can be inserted into a 3D model. Get canvas using get3dFloorplanCanvas method. Canvas is returned using `GUI_FloorplanCanvas`

**Syntax**

```javascript
RxCore create3DfloorplanfromCanvas(canvas, floornum, alignarray);
```

**Parameters**

-   `canvas`: An html5 canvas to be used as image source.
-   `floornum`: The floor index of the 3D model the floorplan plane is for.
-   `alignarray`: An Array of alignment data used when creating a compare overlay.

Returns NA

### `create3DMarkup`

Creates a fixed view for a 3D model and enables the use of the annotation tools for 3D.

**Syntax**

RxCore. create3DMarkup(select)

**Parameters**

-   `select`: Boolean – true = enable 3D markup, false = disable 3D view.

Returns NA

### `create3DTexture`

Creates a texture to be used with 3D symbols. Use to preload textures that can be used to switch the texture of an existing 3D symbol markup.

**Syntax**

```javascript
RxCore.create3DTexture(image, w, h, id);
```

**Parameters**

-   `Image`: An HTML image source object.
    `w`: Width of image in pixels
    `H`: Height of image in pixels
    `id`: A unique number used as ID for the symbol texture.

Returns NA

### `createAreaAttributes`

Use to create an Attribute for all polygons in a 2D vector file that hold the area value of the polygon.

**Syntax**

```javascript
RxCore.createAreaAttributes(szAttname);
```

**Parameters**

-   `szAttname`: Name of Attribute to create.

Returns NA

### `createFoxitDoc`

Used to create a document object from foxit integration.

**Syntax**

```javascript
RxCore.createFoxitDoc(foxview);
```

**Parameters**

-   `foxview`: foxit integration object.

Returns NA

### `createServerContent`

Use this method to create server content without actually opening the file. A callback event GUI_CreationComplete Returns the xml file for the content when the process is complete.

**Syntax**

```javascript
RxCore.createServerContent(fileurl);
```

**Parameters**

`fileurl`: URL address or full server-side windows path to a file to open in the viewer. This can be either a string or an object with the following properties.
`fileurlobj.filepath`: A string containing URL or path of file to open.
fileurlobj.mime`:  A string containing mime type for the type of file to open or null. See appendix C for list of mime types.
`fileurlobj.cacheid`:  A string containing a unique name to use for cache entry or null.
`fileurlobj.displayname`: A string that is used as the document file name or null.

Returns NA

### `createSpaceFromPolygon`

Allows you to use the mouse to select a vector block in a vector drawing that has polylines or polygons by clicking inside and create a Rasterex space object.
Syntax RxCore.createSpaceFromPolygon(selected)
Parameters Selected Boolean value. true = on, false = off.
Returns NA

### `createSpacefromBlock`

Creates a Rasterex space object from existing vector block given by blockid. You can use the pickPolygon tool to select a vector block to retrieve the blockid, or search for blocks with a specific attribute value using RxCore.findBlockByAttr().
Syntax RxCore.createSpacefromBlock (blockid)
Parameters blockid Block index of a vector block
Returns NA

### `createTextRect`

Create a text box using left, top, width and height in screen coordinates.
Syntax RxCore. createTextRect (x, y, w, h, text)
Parameters x,y,w,h Left, top, width and height in screen coordinates
text Text content of the text box markup
Returns NA

### `delete3DViewAttribute`

Removes a custom attribute from a 3D view
Syntax RxCore.delete3DViewAttribute(szname, viewname)
Parameters szName String – Name of the custom attribute
Parameters viewname String - Name of the view. The view name can be extracted from any 3D annotation as the name property of the annotation.
Returns NA
Example RxCore. delete3DViewAttribute("description", annotitem.name);
//annotitem is a valid 3D annotation object.

.

### `deleteCamera`

Use this method to delete a 3D View
Syntax RxCore.deleteCamera (name)
Parameters name String - The name of the view.
Returns NA

### `deleteMarkUp`

Use this method to delete selected markup.
Syntax RxCore.deleteMarkUp ()
Parameters None
Returns NA

### `deleteMarkupbyGUID`

Use this method to delete markup specified by the unique GUID value. If this is not set the uniqueID is 0.
Syntax RxCore.deleteMarkupbyGUID (GUID)
Parameters GUID Unique property uniqueID of a markup object.
Returns NA

### `deletePoint`

Sets the drawing operation for markup edit to delete selected point for markup that has multiple points.
Syntax RxCore.deletePoint ()
Parameters None
Returns NA

### `deleteVectorAttribute`

Delete a specific attribute from added attributes by name. Apply to file types that have attributes.
Syntax RxCore. deleteVectorAttribute (szAttribName)
Parameters szAttribName Name of attribute to delete.
Returns NA

### `disablewelcome`

Disables the automatic loading of the RxView360 welcome screen graphics.
Syntax RxCore. disablewelcome (onoff)
Parameters Onoff Boolean true = disables welcome screen graphics, false = default value. Welcome screen is displayed.
Returns NA

### `displayFloorplan`

If 2D floorplans has been injected into the model, this method can be used to turn the visibility on/off.
Syntax RxCore.displayFloorplan (floornum, onOff, bAll)
Parameters floornum Index of floor.
onOff Boolean display status true = on, false = off.
bAll Boolean will affect all inserted 2D floor plans.
Returns NA

### `documentOpened`

Use this method to check if a document is open.
Syntax RxCore.documentOpened ()
Parameters None
Returns True/false Boolean value true

### `doResize`

If the html GUI needs to change the size of the canvas use this method to notify rxcorefunctions about the change.
Syntax RxCore.doResize (offsetWidth, offsetHeight)
Parameters offsetWidth New width of page to subtract from canvas width in pixels
Parameters offsetHeight New height of page to subtract from canvas height in pixels.
Returns NA

### `doResizeEx`

Use this if the rxcontainer div has absolute width and height and you need to change the size of the viewport. This require that you have used setLayout with an additional absolute property to the layout object set to true.
Syntax RxCore.doResize (Width, Height)
Parameters Width New absolute width of canvas in pixels
Height New absolute height of canvas in pixels.
Returns NA

### `draw3DBirdseye`

Draws the camera position and angle on the bird’s eye image.
Syntax RxCore.draw3DBirdseye ()
Parameters None
Returns NA

### `drawmarkupToCanvas`

Draw markup associated with a specific 3D view to a Canvas.
Syntax RxCore.drawmarkupToCanvas (ctx, width, height, name)
Parameters ctx Canvas context
Parameters width Width of canvas
Parameters height Height of canvas
Parameters name Name of 3D view
Returns NA

### `enableCamNavDraw`

Use to temporarily turn off the automatic update of the camera indicator for drawings used as 2D navigation for a 3D model. This is used in combination with floor selection to prevent the automatic update of a floor plan when selecting active floorplan to move between floors.
Syntax RxCore.enableCamNavDraw (onOff)
Parameters onOff Boolean where true = on, false = off.
Returns NA

### `endGetTextRects`

Used with getTextRects to terminate the operation and reset values.
Syntax RxCore.endGetTextRects ()
Parameters none
Returns NA
Example RxCore.endGetTextRects();
//terminate operation started with RxCore.getTextRects

### `endMarkupTextSearch`

Use this method to terminate markup text search function initiated using
RxCore. markupTextSearch
Syntax RxCore. endMarkupTextSearch ()
Parameters none
Returns NA

### `endTextSearch`

Use this method to terminate text search function initiated using RxCore.textSearch
Syntax RxCore.endTextSearch()
Parameters none
Returns NA

### `explode3D`

Use this method in combination with RxCore.explode3DDistance to set the separation distance of blocks in a currently open 3D model.
Syntax RxCore.explode3D (onoff)
Parameters onoff Boolean value to actvate function true = on, false = off.
Returns NA

### `explode3DDistance`

Use this method in combination with RxCore.explode3D to set the separation distance of blocks in a currently open 3D model.
Syntax RxCore.explode3DDistance (value)
Parameters Value Value in percentage of model extent.
Returns NA

### `exportFile`

Use this method to export currently active drawing or document to a supported export format like PDF.
Syntax RxCore.exportFile (consolidate, format,UPI,paperSize,markupFlag)
Parameters consolidate Boolean if true only consolidated markup will be exported.
Parameters format Ex. “PDF” for PDF format.
Parameters UPI Set to “0”. For future use.
Parameters paperSize Ex. “A4”
Parameters markupFlag “0” = burned in markup, “1” = native markup (PDF only)
Returns NA

### `exportFilePage`

Use this method to export a page or pages of currently active drawing or document to a supported export format like PDF.

**Syntax**

```javascript
RxCore.exportFile (consolidate, pagenum, ,format,UPI,paperSize,markupFlag)
```

**Parameters**

-   `consolidate`: Boolean if true only consolidated markup will be exported.
-   `pagenum`: Page number to export.
-   `format`: Ex. “PDF” for PDF format.
-   `UPI`: Set to “0”. For future use.
-   `paperSize`: Ex. “A4”
-   `markupFlag`: “0” = burned in markup, “1” = native markup (PDF only)

Returns NA

### `exportFileRaster`

Use this method to export currently active drawing or document to a supported export format like TIFF or PDF specifying that the output file should contain raster.

**Syntax**

```javascript
RxCore.exportFileRaster(consolidate, format, UPI, paperSize, markupFlag);
```

**Parameters**

-   `consolidate`: Boolean if true only consolidated markup will be exported.
-   `format`: Ex. “PDF” for PDF format.
-   `UPI`: Set to “0”. For future use.
-   `paperSize`: Ex. “A4”
-   `markupFlag`: “0” = burned in markup, “1” = native markup (PDF only)

Returns NA

### `exportFilePrintPDF`

Use this method to export currently active drawing or document to PDF to use for printing.

Returns NA

**Syntax**

```javascript
RxCore.exportFilePrintPDF(szPapersize);
```

**Parameters**

-   `paperSize`: Ex. “A4”

### `exportPDF`

Use this method to export currently active drawing or document to PDF.

**Syntax**

```javascript
RxCore.exportPDF();
```

**Parameters** None

Returns NA

### `exportSettings`

Used for setting export options. Currently only used to set if all markup or only the markup of current user is included with the export.

Returns NA

**Syntax**

```javascript
RxCore.exportSettings(settings);
```

**Parameters**

-   `settings`: Object.

**Example**

```javascript
Settings {
includeAllMarkup : true/false
};
```

### `fileInfoDialog`

Opens a dialog containing information about the currently open document or drawing.

Returns NA

**Syntax**

```javascript
RxCore.fileInfoDialog();
```

**Parameters** None

### `fileSelected`

Used in combination with a file input field onchange event. If a file input field is added to the html framework, this can be used to upload files to the server. When this function is called the file information from the input field will be used to post a file to the server.

Returns NA

**Syntax**

```javascript
RxCore.fileSelected();
```

**Parameters** None

### `findBlockByAttr`

Find a block in a vector file that has a matching attribute name and value.

Returns NA

**Syntax**

```javascript
RxCore.findBlockByAttr(attrname, attrvalue);
```

**Parameters**

-   `attrname`: Attribute name
-   `attrvalue`: Attribute value

### `findMarkUp`

Opens a dialog where a search expression can be entered. If a matching markup object with the search text is found, RxView360 will zoom in on that markup.

Returns NA

**Syntax**

```javascript
RxCore.findMarkUp();
```

**Parameters** None

### `forcepagesState`

Used with foxit integration to cause GUI_State callback event.

Returns NA

**Syntax**

```javascript
RxCore.forcepagesState(state);
```

**Parameters**

-   `state`: State object.

### `foxitcalibratepagemarkupEx`

Used with foxit integration to set the scale and position of Rasterex markup.

Returns NA

**Syntax**

```javascript
RxCore.foxitcalibratepagemarkupEx(pagepos, scale, pagenumber);
```

**Parameters**

-   `pagepos`: Page position object.
-   `scale`: Page scale returned from Foxit getScale() method that is a method on the page render object.
-   `pagenumber`: Page number (0 indexed page number)

### `foxitForceRedraw`

Used with foxit integration to force a redraw of the active PDF document.

Returns NA

**Syntax**

```javascript
RxCore.foxitForceRedraw();
```

**Parameters** None

### `freeLicense`

Call when closing web page to make sure the current license is released.

Returns NA

Syntax RxCore.freeLicense ()

```javascript
RxCore.freeLicense();
```

**Parameters** None

### `get2DVectorBlocks`

Returns an Array of Block objects from a vector file with blocks.

Syntax

```javascript
RxCore.get2DVectorBlocks();
```

**Parameters** None

Returns Block Array Array of block objects

Block = \{
`Index` = 'index of the block'
`name = 'block name'
state = ' current on/ off state'
defaultstate` = 'default on/off state'
`defaultcolor` = 'default block color'
`color` = 'current block color'
`overridecolor` = 'allow block color override true/false'
`selected` = ' block selected state true/false'
\};

### `get2DVectorfilterAttributes`

Returns an Array of vector block attributes from a vector file with blocks. You can use attributeMask to return a set of attributes based on a search expression.
Syntax RxCore. get2DVectorfilterAttributes()
Parameters None
Returns Block Array Array of attribute objects
var AttributeObject = \{
name : szatrrname,
value : szatrtvalue,
blockref : readstate.blockpart
\};

### `get3DFloorplanCanvas`

Activate this method using alignment data and a floor number to have a canvas returned in GUI_FloorplanCanvas callback. Use canvas to insert a floorplan plane into the 3D drawing using the create3DfloorplanfromCanvas method.
Syntax RxCore.get3dFloorplanCanvas(floornum, alignarray)
Parameters floornum Number index for the floor plan,
alignarray Array of alignment data created with a compare/overlay
Returns N/A GUI_FloorplanCanvas callback Returns canvas

### `get3DmodelcurFloor`

Get the current floor index from the currently active 3D model based on camera position.
Syntax RxCore.get3DmodelcurFloor()
Parameters None
Returns curfloor; Index of floor.

### `get3DmodelboxCenter`

Returns the center of an open 3D model
Syntax RxCore.get3DmodelboxCenter(targetdocindex)
Parameters targetdocindex Open files index for the 3D model
Returns boxCenter 3D vector with x, y and z values.

### `get3DResetView`

Returns an image of the 3D model initial view.
Syntax RxCore.get3DResetView()
Parameters none
Returns image base64 encoded image data.

### `get3DVectorBlocks`

Returns the meshes userData from a 3D model which allow operations on all meshes.
Syntax RxCore.get3DVectorBlocks ()
Parameters None
Returns Block Array Array of 3D block objects

### `get3DViewAttribute`

Returns an attribute key, value object from a 3D view by attribute name
Syntax RxCore.getViewAttribute,( szName, viewname)
Parameters Szname String attribute name
Parameters viewname String 3D view name
Returns Attribute Key name and value object

### `get3DViewAttributes`

Returns an array of all attribute key, value object from a 3D view by 3D view name
Syntax RxCore. get3DViewAttributes,(viewname)
Parameters viewname String 3D view name
Returns Attributes Array of key name and value objects

### `getActiveFileFloorlevel`

If a drawing is set up to be a 2D navigation floor plan for a 3D model this method will retrieve which floor level the drawing is set up for.
Syntax RxCore.getActiveFileFloorlevel()
Parameters None
Returns floorlevel object = floorindex : number index for the floor plan,
replaced : Boolean true = replaced, false = not replaced.

### `getAllPageDimensions`

Return an Array of page dimension objects for all pages in a document.
Syntax RxCore. getAllSelectedMarkup()
Parameters None
Returns pgdim Array Page dimensions object.

pgdim.x //page current x position
pgdim.y //page current y position
pgdim.w //page current width
pgdim.h //page current height
pgdim.origw // page original width
pgdim.origh //page original height
pgdim.scale //current display scale
pgdim.dpi //page DPI
pgdim.rotation //page current rotation

### `getAllSelectedMarkup`

Return an array of all markup objects that are currently selected. Multiple markups can be selected if this is turned on using RxCore.markupMultiselect(true)
Syntax RxCore. getAllSelectedMarkup()
Parameters None
Returns Markup Array Array of markup objects.

### `getBlockAttributes`

Returns an Array of Attributes for a block specified by blockid.

**Syntax**

```javascript
RxCore.getBlockAttributes(blockid);
```

**Parameters**

blockid ID of block.

Returns Attribute Array Array of Atttribute objects

```javascript
Attribute = {
name : 'Attribute name
value : 'Attribute value
blockref : 'Block reference
}
```

### `getBookMarkPage`

Returns the page number matching the outline destination object reference.

**Syntax**

```javascript
RxCore.getBookMarkPage(destref);
```

**Parameters**

-   `destref`: A destref object extracted from a PDF outline object returned by the RxCore.GUI_PDFBookmarks callback.

Returns Page number 0 referenced page number of the PDF document.

### `getCacheURL`

Returns the URL of the cache folder of the currently active document.

**Syntax**

```javascript
RxCore.getCacheURL();
```

**Parameters** None

Returns URL URL of the cache folder where the currently active document is located on the server.

### `getCameraimage`

Returns a thumbnail image of a 3D model view.by name.

Syntax RxCore.getCameraimage(name)
Parameters name Name of 3D view
Returns Image base64 encoded image data.

### `getCameraView`

Returns a 3D view object by name.

**Syntax**

```javascript
RxCore.getCameraView(name);
```

**Parameters**

-   `Name`: Name of 3D view

Returns 3D view object

```javascript
var camobj = {
position: //position of the view
name: //name of the view
tool: //walkthrough or orbit.
explodefactor : //explode factor,
clipping : //clipping if any
thumbnail: //thumbnail image
width: //width of the view
height: //height of the view
image: //full image of the view
selectedmesharray :// the 3D mesh
attributes : //any associated attributes
};
```

**Example**

```javascript
//get the view full image
var dlgimage = RxCore.getCameraView(viewname).image;
```

### `getCamNavPosition`

When clicking with the mouse in a 2D drawing set up as a 3D navigation page this method is used in combination with GUI_3DNavPosition callback event to transfer mouse coordinates to move the camera in the 3D model to the corresponding location using moveTo3DNavPos method.

**Syntax**

```javascript
RxCore.getCamNavPosition(targetdocindex, pagenum, modelinfo, mousePos);
```

**Parameters**

-   `targetdocindex`: Open files index
-   `pagenum`: Page index
-   `Modelinfo`: Modelinfo object consists of model measure unit and model box centre.
-   `mousePos`: Mouse position.

Returns Campos Camera position.

### `getCanvasContextMenuEvent`

Enables a callback RxCore.GUI_ContextMenuEvt that can be used to implement a context menu for right click in the display section canvas of the viewer.

**Syntax**

```javascript
RxCore.getCanvasContextMenuEvent();
```

**Parameters** None

Returns N/A

### `getCanvasSize`

Returns the canvas width and height.

**Syntax**

```javascript
RxCore.getCanvasSize();
```

**Parameters** None

Returns w and h Width and height of canvas in pixels.

### `getColor`

Returns the currently active markup color..

**Syntax**

```javascript
RxCore.getColor();
```

**Parameters** None

Returns markupcolor A color object using html notation.

### `getCompareColors`

Returns the current Compare overlay and background colors.

**Syntax**

```javascript
RxCore.getCompareColors();
```

**Parameters** None

Returns comparecolors

```javascript
var comparecolors = {
	bg: overlayBGColor,
	fg: overlayFGColor,
};
```

### `getcurPage`

Returns the page number of the currently active page in a multipage document

**Syntax**

```javascript
RxCore.getcurPage();
```

Parameters None
Returns curpage Number of currently active page.

2.126 getDisplayName
Returns a string containing the User Displayname for the given signature.
Syntax RxCore.getDisplayName (sign)
Parameters sign User signature
Returns Displayname Display name for the user.

2.127 getdivcontainer
Used for foxit integration to control where foxit iframe is located. Returns a div used by RxView360 to hold the foxit Iframe
Syntax RxCore. getdivcontainer ()
Parameters none
Returns Html element Div

2.128 getDocFileName
Returns the name of the currently open drawing or document.
Syntax RxCore. getDocFileName ()
Parameters None
Returns szFilename A string with the value of the file name or 'empty’ if no files are open.

2.129 getdocInfo
Returns an object with properties of the currently active drawing or document.
Syntax RxCore.getdocInfo ()
Parameters None
Returns docinfo An object with the following properties
iscompare : Boolean,
isPDF : Boolean,
is3D : Boolean,
is2D : Boolean,
numpages: number,
currentpage:number

2.130 getDocRect
Used in combination with GUI_PrintRect callback. The callback Returns a rectangle in document units that can be added to the paperSize object that is included with the RxCore.printSizeEx method. Allows a selection to be printed instead of the whole page.
Syntax RxCore. getDocRect (selected)
Parameters Selected If true the method is activated if false the default input tool is used.
Returns N/A

2.131 getFillColor
Returns the currently active markup fill color.
Syntax RxCore. getFillColor()
Parameters None
Returns markupcolor A color object using html notation.

2.132 getFillStyle
Returns the currently active markup fill style.
Syntax RxCore.getFillStyle ()
Parameters None
Returns Fillstyle Number of fill style.

2.133 getFixedScale
Returns the fixed markup draw scale for the currently active document or drawing. The fixed scale is used to make sure that markup line widths and font sizes are independent of the current zoom factor.
Syntax RxCore.getFixedScale()
Parameters None
Returns Scale Scale that is used to draw markup in 1:1.

2.134 getfloorplanDocs
GUI_floorlevel callback event Returns a floor elevation object. This can be used with this method to find an open drawing being used as 2D navigation page for a floor in a 3D model.
Syntax RxCore.getfloorplanDocs(floorelevationobj)
Parameters floorelevationobj floorindex : num – Floor index from 3D model for current camera position.
Returns Page list Array of pages connected to the elevation. Empty if none.

2.135 getFloorplanList
Returns a list of floorplan objects. Used to get elevation and floorplan images from a 3D model.
Syntax RxCore.getFloorplanList(fileindex)
Parameters fileindex Open file Index
Returns floorplans Array of floorplan objects
2.136 getFont
Returns the currently active markup font.
Syntax RxCore.getFont ()
Parameters None
Returns fontstyle String indicating current font.

### `getFoxitIframeID`

Used with foxit integration to get the Iframe of currently activated foxit document. Used with
bringIframeToFront to display the document.

**Syntax**

```javascript
RxCore.getFoxitIframeID(index);
```

**Parameters**

-   `Index`: Active document index.

Returns name Name of Iframe element

### `getfoxitThumbnail`

Used with foxit integration to get thumbnail images for PDF pages.

**Syntax**

```javascript
RxCore.getfoxitThumbnail();
```

**Parameters** none

Returns N/A

### `getHatches`

Returns an array of available fill styles.

**Syntax**

```javascript
RxCore.getHatches();
```

**Parameters** none

Returns Array of fill style objects.

```javascript
Fillstyle = {
	type: "hatch",
	name: name,
	ptrn: HatchImage,
	tilesize: size,
	color: color,
	description: szdescript,
	inuse: false,
};
```

### `getLayout`

Returns an object with the properties width and height holding the values for the RxView360 canvas display area.

**Syntax**

```javascript
RxCore.getLayout();
```

**Parameters** None

Returns Layout object

```javascript
var defaultLayout = {
	offsetWidth: number,
	offsetHeight: number,
	absolute: boolean,
};
```

offsetWidth = If absolute is false this is the offset from the left of main document in pixels.

offsetHeight = If absolute is false this is the offset from the top of main document in pixels.

absolute = A Boolean value that when true allow the use of a div with absolute values and the width and height is the height and width of the div rather than the offset.

### `getLineColor`

Returns the currently active markup line color.

**Syntax**

```javascript
RxCore.getLineColor();
```

**Parameters** None

Returns `markupcolor`: A color object using html notation.

### `getLineWidth`

Returns the current markup line width.

**Syntax**

```javascript
RxCore.getLineWidth();
```

**Parameters** None

Returns `LineWidth`: Numeric value indicating line width.

### **getmarkupGUIDs**

Returns an array of all unique IDs of the loaded markups.

**Syntax**

```javascript
RxCore.getmarkupGUIDs();
```

**Parameters** None

Returns Guids Array of GUID strings

### `getMarkupLayers`

Returns a list of defined markup layers.

**Syntax**

```javascript
RxCore.getMarkupLayers();
```

**Parameters** None

Returns Array Array of Markup layer objects

### `getmarkupobjByGUID`

Returns a markup object based on Unique ID.

**Syntax**

```javascript
RxCore.getmarkupobjByGUID(GUID);
```

**Parameters**

-   `GUID`: Unique property uniqueID of a markup object.

Returns markupobject Markup Javascript object.

### `getMarkupSearchPadding`

Gets an internal variable that can be used with RxCore.markupTextSearch to control the markup zoom level.

**Syntax**

```javascript
RxCore.getMarkupSearchPadding();
```

**Parameters** none

Returns padding padding = \{x : int, y : int, w: int, h : int \}

**Example**

```javascript
Var padding = RxCore.getMarkupSearchPadding();
```

### `getMarkupXMLByGUID`

Returns an xml structure containing a markup element based on Unique ID.

**Syntax**

```javascript
RxCore.getMarkupXMLData(GUID);
```

**Parameters**

-   `GUID`: Unique property uniqueID of a markup object.

Returns `XML`: XML structure representing markups for Active document

### `getMarkupXMLData`

Returns an xml structure containing current markup elements.

**Syntax**

```javascript
RxCore.getMarkupXMLData();
```

**Parameters** None

Returns `XML`: XML structure representing markups for Active document

### `getMarkupXMLSelected`

Returns `xml`: an xml structure representing the currently selected markup element.

**Syntax**

```javascript
RxCore.getMarkupXMLSelected();
```

**Parameters** none

Returns `XML` XML structure representing a markup object.

### `getModelBox`

Returns the Box of the currently active 3D model.

**Syntax**

```javascript
RxCore.getModelBox();
```

**Parameters** None

Returns Model box THREE.Box3() object for the model

### `getModelCenter`

Returns the center of the currently active 3D model.

**Syntax**

```javascript
RxCore.getModelCenter();
```

**Parameters** None

**Returns**

Model center object unit : a number signifying the measurement unit,

`boxCenter` : 3D vector with x, y and z values.

### `getmodelUnit`

Returns the measurement unit of the currently active 3D model.

**Syntax**

```javascript
RxCore.getmodelUnit();
```

**Parameters** None

Returns Unit 0 = mm, 1 = meter, 2 = feet, 3= Inch, 4=cm

### `getNoteDiag`

Alternative reference to `GUI_Notediag` callback.

### `getnumSymbols`

Returns the number of available symbols for selected symbol library using `GUI_Symbols` callback event.

**Syntax**

```javascript
RxCore.getnumSymbols();
```

**Parameters**

-   `num`: Symbol library number

Returns N/A

### `getOpenFiles`

Returns the name of currently open files that is used for compare function.

**Syntax**

```javascript
RxCore.getOpenFiles();
```

**Parameters** None

Returns `OpenFileNames`: Array of Strings

### `getOpenFileList`

Returns list of open files.

**Syntax**

```javascript
RxCore.getOpenFileList();
```

**Parameters** None

Returns `openFilesList`: Array of objects with the current properties.

-`` Index`: index of the file,

-   `` name` : file name,
-   ``isActive `: true if currently the active file otherwise false,

### `getOriginalPath`

Returns the original URL or path for the currently active document.

**Syntax**

```javascript
RxCore.getOriginalPath();
```

**Parameters** None

Returns `OriginalURL`: Original URL or path of the currently active document.

### `getPageDimensions`

Returns a page dimensions object that holds the dimensions of a page given by 0 indexed page number.

**Syntax**

```javascript
RxCore.getPageDimensions(pagenumber);
```

**Parameters**

-   `pagenumber`: 0 indexed page number of page to get dimensions of.

Returns `pgdim`: Page dimensions object.

`pgdim.x`: page current x position
`pgdim.y`: page current y position
`pgdim.w`: page current width
`pgdim.h`: page current height
`pgdim.origw`: page original width
`pgdim.origh`: page original height
`pgdim.scale`: current display scale
`pgdim.dpi`: page DPI
`pgdim.rotation`: page current rotation

### `getPageRotation`

Returns current page rotation

**Syntax**

```javascript
RxCore.getPageRotation();
```

**Parameters** None

Returns `Rotation`: Rotation of current page in degrees

### `getPDFDocobj`

Returns PDF.js document object for active document if this is a PDF. This can be used to share one document object if you use multiple instances of the same file in different views created using `RxCoreMulti`

**Syntax**

```javascript
RxCore.getPDFDocobj();
```

**Parameters** None

Returns `pdfDoc`: PDF.js document object.

### `getPDFintialScale`

Used to get pdf scale used with foxit integration.

**Syntax**

```javascript
RxCore.getPDFintialScale(width, height);
```

Parameters width Page width

height Page height

Returns scale Display scale of PDF document.

### `getReadOnly`

Returns true if read only mode is on.
**Syntax**

```javascript
RxCore.getReadOnly();
```

Parameters None
Returns True/false

### `getSelectedMarkup`

Returns the currently selected markup object.
**Syntax**

```javascript
RxCore.getSelectedMarkup();
```

Parameters None
Returns Markup object

### `getSnapState`

Returns true if snap is on.
**Syntax**

```javascript
RxCore.getSnapState();
```

Parameters None
Returns True/false

### `getStoreyNames`

Returns the storey names of the currently active 3D model.
**Syntax**

```javascript
RxCore.getStoreyNames();
```

Parameters None
Returns Storeynames Array of Strings

### `getStoreyAttributes`

Return the attributes of a 3D model storey.
**Syntax**

```javascript
RxCore.getStoreyAttributes(storeyname);
```

Parameters storeyname String, the name of the storey.
Returns Attributes Array mesh object attributes

### `getStoreyAttributesEx`

Return specific attribute of a 3D model storey.
**Syntax**

```javascript
RxCore.getStoreyAttributesEx(storeyname, expr, useregexp);
```

Parameters storeyname String, the name of the storey
expr String, search expression
useregexp Boolean, true = use regexp, false = use string compare
Returns Attributes Array mesh object attributes

### `getStoreyIDs`

Returns the mesh IDs for a specific 3D model storey.
**Syntax**

```javascript
RxCore.getStoreyIDs(storeyname);
```

Parameters storeyname String, the name of the storey
Returns Meshids Array of strings that hold the mesh IDs for the storey.

### `getStoreyRealIDs`

Returns the mesh IDs including the mesh group suffix for a specific 3D model storey.
**Syntax**

```javascript
RxCore.getStoreyRealIDs(storeyname);
```

Parameters storeyname String, the name of the storey
Returns Meshids Array of strings that hold the mesh IDs for the storey.

### `getSymbolLibNum`

Returns the number of available symbol libraries from the server using GUI_Symbols callback event.
**Syntax**

```javascript
RxCore.getSymbolLibNum();
```

Parameters None
Returns N/A

### `getSymbolLibPNGData`

Returns CDATA image to use as a symbol using GUI_Symbols callback event.
**Syntax**

```javascript
RxCore.getSymbolLibNum(num, sname);
```

Parameters num Library number
Parameters sname Symbol number
Returns N/A

### `getSymbolName`

Returns symbol name from a symbol library using GUI_Symbols callback event.
**Syntax**

```javascript
RxCore.getSymbolName(num, sname);
```

Parameters num Library number
Parameters sname Symbol number
Returns N/A

### `getTextColor`

Returns the currently active markup text color.
**Syntax**

```javascript
RxCore.getTextColor();
```

Parameters None
Returns markupcolor A color object using html notation.

### `getTextRects`

Starts the search for matching texts and return the text rectangles in a callback.

**Syntax**

```javascript
 RxCore.getTextRects(string searchexpr, Boolean casesensitive);
```

**Parameters**

-   `Searchexpr`: The string to search for.
    Casesensitive If true search is case sensitive.

Returns N/A

**Example**

```javascript
RxCore.getTextRects(“Rasterex”, false);
```

//Returns all rectangles for word Rasterex regardless of case.
`Callbacks`: `RxCore.GUI_MathcesRectsPage`
`RxCore.GUI_NumMathcesRect`

### `getUser`

Cause GUI_Users callback to return user list.

**Syntax**

```javascript
RxCore.getUser();
```

**Parameters** None

Returns N/A

### `getUsers`

Returns a list of users associated with loaded markup.

**Syntax**

```javascript
RxCore.getUsers();
```

**Parameters** None

Returns `Array`: Array of User objects

### `gotoPage`

Sets a page as active page.

**Syntax**

```javascript
RxCore.gotoPage(pagenum);
```

**Parameters**

-   `pagenum`: Page number to set as active page

Returns NA

### `hidedisplayCanvas`

Hide/Display Rxview360 display canvas when switching to with foxit Iframe.

**Syntax**

```javascript
RxCore.hidedisplayCanvas(bhide);
```

**Parameters**

-   `bhide`: Boolean : true = hide, false = show

Returns NA

### `hideAllCanvas`

Hide/Display Rxview360 display canvases to allow direct access to foxit Iframe.

**Syntax**

```javascript
RxCore.hideAllCanvas(bhide);
```

**Parameters**

-   `bhide`: Boolean : true = hide, false = show

Returns NA

### `hideMarkUp`

Toggles the Hide/Display of markup.

**Syntax**

```javascript
RxCore.hideMarkUp();
```

**Parameters** None

Returns NA

### `hideLabels`

Toggles the Hide/Display of labels for area and length measurement markup.

**Syntax**

```javascript
RxCore.hideLabels(onoff);
```

**Parameters**

-   `onoff`: Boolean value . true = labels off, false = labels on.

Returns NA

### `hideTextInput`

Call to turn off visibility of input field used to create markup text.

**Syntax**

```javascript
RxCore.hideTextInput();
```

**Parameters** None

Returns NA

### `imperialUnit`

Set the Sub unit for Imperial measurement system that will affect measurement operations.

**Syntax**

```javascript
RxCore.imperialUnit(unit);
```

**Parameters**

-   `Unit`: Use 'Inch', 'Feet', 'Yard', 'Mile' or 'Nautical Miles'

Returns NA

### `importFDF`

FDF files containing PDF markup can be imported using this method.

**Syntax**

```javascript
RxCore.importFDF(szurl);
```

**Parameters**

-   `szurl`: The URL that references the FDF source.

Returns NA

### `insertPoint`

Sets the drawing operation for markup edit to insert a new point by selecting a line in a markup that has multiple points.

**Syntax**

```javascript
RxCore.insertPoint();
```

**Parameters** None

Returns NA

### `initFoxit`

Used from Foxit class event jrLicenseSuccess to let RxCore know Foxit is ready for use through the RxCore.GUI_FoxitReady callback.

**Syntax**

```javascript
RxCore.initFoxit();
```

**Parameters** None

Returns NA

### `initialize`

Call to set intitial canvas size based on web page content.

**Syntax**

```javascript
 RxCore. initialize (layout, divid,class);
```

**Parameters**

-   `Layout`: Object containing properties `offsetWidth` and `offsetHeight`. Values in pixels.
-   `divid`: Optional parameter assigning `RxView360` to a div by element id.
-   `class`: Optional parameter assigning a style sheet class to the div

Returns NA

### `instanceReset`

Call to reset the instance so that initialize can be called again.

**Syntax**

```javascript
RxCore.instanceReset();
```

**Parameters** None

Returns NA

### `keepvectorColor`

Toggles the keep vector color flag. If on, white on black or black on white drawing colors are not automatically inverted but fixed to the defined color.

**Syntax**

```javascript
RxCore.keepvectorColor(onoff);
```

**Parameters**

-   `onoff`: Boolean value. true = on, false = off.

Returns NA

### `loadIFCSpaces`

By default IFC space objects are not loaded but can be loaded later using this method.

**Syntax**

```javascript
RxCore.loadIFCSpaces();
```

**Parameters** None

Returns NA

### `loadThumbnail`

Used to load single thumbnail by page index. Works on active document. Thumbnail is returned with GUI_pagethumb callback event.

**Syntax**

```javascript
RxCore.loadThumbnail(pageindex);
```

**Parameters**

-   `pageindex`: 0 indexed page index

Returns NA

### `lockMarkup`

Use this method to lock the markup in place. The markup cannot be moved and scaled until you unlock it.

**Syntax**

```javascript
RxCore.lockMarkup(onoff);
```

**Parameters**

-   `onoff:` Boolean value. true = on, false = off.

Returns NA

### `lockMarkupbyGUID`

Use this method to lock a specific markup in place based on unique GUID. The markup cannot be moved and scaled until you unlock it.

**Syntax**

```javascript
RxCore.lockMarkupbyGUID(GUID, onoff);
```

**Parameters**

-   `GUID`: Unique property uniqueID of a markup object.
-   `onoff`: Boolean value. true = on, false = off.

Returns NA

### `magnifyGlass`

Use this method to turn on/off the magnifying tool. This enables the user to magnify an area of the drawing by dragging a magnify window over the area.

**Syntax**

```javascript
RxCore.magnifyGlass(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markupAddBlockText`

Adds a text markup to block in a vector file.

**Syntax**

```javascript
RxCore.markupAddBlockText(BlockId, height, text, color);
```

**Parameters**

-   `BlockId`: Block ID to add text to.
-   `height`: Height of text in mm
-   `text`: Text of the markup text
-   `color`: Markup text color.

Returns NA

### `markupAddMulti`

Set to allow adding multiple annotations and disables the callback that automatically selects newly added markup.

**Syntax**

```javascript
RxCore.markupAddMulti(onoff);
```

**Parameters**

-   `Onoff`: Boolean value. true = on, false = off.

Returns NA

### `markUpArea`

Use this method to turn on/off the markup area tool. This enables the user to draw a markup area on the currently open drawing, using the mouse.

**Syntax**

```javascript
RxCore.markUpArea(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpArrow`

Use this method to turn on/off the markup arrow tool. This enables the user to draw a markup arrow of the given type using the mouse.

**Syntax**

```javascript
RxCore.markUpArrow(selected, type);
```

**Parameters**

-   `selected`: Boolean value. true = on, false = off.
-   `type`: Type of arrow 0=single open, 1=single filled, 2=double open, 3=double filled.

Returns NA

### `markupButton`

Activates the symbol markup tool but adding the symbol to be used as a button.

**Syntax**

```javascript
RxCore.markupButton(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markupButtonFromMatch`

Can be used in combination with RxCore.getTextRects() text search to create a markup button at a position returned in the RxCore.GUI_NumMathcesRect callback.

**Syntax**

```javascript
RxCore.markupButtonFromMatch(rectanle, pagenumber, image, padding);
```

**Parameters**

-   `rectangle` Rectangle object. = \{
    `x` : // rectangle left,
    `y` : //retanglle top
    `w` : //rectangle width,
    `h` : //rectangle height,
    `pagenum` : //0 indexed page number,
    `pageheight` : //page height
    \};

-   `pagenumber`: Number – pagenumber
-   `image`: Image object= \{
    `src`: html image source
    `width`: image width
    `height`: image height
    `orgwidth`: original image width
    `orgheight`: original image height
    \};
-   `padding`: Padding object = \{left : 0, top : 10, right : 0, bottom : 0\};

Returns `<promise>`: Promise that can be used to set button action.

**Example**

```javascript
RxCore.markupButtonFromMatch(rects[ri], pagenumber, singbuttondrop, padding)
	.then(function (buttonobj) {
		buttonobj.AddAttribute("CustomAction", "SetSignature");
		buttonobj.AddAttribute("Signature", "Frank Tveter");
		buttonobj.setLink("ButtonAction", true);
	})
	.catch(function (error) {
		console.log(error);
	});
```

### `markupChanged`

Returns true if any markup has been changed.

**Syntax**

```javascript
RxCore.markupChanged();
```

**Parameters** None

Returns `Boolean`: True = markup has changed.

### `markupCircle`

Use this method to turn on/off the markup circle tool. This enables the user to draw a markup circle.

**Syntax**

```javascript
RxCore.markupCircle(selected);
```

**Parameters**

-   `selected`: Boolean value. true = on, false = off.

Returns NA

### `markupCount`

Use this method to turn on/off the markup count tool. This enables the user to count objects using the markup counter.

Syntax RxCore.markupCircle (selected, shape)

**Parameters**

-   `selected`: Boolean value. true = on, false = off.
-   `shape`: Number corresponding to a counter shape,0=Circle, 1=Square, 2=Triangle, 3=Diamond, 4=Star, 5=Cross, 6=Checkmark, 7=Diagonal Cross.

Returns NA

### `markUpDimension`

Use this method to turn on/off the markup dimension tool. This enables the user to draw a markup dimension line of the given type using the mouse.

**Syntax**

```javascript
RxCore.markUpDimension(selected, type);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.
-   `Type`: Type of dimension line 0=bar end points, 1=bar and arrow end points.

Returns NA

### `markupDisplay`

Turns the visibility of currently selected markup on/off

**Syntax**

```javascript
RxCore.markupDisplay(onoff);
```

**Parameters**

-   `Onoff`: Boolean value. true = on, false = off.

Returns NA

### `markUpErase`

Use this method to turn on/off the markup eraser tool. This enables the user to redact drawing information with the current background color using the mouse.

**Syntax**

```javascript
RxCore.markUpErase(selected);
```

**Parameters**

-   Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpFilled`

Set Markup fill style to filled to Draw markup objects with filled with current markup color. Also changes selected markup entities to use this fill type.

**Syntax**

```javascript
RxCore.markUpFilled();
```

**Parameters** None

Returns NA

### `markUpFreePen`

Use this method to turn on/off the markup free pen tool. This enables the user to free hand draw with the current background color using the mouse.

**Syntax**

```javascript
RxCore.markUpFreePen(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpHighlight`

Use this method to turn on/off the markup highlight tool. This enables the user to highlight sections of the drawing with a transparent color using the mouse.

**Syntax**

```javascript
RxCore.markUpHighlight(selected);
```

**Parameters**

-   `Selected` Boolean value. true = on, false = off.

Returns NA

### `markuphoverevent`

Use this method to enable disable the GUI_MarkupHover callback for markup mouse over event. This can be used in the UI to display information about a markup when the mouse is moved over it.

**Syntax**

```javascript
RxCore.markuphoverevent(onoff);
```

**Parameters**

-   `onoff`: Boolean - If false the callback is disabled if true enabled.

Returns NA

### `markUpLayerDialog`

Opens a dialog containing a list of markup layers and their visibility state and the current active markup layer. Allows the user to turn the visibility of markup layers on/off if the user is allowed to do this.

**Syntax**

```javascript
RxCore.markUpLayerDialog();
```

**Parameters** None

Returns NA

### `markupLine`

Use this method to turn on/off the markup line tool. This enables the user to draw a markup line.

**Syntax**

```javascript
RxCore.markupLine(selected);
```

**Parameters**

-   `selected`: Boolean value. true = on, false = off.

Returns NA

### `markupLinkRect`

Creates a markup with a link given a text rectangle from callbacks `RxCore.GUI_MathcesRectsPage` or `RxCore.GUI_NumMathcesRect`

**Syntax**

```javascript
RxCore.markupLinkRect(Boolean usemarker, object rectangle, int page, string linkurl, object padding);
```

**Parameters**

-   `usemarker`: If true a marker rectangle is created, if false an outline rectangle is created.
-   `rectangle`: Rect = \{x : int, y : int, w : int, h : int\}, The start point in x and y and the height and width of the rectangle.
-   `Page`: Number indicating the 0 indexed page number for the markup.
-   `linkurl`: String indicating the link target.
-   `Padding`: (optional), padding = \{top : int, left : int, right : int, bottom : int\},Increases the size of the markup relative to the rectangle

    `rect.x` - padding.left;
    `rect.y` - padding.top;
    `rect.w` + padding.right;
    `rect.h` + padding.bottom;

Returns N/A

**Example**

```javascript
function onGetMatches(rects, currentpage) {
	var padding = { left: 5, top: 5, right: 15, bottom: 15 };
	if (rects.length > 0) {
		for (var ri = 0; ri < rects.length; ri++) {
			RxCore.markupLinkRect(
				true,
				rects[ri],
				currentpage,
				"https://www.rasterex.com/",
				padding
			);
		} //end for
	} // end if
} //end function
```

**Callbacks** `RxCore.GUI_MathcesRectsPage` , `RxCore.GUI_NumMathcesRect`

### `markupMeasurePath`

Use this method to turn on/off the markup measure path tool. This enables the user to add a measure path that is a poly line that has a label containing the accumulated length of all the lines.

**Syntax**

```javascript
RxCore.markupMeasurePath(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markupMultiselect`

Use this method to turn on and off the ability to select multiple markup objects.

**Syntax**

```javascript
RxCore.markupMultiselect(onOff);
```

**Parameters**

-   `onOff`: Boolean value. true = on, false = off.

Returns NA

### `markUpNote`

Use this method to turn on/off the markup note tool. This enables the user to add a note that the where the user can add a longer text in a note dialog and display this text later by clicking the note markup object in the drawing using the mouse.

**Syntax**

```javascript
RxCore.markUpNote(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpOutlined`

Set Markup fill style to Outlined to Draw markup objects with lines and no fill.

**Syntax**

```javascript
RxCore.MarkupOutlined();
```

**Parameters** None

Returns NA

### `markUpPolyline`

Use this method to turn on/off the markup polyline tool. This enables the user to add a polyline markup to the current drawing using the mouse.

**Syntax**

```javascript
RxCore.markUpPolyline(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpRedraw`

Forces a redraw of all markup.

**Syntax**

```javascript
RxCore.markUpRedraw();
```

**Parameters** None

Returns NA

### `markUpRedo`

Used in combination with markUpUndo to redo operations undone with `markUpUndo`

**Syntax**

```javascript
RxCore.markUpRedo();
```

**Parameters** None

Returns NA

### `markUpRotate`

Use this method to set the rotation of a markup object in degrees.

**Syntax**

```javascript
RxCore.markUpRotate(degrees);
```

**Parameters**

-   `Degrees`: Degree of rotation negative 180 – positive 180

Returns NA

### `markUpSave`

Use this method to save markup to server.

**Syntax**

```javascript
RxCore.markUpSave();
```

**Parameters** None

Returns NA

### `markupSaveCheck`

Disables the unsaved markup warning shown when closing a file.

**Syntax**

```javascript
RxCore.markupSaveCheck(OnOff);
```

**Parameters**

-   `OnOff`: Boolean true = on, false = off.

Returns NA

### `markUpShape`

Use this method to turn on/off the markup shape tool. This enables the user to add a markup shape of a given type and subtype using the mouse.

**Syntax**

```javascript
RxCore.markUpShape(selected, type, subtype);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.
-   `type`: Markup shape type. 0=rectangle, 1=ellipse, 2=cloud, 3=polygon,
-   `subtype`: 1=rounded rectangle (works with type 0 only)

Returns NA

### `markUpStamp`

Use this method to add a markup stamp to the current drawing.

**Syntax**

```javascript
RxCore.markUpStamp(Text);
```

**Parameters**

-   `Text`: Stamp text

Returns NA

### `markupSymbol`

Activates the symbol markup tool.

**Syntax**

```javascript
RxCore.markupSymbol(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpSubType`

Use this method to change the subtype of the selected markup object.

**Syntax**

RxCore.markUpSubType (num)

**Parameters**

-   `num`: Subtype number

Returns NA

### `markUpTextRect`

Use this method to turn on/off the markup text tool. This enables the user to add a text markup to the current drawing using the mouse.

**Syntax**

```javascript
RxCore.markUpTextRect(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markUpTextRectArrow`

Use this method to turn on/off the markup text with leader line tool. This enables the user to add a text markup with leader line to the current drawing using the mouse.

**Syntax**

```javascript
RxCore.markUpTextRectArrow(selected);
```

**Parameters**

-   `Selected`: Boolean value. true = on, false = off.

Returns NA

### `markupTextSearch`

Starts a search for markup texts using a search expression. Terminate search using endMarkupTextSearch

**Syntax**

```javascript
RxCore.markupTextSearch(text, direction, casesensitive);
```

**Parameters**

-   `text`: The text to search for.
-   `direction`: Boolean value. true = forward, false = backward.
-   `casesensitive`: Boolean value. true = case sensitive search, false = case insensitive search.

Returns NA

### `markUpUndo`

Use this method to Undo last markup operation.

**Syntax**

```javascript
RxCore.markUpUndo();
```

Parameters None
Returns NA

### `markUpUserDialog`

Opens a dialog containing a list of markup users and the visibility state of the markup fore each user. The dialog allow the user to turn the visibility of markup for a specific user if the user is allowed to do this. If allowed the user can also set the markup signature using this dialog.

**Syntax**

```javascript
RxCore.markUpUserDialog();
```

Parameters None
Returns NA

### `measure`

Activates the measure tool. Measure tool allow the user to measure distances area and angles using a polygon.

**Syntax**

```javascript
RxCore.measure(selected);
```

Parameters selected Boolean turning the tool on/off
Returns NA

### `measure3D`

Activates the 3D measure tool to measure a distance between 2 points in a 3D model.

**Syntax**

```javascript
RxCore.measure3D(selected);
```

Parameters selected Boolean turning the tool on/off
Returns NA

### `measuredistance`

Activates the measure distance tool. Measure distance tool allow the user to measure the distance between two points.

**Syntax**

```javascript
RxCore.measuredistance(selected);
```

Parameters selected Boolean turning the tool on/off
Returns NA

### `metricUnit`

Use this method to set the sub measure unit for the metric measurement system

**Syntax**

```javascript
RxCore_MetricUnit(unit);
```

**Parameters**

-   `unit`: Type string Select between. 'Millimeter’,, 'Centimeter', 'Decimeter', 'Meter', 'Kilometer' or 'Nautical Miles'.

Returns NA

### `modifyMarkup`

Modifies markup given by a unique ID using xml data to change the markup.

**Syntax**

```javascript
RxCore modifyMarkup (GUID, markupxml)
```

**Parameters**

-   `GUID`: Unique property uniqueID of a markup object.
-   `markupxml`: Text string representing xml data that correspond to RxView360 markup format.

Returns NA

### `moveLabelEnable`

Turn on/off the ability to select and move markup labels.

**Syntax**

```javascript
RxCore.moveLabelEnable(onOff);
```

Parameters

-   `onOff`: Boolean : true = on, false : off

Returns NA

### `moveTo3DNavPos`

Used in combination with the GUI_3DNavPosition callback event.
When clicking on a 2D drawing set up a as navigation page for a 3D model this method will move the camera to the location in the 3D model based on the position selected in the 2D drawing.

**Syntax**

```javascript
RxCore.moveTo3DNavPos(campos);
```

Parameters campos Object = \{x, y, z\} x, y and z position of selected coordinate.
Calculated position returned from the GUI_3DNavPosition callback event.
Returns NA

### `moveTo3DPart`

Calling this method will move the camera in the 3D model to point at the currently selected 3D part.

**Syntax**

```javascript
RxCore.moveTo3DPart();
```

Parameters None
Returns NA

### `navigateBookmark`

Causes navigation to a PDF bookmark

**Syntax**

```javascript
RxCore.navigateBookmark(bookmark);
```

**Parameters**

-   `bookmark`: Bookmark object from Foxit bookmark list.

Returns NA

### `nav3Dreplacediag`

Same functionality as RxCore.compareDialog but uses a different callback called GUI_Nav3DreplaceDiag. The callback Returns a list of files that can be used to create a compare overlay. This is to be used to match drawings with 3D model generic floorplan to replace as 2D navigation drawing.

**Syntax**

```javascript
RxCore.nav3Dreplacediag();
```

Parameters none
Returns NA

### `nextMarkup`

Use this method to cycle through and zoom into markup entities.

**Syntax**

```javascript
RxCore.nextMarkup();
```

Parameters None
Returns NA

### `nextPage`

Use this method to display next page in a multipage document.

**Syntax**

```javascript
RxCore.nextPage();
```

Parameters None
Returns NA

### `noteFocus`

Use to prevent markup from being deleted by hitting delete when editing note text.

**Syntax**

```javascript
RxCore.noteFocus(onOff);
```

Parameters OnOff Boolean that turn the notefocus on/off
Returns NA

### `onTextPlaced`

Alternative reference to GUI_Textdiag callback.

### `open3DFloorplanPage`

Open a file to be used as 2D navigation for a 3D model. Uses GUI_floorLoadComplete callback instead of the GUI_loadComplete callback.

**Syntax**

```javascript
RxCore.open3DFloorplanPage(fileurl, floorindex);
```

Parameters fileurl String - URL address of the drawing.
Parameters floorindex Integer – index of the associated floor.
Returns NA

### `openFile`

Use this method to open a file using a URL or server-side windows path.

**Syntax**

```javascript
RxCore.openFile(fileurl);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.

This can be either a string or an object with the following properties.

fileurlobj.filepath = A string containing URL or path of file to open.

fileurlobj.mime = A string containing mime type for the type of file to open or null. See appendix C for list of mime types.

fileurlobj.cacheid = A string containing a unique name to use for cache entry or null.

fileurlobj.displayname = A string that is used as the document file name or null.
Returns NA

### `openFileCustom`

Use this method to open a file using a URL to a web folder containing web content files for client display.

**Syntax**

```javascript
RxCore.openFileCustom(fileurl);
```

Parameters fileurl URL address to a web folder that contains web content.
Returns NA

### `openFileLayouts`

Opens a CAD drawing limited to a specified Layout range.

**Syntax**

```javascript
RxCore.openFileLayouts(fileurl, layouts);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.
Parameters layouts Array of layout numbers to open.
Returns NA

### `openFileLayoutsEx`

Opens a CAD drawing limited to a specified Layout range same as openFileLayouts except that if the opening fails the GUI_Download callback is triggered which allow UI download progress to be hidden.

**Syntax**

```javascript
RxCore.openFileLayoutsEx(fileurl, layouts);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.
Parameters layouts Array of layout numbers to open.
Returns NA

### `openFilePages`

Opens a document limited to a specified page range. This does not work for PDF as the Foxit library always load all pages in a document,

**Syntax**

```javascript
RxCore.openFilePages(fileurl, pages);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.
Parameters pages Array of page numbers to open.
Returns NA

### `openFileSilent`

Use this method to open a file using a URL or server-side windows path but without making the file the active file if other files are already open.

**Syntax**

```javascript
RxCore.openFileSilent(fileurl);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.
Returns NA

### `openFloorplanFile`

Opens a generic floorplan from a 3D model as a separate drawing.

**Syntax**

```javascript
RxCore.openFloorplanFile(fileindex, floornum);
```

Parameters fileindex Number : Open file index.
floornum Number : Floor index.
Returns NA

### `openMarkup`

Use this method to open a markup rxml file to use with the currently active file

**Syntax**

```javascript
RxCore.openMarkup(fileurl);
```

Parameters fileurl URL address or full server-side windows path to an rxml file to open.
Returns NA

### `openRecent`

Use this method to open a file from a recent file list using a URL or server-side windows path.

**Syntax**

```javascript
RxCore.openRecent(fileurl);
```

Parameters fileurl URL address or full server-side windows path to a file to open in the viewer.
Returns NA

### `orbit3D`

Use this method to “Orbit” a currently open 3D model.

**Syntax**

```javascript
RxCore.orbit3D();
```

Parameters None
Returns NA

### `overlay`

Used in combination with RxCore.compareDialog to create an overlay from two open files. Works the same as compare but keeps original colors.

**Syntax**

```javascript
RxCore.overlay(okcancel);
```

Parameters okcancel Boolean that has to be true for the compare to be created.
Returns NA

### `overlayFiles`

Open two files and create a overlay. Works the same way as compareFiles but uses the original colors.

**Syntax**

```javascript
RxCore.overlayFiles(filebackground, fileoverlay);
```

Parameters filebackground URL of file to use as background
fileoverlay URL of file to overlay
Returns NA

### `pageLock`

Lock pages in current document. Used with multiple instances of RxCore object where scale and offset of two pages should be locked together.

**Syntax**

```javascript
RxCore.pageLock(onoff);
```

Parameters

-   `OnOff`: true = on, false = off.

Returns NA

### `pageOnlyMarkup`

Limits the markup array for markuplist to only markup on the current page.

**Syntax**

```javascript
RxCore.pageOnlyMarkup(toggle);
```

**Parameters**

-   `toggle`: if true the page only listing is toggled on/off if false it will be turned on regardless of current state.

Returns NA

### `pagePos`

Moves current page to a specified position based on the given point in screen coordinates.

**Syntax**

```javascript
RxCore.pagePos(x, y);
```

**Parameters**

-   `X`: Horizontal position of page
-   `Y`: Vertical position of page

Returns NA

### `panPage`

Used in combination with `GUI_PanUpdate` callback event and pageLock to synchronize offset of pages into different instances of `Rxcore`. Moves the offset of current page given by x, y values.

**Syntax**

```javascript
RxCore.panPage(x, y);
```

**Parameters**

-   `X`: Horizontal position of page
-   `Y`: Vertical position of page

Returns NA

### `panWindow`

Use to pan the current drawing or document using the mouse input.

**Syntax**

```javascript
RxCore.panWindow();
```

**Parameters** none

Returns NA

### `pasteMarkUp`

Use this method to paste a previously copied markup entity into the currently active drawing or document.

**Syntax**

```javascript
RxCore.pasteMarkUp();
```

**Parameters** None

Returns NA

### `pickPolygon`

Use this method to pick a Block in a vector drawing that has selectable blocks. A callback event is called set up GUI_2DBlockID with a callback function to get the block id(s).

**Syntax**

```javascript
RxCore.pickPolygon(selected, multi);
```

**Parameters**

-   `selected`: True / false to turn method on / off.
-   `Multi`: True = allow selection of multiple blocks.

Returns NA

### `pickRxSpace`

Use this method to pick a Rasterex space object. Set up `GUI_2DBlockID` with a callback function to get the block id(s).

**Syntax**

```javascript
RxCore.pickRxSpace(selected, multi);
```

**Parameters**

-   `selected`: True / false to turn method on / off.
-   `Multi`: True = allow selection of multiple blocks.

Returns NA

### `prevPage`

Use this method to display previous page in a multipage document.

**Syntax**

```javascript
RxCore.prevPage();
```

**Parameters** None

Returns NA

### `print`

Use this method to print currently active drawing or document on a available windows printer.

**Syntax**

```javascript
RxCore.print();
```

**Parameters** None

Returns NA

### `printEx`

Same as `RxCore_Printdocument` but takes a parameter to select the html page to be used for printing.

**Syntax**

```javascript
RXCore.printEx(PrintPgURL);
```

**Parameters**

-   `PrintPgURL`: URL to an html page that is used to print content from Rxview360.
    Returns NA

### `printSizeEx`

Same as `RxCorePrintEx` but takes an additional parameter to specify the paper size in mm.

**Syntax**

```javascript
RXCore.printSizeEx(PrintPgURL, PaperSize);
```

**Parameters**

-   `PrintPgURL`: URL to an html page that is used to print content from `Rxview360`.
-   `PaperSize`: PaperSize =\{width: number, height : number \}
    Use values in mm.

Returns NA

### `redrawPage`

Forces a redraw of a page given by page number.

**Syntax**

```javascript
RxCore.redrawPage(pagenumber);
```

Parameters pagenumber 0 indexed page number.
Returns NA

### `removeFloorplan`

Removes a 2D floorplan plane from the 3D model

**Syntax**

```javascript
RxCore.removeFloorplan(floornum);
```

Parameters floornum Index of floor.
Returns NA

### `removeLastPoint`

Removes the last point if a markup drawing operation is active that involves annotations that has multiple points.

**Syntax**

```javascript
RxCore.removeLastPoint();
```

Parameters none
Returns NA

### `renderBirdseye`

Renders the current page to the birdseye overview window.

**Syntax**

```javascript
RxCore.renderBirdseye();
```

Parameters none
Returns NA

### `replacefloorplan`

Use to replace generic floorplan used in Bird’s eye view for navigation with one generated from a separate open drawing.

**Syntax**

```javascript
RxCore.replacefloorplan(sourceindex, targetdocindex, floornum);
```

Parameters

-   `Sourceindex`: Open file index to use as source for replacement thumbnail.
-   `Targetdocindex`: Open file index for the 3D model.
-   `Floornum`: Floor index indicating the floor.

Returns NA

### `replacefloorplanfromPage`

Use to replace generic floorplan used in Bird’s eye view for navigation with one generated from the currently active page.

**Syntax**

```javascript
RxCore.replacefloorplan(targetdocindex, floornum);
```

**Parameters**

-   `targetdocindex`: Open file index for the 3D model.
-   `Floornum`: Floor index indicating the floor.

Returns NA

### `reset3DModel`

Use this method to reset a 3D model to its initial display state.

**Syntax**

```javascript
RxCore.reset3DModel();
```

**Parameters** None

Returns NA

### `resetBlocks`

Use this method to reset all blocks for a 2D drawing to its initial on/off state.

**Syntax**

```javascript
RxCore.resetBlocks();
```

**Parameters** None

Returns NA

### `restoreBlockStates`

Restore the drawing color for all blocks in vector file.

**Syntax**

```javascript
RxCore.restoreBlockStates();
```

**Parameters** None

Returns NA

### `restoreCameraByName`

Activate existing 3D view by name.

**Syntax**

```javascript
RxCore.restoreCameraByName(name);
```

**Parameters**

-   `Name`: name of 3D view to activate (String)

Returns NA

### `restoreDefault`

Set the Viewer to use the default input state. Default will enable mouse control to pan a 2D drawing using left mouse button, Zoom using scroll wheel. For touch devices this will enable zoom and pan using two touch points. For 3D files on touch point will rotate model and two will zoom and pan.

**Syntax**

```javascript
RxCore.restoreDefault();
```

**Parameters** None

Returns NA

### `restoreMouseInput`

If the drawing of a markup is overridden using applyWidthHeight or applyAngleLength this method will restore mouse input.

**Syntax**

```javascript
RxCore.restoreMouseInput();
```

**Parameters** none

Returns NA

### `resetLayers`

Use this method to reset all layers for a 2D drawing to its initial on/off state.

**Syntax**

```javascript
RxCore_resetLayers();
```

**Parameters** None

Returns NA

### `reverseNavMouse`

Reverses the direction of the mouse when using the walkthrough mode.

**Syntax**

```javascript
RxCore.reverseNavMouse(onoff);
```

**Parameters**

-   `onoff`: Boolean true=reverse, false=not reversed.

Returns NA

### `rotate`

Use this method to set the current on screen rotation for the currently displayed drawing or document.

**Syntax**

```javascript
RxCore.rotate(cycle, szrotatetool);
```

**Parameters**

-   `cycle`: Boolean value. If true, the rotation will be set to current rotation + 90 degrees.
-   `szrotatetool`: Type text. A fixed rotation value in degrees. Values are '0’, '90’, '180’ or '270’.

Returns NA

### `rotatePage`

Rotates a page given by page number and angle in degrees.

**Syntax**

```javascript
RxCore.rotatePage(pagenumber, degrees);
```

**Parameters**

-   `pagenumber`: 0 indexed page to be rotated.
-   `degrees`: Rotation value in degrees. Angles can be 0. 90, 180 or 270.

Returns NA

### `RxCoreMulti`

A call that will return an instance of the RxCore object.

**Syntax**

```javascript
RxCoreMulti();
```

**Parameters** None

Returns `RxCore` object Assign to a variable to use as a separate instance of RxCore.

### `saveTop3DCamera`

Use to save the reset view for the 3D model. Use the callback `GUI_CanSaveTop3DView` to call the method.

**Syntax**

```javascript
RxCore.saveTop3DCamera();
```

**Parameters** None

Returns NA

**Example**

```javascript
function GUI_CanSaveTop3DView() {
	RxCore.GUI_CanSaveTop3DView.connect(on3DViewReady);

	function on3DViewReady() {
		RxCore.saveTop3DCamera();
	}
}
```

### `scale`

Use this method to set the measure scaling using the current measure unit and subunit.

**Syntax**

RxCore.scale (scale)

**Parameters**

-   `scale`: A scale value given by two numbers divided by a colon. Ex 1:1.

Returns NA

### `scaleOnResize`

Sets whether rescaling of the browser window will cause a zoom to fit for the opened drawing.

**Syntax**

RxCore. scaleOnResize (onOff)

**Parameters**

-   `onOff`: Boolean true = on, false = off.

Returns NA

### `scrollBarCheck`

Used with Foxit integration to synchronize the RxView360 markup display with the Foxit PDF scrollbar positions.

**Syntax**

```javascript
RxCore.scrollBarCheck();
```

**Parameters** None

Returns NA

### `search3dAttribute`

Use this method to search for a 3D block that matches a specific Attribute value. Only the ID of the first match is returned by the method.

**Syntax**

```javascript
RxCore.search3dAttribute(szAttribVal);
```

**Parameters**

-   `szAttribVal`: String value representing an Attribute value.

Returns Name 3D block Name reference.

### `search3dAttributes`

Use this method to search for a 3D block attributes that matches a specific search expression.

**Syntax**

```javascript
RxCore.search3dAttributes(expr);
```

**Parameters**

-   `expr`: String value representing a search expression using “?” and “\*” wildcard characters.

Returns `meshattribarray` Array of objects for each mesh that matches the search,

### `search3dAttributesEx`

Use this method to search for a 3D block attributes that matches a specific search expression.

**Syntax**

```javascript
RxCore.search3dAttributesEx(expr, useregexp);
```

**Parameters**

-   `expr`: String value representing a search expression using “?” and “\*” wildcard characters.
-   `useregexp`: Boolean \true = use regular expression, false = use simple string compare.

Returns `meshattribarray` Array of objects for each mesh that matches the search,

### `select3D`

Use this method to turn on/off the 3D select tool that enable the user to select 3D parts using the mouse and clicking on parts in the 3D model with the left mouse button.

**Syntax**

```javascript
RxCore.select3D(selected);
```

**Parameters**

-   `selected`: Boolean value. true = on, false = off.

Returns NA

### `select3DMarkup`

Like select3D but works on 3D markup only.
Use this method to turn on/off the 3D markup select tool that enable the user to select 3D markup using the mouse and clicking on parts in the 3D model with the left mouse button.

**Syntax**

```javascript
RxCore.select3DMarkup(selected);
```

**Parameters**

-   `selected`: Boolean value. true = on, false = off.

Returns NA

### `select3DMarkUpByID`

Select a 3D markup using the mesh id.

**Syntax**

```javascript
RxCore.select3DMarkUpByID(id);
```

**Parameters**

-   `id`: The mesh id of the 3D markup.

Returns NA

### `select3DVectorBlock`

Use this method to select a 3D part by part name.

**Syntax**

```javascript
RxCore.select3DVectorBlock(name);
```

**Parameters**

-   `Name`: Name of 3D part to select.

Returns NA

### `selectMarkUp`

Enables markup selection tool (default tool) but also set any newly created markups in selected state. If the newly created object is a Rasterex space object it will allow the selection of Rasterex space objects.

**Syntax**

```javascript
RxCore.selectMarkUp(selected);
```

**Parameters**

-   `selected`: If true select markup tool is activated.

Returns NA

### `selectMarkupbyGUID`

Use this method to select a markup by markup unique ID.

**Syntax**

```javascript
RxCore.selectMarkUpByIndex(GUID);
```

**Parameters**

-   `GUID`: Unique ID of a markup object.

Returns NA

### `selectMarkupbyGUIDs`

Use to select multiple markup objects using and array of unique identifiers.

**Syntax**

```javascript
RxCore.selectMarkupbyGUIDs(GUIDs);
```

**Parameters**

-   `GUIDs`: Array of strings each string being a unique id.

Returns NA

### `selectMarkUpByIndex`

Use this method to select a markup by markup index.

**Syntax**

```javascript
RxCore.selectMarkUpByIndex(indx);
```

**Parameters**

-   `Indx`: Index in markup list to select.

Returns NA

### `selectRxSpace`

Select a Rasterex space object by a given SpaceID attribute value.

**Syntax**

```javascript
RxCore.selectRxSpace(spaceIDval, multi);
```

**Parameters**

-   `spaceIDval`: SpaceID value of the Rasterex space object.
-   `multi`: If true currently selected Rasterex space objects are not unselected.

Returns NA

### `selectSymbName`

Select symbol name from a symbol library. Result returned using GUI_Symbols callback event.

**Syntax**

```javascript
RxCore.getSymbolName(num);
```

**Parameters**

-   `num`: Library number

Returns N/A

### `selectSymblib`

Select symbol library from server. Result returned using GUI_Symbols callback event.

**Syntax**

```javascript
RxCore.getSymbolName(num);
```

**Parameters**

-   `num`: Library number

Returns N/A

### `selectVectorBlock`

Use this method to select a 2D vector block in a vector drawing by using the Block ID.

**Syntax**

```javascript
RxCore.select3DVectorBlock(blockid);
```

**Parameters**

-   `blockid`: Block ID of the 2D vector block to select.

Returns NA

### `set3DBlockDistance`

Offset a 3D mesh using distance and direction.

**Syntax**

```javascript
RxCore.set3DBlockDistance(blockid, distance, direction, override);
```

**Parameters**

-   `blockid`: Mesh id for the 3D block.
-   `distance`: Distance in model units
-   `direction`: Object with x, y and z properties that is converted to a direction vector,

**Example**

```javascript
{x:-1, y:0, z:0} //move in negative x direction.
//override Boolean if false resets the 3D block to its original position.
```

Returns NA

### `set3DBlockState`

Set the visibility state of a specific 3D mesh

**Syntax**

```javascript
RxCore.set3DBlockState(name, state);
```

**Parameters**

-   `name`: Mesh ID of the 3D vector block to hide or display.
-   `state`: Boolean true = visibility on, false = visibility off

Returns NA

### `set3DBlockStateAll`

Set the visibility state of all 3D meshes in a model.

**Syntax**

```javascript
RxCore.set3DBlockState(state);
```

Parameters state Boolean true = visibility on, false = visibility off
Returns NA

### `set3DBlockTransparency`

Set transparency of a mesh in a 3D model by mesh id.

**Syntax**

```javascript
RxCore.set3DBlockTransparency(blockid, value, override);
```

**Parameters**

-   `Blockid`: Mesh id for the 3D block.
-   `Value`: Transparency using a value between 0-1 where 1 is full opaque.
-   `Override`: Boolean if false resets the 3D block to its original transparency.

Returns NA

### `set3DmodelcurFloor`

Set the 3D navigation Bird’s eye generic floorplan. Then clicking the image will set the 3D walkthrough camera to the correct location.

**Syntax**

```javascript
RxCore.set3DmodelcurFloor(floornum);
```

**Parameters**

-   `Floornum`: Floor number.

Returns NA

### `set3dNavcameraPos`

Set the 3D camera position indicator for a 2D drawing being used as navigation drawing for a 3D model floor.

**Syntax**

```javascript
RxCore.set3dNavcameraPos(position, rotation, boxCenter);
```

**Parameters**

-   `position`: Position of the 3D camera with x, y and z values
-   `rotation`: Angle of the camera in radians.
-   `boxCenter`: Center of the 3D model with x, y and z values.

Returns NA

### `set3DViewSelectedMesh`

Use to associate the selected 3D block to 3D view.

**Syntax**

```javascript
RxCore.set3DViewSelectedMesh(name);
```

**Parameters**

-   `name`: Name of 3D view.

Returns NA

### `setActiveFile`

Use this method to set an open file as active file.

**Syntax**

```javascript
RxCore.setActiveFile(index);
```

**Parameters**

-   `Index`: Index of open file.

Returns NA

### `setActiveFileEx`

Use this method to set an open file as active file. This method will wait until all open files rendering process is complete before changing the active file.

**Syntax**

```javascript
RxCore.setActiveFileEx(index);
```

**Parameters**

-   `Index`: Index of open file.

Returns NA

### `setAreaPerimeter`

Change selected area markup from displaying the area value to displaying the perimeter of the area outline.

**Syntax**

```javascript
RxCore.setAreaPerimeter(onoff);
```

**Parameters**

-   `Onoff`: Boolean. true=perimeter displayed, false=area displayed.

Returns N/A

### `setArrowSize`

Use to change the size of arrow heads on arrow markup. Default size is 20

**Syntax**

```javascript
RxCore.setArrowSize(num);
```

**Parameters**

-   `num`: Arrow size

Returns N/A

### `setAuthorization`

This must be called before RxCore.initialize. All calls to server will then use this authentication.

**Syntax**

```javascript
RxCore.setAuthorization(string type, base64string token );
```

**Parameters**

-   `type`: String – type of authentication method.
-   `token`: Base64String – base 64 encoded string representing the token.

Returns N/A

**Example**

```javascript
RxCore.setAuthorization("Basic", "Q0FOWU9OQk9YXEZyYW5rZXN0ZXI=");
```

### `setBirdseyeCanvas`

Use to connect HTML5 canvases to the birdseye overview tool.

**Syntax**

```javascript
RxCore.setBirdseyeCanvas(imagecanvas, indicatorcanvas, markupcanvas);
```

**Parameters**

-   `imagecanvas`: Canvas where the page is drawn
-   `indicatorcanvas`: Canvas used for zoom scale indicator
-   `markupcanvas`: Canvas used for markup

Returns NA

### `setBirdsEyeFoxit`

Sets the bitmap to be used with the birdseye overview for the current page.

**Syntax**

```javascript
RxCore.setBirdsEyeFoxit(bitmap, pageindex);
```

**Parameters**

-   `bitmap`: Clamped bitmap Array
-   `pageindex`: The 0 indexed page index

Returns NA

### `setBlockColor`

Use this method to draw a selected vector block in a different color.

**Syntax**

```javascript
RxCore.setBlockColor(blockid, Color, override);
```

**Parameters**

-   `blockid`: Block ID of the block to change.
-   `color`: Color to apply to block
-   `override`: If false reset the color to original block color.

Returns NA

### `setBlockFill`

Use this method to draw a selected vector block using a different color or fill pattern created with addFill.

**Syntax**

```javascript
RxCore.setBlockFill(blockid, name, override);
```

**Parameters**

-   `blockid`: Block ID of the block to change.
-   `name`: Name of fill object to apply to block.
-   `override`: If false resets to original block color.

Returns NA

### `setCalibration`

Use this method to set the calibration scaling using a number.

**Syntax**

```javascript
RxCore.setCalibration(scale);
```

Parameters scale A number ex. 0.5 will set the scale to half original scale
Returns NA

### `setCameraTumbWidth`

Use to override the default thumbnail image width for 3D Views. Default value is 210 pixels.

**Syntax**

```javascript
RxCore.setCameraTumbWidth(num);
```

Parameters Num New default width of 3D view thumbnail image.
Returns NA

### `setCompareFiles`

Used in combination with the compare dialog to set the state of a file in a compare composite.

**Syntax**

```javascript
RxCore.setCompareFiles(index, state);
```

Parameters index Index number reference to file in list of open files that can be used in a compare/overlay composite.
state Role of the referenced file.
0 = unused, 1 = background, 2= overlay
Returns NA

### `setCompareColors`

Use this method to set the drawing colors for overlay and background page in a compare overlay composite.

**Syntax**

```javascript
RxCore.setCompareColors(bgcolor, fgcolor);
```

Parameters bgcolor Html color string to set color of background drawing.
Parameters fgcolor Html color string to set color of foreground drawing.
Returns NA

### `setCompareScale`

Set compare alignment using an array containing scaling object returned by GUI_CompareMeasure callback

**Syntax**

```javascript
RxCore.setCompareScale(scalearray);
```

Parameters scalearray Array of scale objects
Scaleobject = \{
dist: distance, angle : angle, offset : offset, pwidth : pagewidth
\}

Returns NA

### `setConfiguration`

Use this method to override the configuration location source loaded on startup. This must be called before RxCore.initialize to work.

**Syntax**

```javascript
RxCore.setConfiguration(szURL);
```

Parameters szURL Full URL to an XML source that is used to set the client configuration.
Returns NA

### `setCountSize`

Set the display size of selected markup count element in pixels.

**Syntax**

```javascript
RxCore.setCountSize(nSize);
```

Parameters nSize New display size.
Returns NA

### `setCountSizeAll`

Set the display size of all markup count element in pixels.

**Syntax**

```javascript
RxCore.setCountSizeAll(nSize);
```

Parameters nSize New display size.
Returns NA

### `setCustomLabelText`

Sets a custom text and visibility of a selected Rasterex space markup object label.

**Syntax**

```javascript
RxCore.setCustomLabelText(text, onoff);
```

Parameters text Text to use with label.
onoff Boolean : true = label displayed, false = label hidden.
Returns NA

### `setDimOffset`

Sets the leader line offset for dimension line markup objects.

**Syntax**

```javascript
RxCore.setDimOffset(size);
```

Parameters size Number of pixels for leader line offset.
Returns NA

### `setdimPrecision`

Sets how many numbers after the decimal points are used for measurement markup. Default is 2.

**Syntax**

```javascript
RxCore.setdimPrecision(num);
```

Parameters num New value of numbers after decimal points used.
Returns NA

### `setdisplayBackground`

Use this method to set the color of the display area outside the extent of the document.

**Syntax**

```javascript
RxCore.setdisplayBackground(color);
```

Parameters color Color string using supported html color notation Ex “#00FF00”
Returns NA

### `setFont`

Use this method to set the font used for markup text.

**Syntax**

```javascript
RxCore.setFont(value);
```

Parameters Value Type string. A valid font name.
Returns NA

### `setFontBold`

Use this method to toggle font bold on/off.

**Syntax**

```javascript
RxCore.setFontBold();
```

Parameters none
Returns NA

### `setFontFull`

Sets the current markup font using font name, font size, font style bold, font style italic. Use instead of setFontBold, setFont, setFontHeight and setFontItalic separately.

**Syntax**

```javascript
RxCore.setFontFull(fontobject);
```

Parameters fontobject Fontobject.font = \<string font name>
Fontobject.size = \<height in points>
Fontobject.style.bold = \<Boolean true/false>
Fontobject.style.italic = \<Boolean true/false>
Returns NA

### `setFontHeight`

Use this method to set the font height for markup text in points.

**Syntax**

```javascript
RxCore.setFontHeight(value);
```

Parameters Value Integer indicating font height in points.
Returns NA

### `setFontItalic`

Use this method to set font italic on/off.

**Syntax**

```javascript
RxCore.setFontItalic(value);
```

Parameters OnOff Boolean to set Italic on/off
Returns NA

### `setGlobalStyle`

When on any changes to markup color, line width, and fill style will be set as the new global value when creating any new markup elements.

**Syntax**

```javascript
RxCore.setGlobalStyle(global);
```

Parameters global Boolean value to turn setting on/off
Returns NA

### `setGUIDMarkupSelected`

Assign a unique ID to the currently selected markup.

**Syntax**

```javascript
RxCore.setGUIDMarkupSelected();
```

Parameters none
Returns NA

### `setHatchDescription`

Sets a description property on a fill style created using addFill.

**Syntax**

```javascript
RxCore.setHatchDescription(szname, szdescription);
```

Parameters szname Name identifier of the fill object.
Parameters szdescription Text description to apply.
Returns NA

### `setLabelSize`

Changes the label size for markup objects that has labels like area and dimension lines.

**Syntax**

```javascript
RxCore.setLabelSize(size);
```

Parameters size Number of pixels for the label text height.
Returns NA

### `setLabelSizeAll`

Changes the label size for all markup objects that has labels like area and dimension lines.

**Syntax**

```javascript
RxCore.setLabelSizeAll(size);
```

Parameters size Number of pixels for the label text height.
Returns NA

### `setLargePDFpageLimit`

If a loaded PDF file contains more pages than the set number, only a limited number of pages will be active at any given time to limit the memory needed to display the PDF document.

**Syntax**

```javascript
RxCore.setLargePDFpageLimit(numpages);
```

Parameters numpages Limit for number of pages that can be loaded at once.
Returns NA

### `setLayout`

Call to set canvas size based on web page content.

**Syntax**

```javascript
RxCore.initialize(layout);
```

Parameters offsetWidth Width to subtract from full width. Values in pixels.
Parameters offsetHeight Height to subtract from full height. Values in pixels.
Returns NA

### `setLineStyle`

Use this method to set the line style used for markup. NB! Not all browser currently support this feature.

**Syntax**

```javascript
RxCore_SetLineStyle(linestyle);
```

Parameters Value 0 = '————' solid
1 = '– – – – – ' dashed
2 = '· · · · · · · ' dotted
3 = '– · · – · · ' dash dot dot dash
4 = '– · – · – · ' dash dot
Returns NA

2.349 setLineWidth
Use this method to set the line width used for selected markup.

**Syntax**

```javascript
RxCore.setLineWidth(value);
```

Parameters Value Width in pixels.
Returns NA

### `setLineWidthAll`

Use this method to set the line width used for all markup.

**Syntax**

```javascript
RxCore.setLineWidthAll(value);
```

Parameters value Width in pixels.
Returns NA

### `setLineWidthMarkup`

Use this method to set the line width used for a markup object.

**Syntax**

```javascript
RxCore.setLineWidth(markup, value);
```

Parameters markup Markup object.
value Width in pixels.
Returns NA

### `setLineWidthUnits`

Sets the line width for the selected markup to the width specified using he current measurement unit. I.E if the currently selected measurement unit is mm the width will be set in mm.

**Syntax**

```javascript
RxCore.setLineWidthUnits(value);
```

Parameters Value Width in current measurement uinit.
Returns NA

### `setMarkup3DSavefile`

Use to change the name of the json file that holds the 3D markups. Default is 'markup.json’.

**Syntax**

```javascript
RxCore.setMarkup3DSavefile(szfilename);
```

Parameters szfilename String - Name of the file
Returns NA

### `setMarkupLayer`

Set the currently active markup layer.

**Syntax**

```javascript
RxCore.setMarkupLayer(layer);
```

Parameters layer Number of the markup layer to set as active.
Returns NA

### `setmarkupRxGUID`

Set unique id for markup objects.

**Syntax**

```javascript
RxCore.setmarkupRxGUID();
```

Parameters none
Returns NA

### `setMarkupSearchPadding`

Sets an internal variable that can be used with RxCore.markupTextSearch to control the markup zoom level.

**Syntax**

```javascript
RxCore.setMarkupSearchPadding(padding);
```

Parameters padding object padding = \{x : int, y : int, w: int, h : int \}
Returns NA
Examples RxCore.setMarkupSearchPadding(\{x:50, y: 50, w:50, h:100\});

### `setMarkupXMLData`

Create markup from XML markup structure.

**Syntax**

```javascript
RxCore.setMarkupXMLData(xmldata);
```

Parameters xmldata Xml structure representing markup to be created.
Returns NA

### `setMonoChrome`

Turn monochrome display on/off for CAD and other vector based formats.

**Syntax**

```javascript
RxCore.setMonoChrome(bonOff);
```

Parameters bonOff Boolean value. True = monochrome on, false = monochrome off.
Returns NA

### `setnavigationScaleOffset`

Use alignment array from compare overlay to set the scale and offset of a drawing used to replace the generic floorplan thumbnail of a 3D model so the camera indicator from 3D model show up at the correct place. Alignment array data is returned by the GUI_CompareMeasure callback event.

**Syntax**

```javascript
RxCore.setnavigationScaleOffset(targetdocindex, floornum, alignarray);
```

Parameters targetdocindex Open file index of the 3D model.
floornum 3D model floor that the scale and offset is for.
Alignarray Array of alignment data created for the compare overlay.
Returns NA

### `setnavScaleOffsetPage`

Use alignment array from compare overlay to set the scale and offset of current drawing page to be used as a 2D navigation page. Will cause the camera indicator from 3D model to show up at the correct place. Alignment array data is returned by the GUI_CompareMeasure callback event.

**Syntax**

```javascript
RxCore.setnavigationScaleOffset(alignarray);
```

Parameters alignarray Array of alignment data created for the compare overlay.
Returns NA

### `setpageAs3DNavigator`

Make an open drawing into a 2D navigation page for an open 3D model

Returns NA

**Syntax**

```javascript
RxCore.setpageAs3DNavigator(docpage, floorplanobjects);
```

**Parameters**

-   `docpage` \{`docindex`: \<open file index\>,
-   `Pageindex`: \<page index to use as 3D navigation page\>,
-   `Floorindex`: \<the model floor it should be used for\>\}
-   `floorplanobjects`: Array of floorplan objects from 3D model.

Use `RxCore.getFloorplanList `to get floorplan object list

### `setPDFBookmarks`

Used with Foxit integration and causes the GUI_PDFBookmarks callback to set UI bookmarks list

Returns NA

**Syntax**

```javascript
RxCore setPDFBookmarks (bookmarks);
```

**Parameters**

-   `bookmarks`: Array of PDF bookmarks objects.

### `setPDFinitalZoomAll`

When on initial scaling of a PDF will be zoomed to fit.

Returns NA

**Syntax**

```javascript
RxCore.setPDFinitalZoomAll(onoff);
```

**Parameters**

-   `onoff`: true = on, false = off.

### `setPDFLayers`

Used with Foxit integration and causes the GUI_VectorLayers callback to set UI layers list.

Returns NA

**Syntax**

```javascript
RxCore setPDFLayers (PDFLayers);
```

**Parameters**

-   `PDFLayers`: Array of PDF layer objects.

### `setRxSpaceColor`

Use this method to set the fill color of a Rasterex space object to the given color.

Returns NA

**Syntax**

```javascript
RxCore.setRxSpaceColor(blockid, Color, override);
```

**Parameters**

-   `blockid`: SpaceID attribute value for the Rasterex space object.
-   `Color`: Color to apply to Rasterex space object. Override If false reset the color to original fill color.

### `setscrollZoomKey`

When on a keyboard key must be pressed in combination with using the mouse wheel in order to zoom in.
Syntax RxCore. setscrollZoomKey (OnOff,key)
Parameters OnOff true = on, false = off.
Parameters key Character code of the keyboard key to use as control key
Returns NA

2.367 setSingleDocument
Use to switch between single or multiple document mode.
Syntax RxCore.setSingleDocument (onoff)
Parameters onoff If true only document at the time can be opened,
Returns NA

2.368 setSpaceID
Sets the “SpaceID” attribute value for a selected Rasterex space object.
Syntax RxCore.setSpaceID (idvalue)
Parameters idvalue A number to be used as a Space ID.
Returns NA

2.369 setText
Alternative reference to GUI_Textdiag setText method.

2.370 setThumbnailFoxit
Used with Foxit integration object to set page thumbnail from Foxit thumbnail function.
Syntax RxCore.setThumbnailFoxit (thumbnail, pagenum)
Parameters thumbnail Thumbnail object
Parameters pagenum Page index
Returns NA

2.371 setUnit
Use this method to set the measure system used for measurement and markup.
Syntax RxCore.setUnit (value)
Parameters value Type integer.
1 = Metric, 2 = Imperial, 3 = System and 4 = Custom
Returns NA

2.372 setVectorBlockArea
Use this method to add a custom attribute to a vector block polygon that contain the area value.
Syntax RxCore.setVectorBlockArea(partindex, foundblock, szAttname)
Parameters Partindex Integer - vectorlist index
Foundblock Integer – vector block index
szAttname String - Attribute name to add the value too. Will be created if it does not exist.
Returns NA

2.373 setViews3DSavefile
Use to change the name of the json file that holds the 3D Views. Default is 'views.json’.
Syntax RxCore. setViews3DSavefile (szfilename)
Parameters szfilename String - Name of the file
Returns NA

2.374 show3DViewMarkers
Turns on/off the display of spheres that indicate the location where 3D views are located in the 3D model,
Syntax RxCore.show3DViewMarkers (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.375 showMarkupLabels
Turn the display on/off for markup labels that are displayed when mouse is hovering over a markup object.
Syntax RxCore.showMarkupLabels (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.376 singlePageScrollPan
Disable automatic zoom on mouse wheel and enables vertical pan instead.
Syntax RxCore.singlePageScrollPan (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.377 spaceEdit
Set the Viewer to use the state that allow editing of Rasterex space objects. This will enable mouse control to select a Rasterex space object for editing and pan a 2D drawing using left mouse button, Zoom using scroll wheel. For touch devices this will enable zoom and pan using two touch points. For 3D files on touch point will rotate model and two will zoom and pan.
Syntax RxCore.spaceEdit ()
Parameters None
Returns NA

2.378 switchPages
Replace page loaded using RxCore.openFilePages() with another page.
Syntax RxCore.switchPages (Filepath, pages)
Parameters Filepath URL address or full server-side windows path to a file to open in the viewer.
Parameters pages Array of page numbers to open.
Returns NA

2.379 textSearch
Use this method to initiate and perform text searches. Call RxCore.textsearchend to terminate text search. Search results are returned using the GUI_NumMathces callback event.
Syntax RxCore.textSearch (text,direction,casesens)
Parameters text String to search for
Parameters direction Boolean search direction true = forward, false = backward.
Parameters casesens Boolean Case sensitive true/false
Returns NA

2.380 textSelect
Use this method to use turn on/off the text select tool for documents that has selectable text. When tool is active, text can be selected using the mouse.
Syntax RxCore. textSelect(selected)
Parameters selected Boolean value. true = on, false = off.
Returns NA

2.381 toggle3DVisible
Use this method to turn on/off the 3D visible tool that enable the user to hide 3D parts using the mouse and clicking on parts in the 3D model with the left mouse button.
Syntax RxCore.toggle3DVisible (selected)
Parameters selected Boolean value. true = on, false = off.
Returns NA

2.382 toggleBackground
Use this method to set the background display color for vector drawings.
Syntax RxCore.toggleBackground ()
Parameters None
Returns NA

2.383 transparency3D
Use this method to set the transparency of the 3D model
Syntax RxCore.transparency3D(value)
Parameters Value Transparency using a value between 0-1 where 1 is full opaque.
Returns NA

2.384 transparency3DEx
Use this alternative method to set the transparency of the 3D model that has better reset of transparency created for the new mesh structure.
Syntax RxCore.transparency3DEx(value)
Parameters Value Transparency using a value between 0-1 where 1 is full opaque.
Returns NA

2.385 unSelectAllMarkup
Use this method to set all markups in unselected state.
Syntax RxCore.unSelectAllMarkup()
Parameters None
Returns NA

2.386 unSelectMarkupbyGUID
Use this method to unselect a specific markup object based on a unique identifier.
Syntax RxCore. unSelectMarkupbyGUID (GUID)
Parameters GUID Unique ID of a markup object.
Returns NA

2.387 unSelectMarkupbyGUIDs
Use to unselect multiple markup objects using and array of unique identifiers.
Syntax RxCore. unSelectMarkupbyGUIDs (GUIDs)
Parameters GUIDs Array of strings each string being a unique id.
Returns NA

2.388 unSelectMarkupbyIndex
Use this method to unselect a specific markup object based on the markup index.
Syntax RxCore.unSelectMarkupbyIndex (index)
Parameters index index of a markup object.
Returns NA

2.389 update3DViewAttribute
Use this method to update an attribute associated with a 3D view.
Syntax RxCore. update3DViewAttribute (szName, newszValue, viewname)
Parameters szName Name of the attribute to update.
Parameters newszValue New value to replace the current value.
Parameters viewname Name of the 3D view the attribute is associated with..
Returns NA

2.390 useCompanyFeature
Used with a license server to allow special license features per company to be called from the client.
Syntax RxCore.useCompanyFeature (szfeature)
Parameters szfeature String that sets license feature for a company.
Returns NA

2.391 useCredentials
Set withCredentials to true or false for all XMLHttpRequest calls to the server.
Syntax RxCore. useCredentials (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.392 useFixedScale
Use this method to set a global flag that will display markup with a fixed scale relative to the zoom scale. If off the markup will be created using display scale.
Syntax RxCore. useFixedScale (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.393 useFraction
Turn on/off fraction notation for markup measurement object when using Imperial measurement units.
Syntax RxCore.useFraction (OnOff)
Parameters OnOff Boolean : true = on, false = off
Returns NA

2.394 useNoScale
Turn on/off scaling of markup line width and count sizes. When on the line width stays the same regardless of drawing zoom factor.
**Syntax**

```javascript
RxCore.useNoScale(OnOff);
```

**Parameters**

-   `OnOff`: Boolean : true = on, false = off

Returns NA

### `vectorBlocksAll`

Turns all vector block on/off.

**Syntax**

```javascript
RxCore.vectorBlocksAll(OnOff);
```

**Parameters**

-   `OnOff`: Boolean : true = on, false = off

Returns NA

### `vectorLayersAll`

Turns all vector layers on/off.

**Syntax**

```javascript
RxCore.vectorLayersAll(OnOff);
```

**Parameters**

-   `OnOff`: Boolean : true = on, false = off

Returns NA

### `viewMode`

Turn vector display to monochrome without polygon fill.

**Syntax**

```javascript
RxCore.viewMode(OnOff);
```

**Parameters**

-   `OnOff`: Integer :1 = on, 0= off

Returns NA

### `walkThrough3D`

Use this method to simulate a first-person navigation through a currently open 3D model.

**Syntax**

```javascript
RxCore.walkThrough3D(selected);
```

**Parameters**

-   `Selected`: Boolean operator that toggle the function on/off

Returns NA

### `xmlurl`

Use this method to open a file with a markup xml reference file. This will allow RxView360 to open markup files created with RxViewServer or other Rasterex
products. See appendix B for details on the markup xml reference format.

**Syntax**

```javascript
RxCore.xmlurl(fileurl);
```

**Parameters**

-   `fileurl`: URL to an existing markup xml reference file.

Returns NA

### `xmlurlEx`

Use this method to open a file with a markup xml reference file. This will allow RxView360 to open markup files referenced by an URL tag in the xml
structure See appendix B for details on the markup xml reference format.

**Syntax**

```javascript
RxCore.xmlurlEx(fileurl);
```

**Parameters**

-   `fileurl`: URL to an existing markup xml reference file.

Returns NA

### `zoomFit`

Use this method to display the current drawing scaled to fit for the current canvas size.

**Syntax**

```javascript
RxCore_ZoomFit();
```

**Parameters** None

Returns NA
`

### `zoomHeight`

Use this method to display the current drawing scaled to fit the current canvas height.

**Syntax**

```javascript
RxCore_ZoomHeight();
```

**Parameters** None

Returns NA

### `zoomToBlock`

Call this method to zoom to a specific block in vector drawing.

**Syntax**

```javascript
RxCore.zoomToBlock(blockId);
```

**Parameters**

-   `blockId` : ID of the block to zoom to.

Returns NA

### `zoomWidth`

Use this method to display the current drawing scaled to fit the current canvas width.

**Syntax**

```javascript
RxCore_ZoomWidth();
```

**Parameters** None

Returns NA

### `zoomIn`

Use this method to increase the display scale of the current drawing or document by a small factor

**Syntax**

```javascript
RxCore_ZoomIn();
```

**Parameters** None

Returns NA

### `zoomOut`

Use this method to decrease the display scale of the current drawing or document by a small factor

\***\*Returns\*\*** NA

Syntax RxCore_ZoomOut()

**Parameters** None

### `zoomPageUpdate`

Used in combination with pageLock and the GUI_ZoomUpdate callback event to synchronize the zoom in two instances of RxCore.

Returns NA

**Syntax**

```javascript
RxCore.zoomPageUpdate(zoomparams, type);
```

**Parameters**

-   `zoomparams`: Zoom operation parameters returned by callback function.

Parameters Type Type of zoom operation.
0 = Zoom in
1 = Zoom out
2 = zoom window
3 = zoom all
4 = zoom width
5= zoom height

### `zoomWindow`

Use this method to turn on/off Zoom window function. This allow the user to zoom into a section of the current drawing or document by selecting a section of the drawing using the mouse left button.

Returns NA

**Syntax**

```javascript
RxCore_ZoomWindow(selected);
```

Parameters Selected Boolean value. true = on, false = off.

**Callback connection objects**

Objects that enable interaction between HTML GUI elements and rxcorefunctions library
To connect an object, you must define your own JavaScript functions that should be used as callback functions and set the callback using the connect method.

All callbacks have a method connect

-   `connect(callback)` : Use to connect your callback function to the connection object.

**Example**

```javascript
RxCore.GUI_MarkupLayers.connect(function (markuplayers) {
	//do stuff with markuplayers
});
```

The information in the callback function can be used to populate HTML elements or other tasks.

### `GUI_2DBlockID`

Connection callback object that Returns one or more vector block IDs when the RxCore.pickPolygon() tool is used.

**Callback Parameters**

The callback function should have the following parameters.

-   `blockarray` : Array of Block IDs

### `GUI_2DBlockInfo`

Connection callback object that Returns an Array of attributes for a selected vector block when the RxCore.pickPolygon() tool is used.

**Callback Parameters**

The callback function should have the following parameters.

-   `Info`: Array of Attribute name, value pairs.

### `GUI_2DBlockInfoPos`

Connection callback object that Returns an Array of attributes for a selected vector block when the mouse moves over a drawing and if it is enabled using `RxCore.blockhoverevent(true)`.

**Callback Parameters**

The callback function should have the following parameters.

-   `partlist`: Array of Attribute name, value pairs.

-   `Screenpos`: mouse x,y position.

-   `Pathindex`: path index that can be used with methods like addHoverforBlock.

### `GUI_3DCameraSave`

When a new 3D view is created this callback will return the 3D view object when the view creation is complete.

**Callback Parameters**

The callback function should have the following parameters.

-   `Cameraobject` : 3D view object
-   `fileActive` : true if the 3D model is the active document.

**Syntax**

```javascript
 var Cameraobject = {
                        position: //An array representation of a 3D camera object.
                        name: //Name of the 3D View.
                        tool: //The input tool that was active when the view was created.
                        explodefactor : //Explode factor when the view was created.
                        clipping : //Clipping planes when the view was created.,
                        thumbnail: //A canvas that hold the view thumbnail.
                        width: //Width of the thumbnail,
                        height: //Height of the thumbnail,
                        image: //A full size image of the 3D view.
                        selectedmesharray : //An array holding any 3D object associated with the view,
                        attributes : //array of attributes associated with the 3D view.
                };
```

### `GUI_3DMarkup`

Connection object that is used to list information about the currently selected 3D markup object. The callback is called when the user interacts with the 3D model using the 3D select markup method, deletes a 3D markup or creates a new 3D markup.

**Callback Parameters**

The callback function should have the following parameters.

-   `MarkupInfo`: Object of Attribute name, value pairs.
-   `Reason`: ResonObject

**Syntax**

```javascript
ResonObject {
Created : Boolean,
Modified : Boolean,
Deleted : Boolean
};
```

### `GUI_3DMarkupInfo`

Connection object that is used to list information about the currently selected 3D markup object. The callback is called when the user interacts with the 3D model using the 3D select markup method.

**Callback Parameters**

The callback function should have the following parameters.

-   `MarkupInfo`: Object with attribute name, value pairs.

### `GUI_3DMarkupList`

Callback that Returns the list of 3D markups when this changes.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markuplist`: Array of 3D meshes.
-   `ActiveDoc`: Boolean if the 3D Document is active.

### `GUI_3DNavPosition`

Callback event that Returns when a user clicks on a 2D navigation drawing. Returns the mouse position.

**Callback Parameters**

The callback function should have the following parameters.

-   `Navigationpos`: NavigationObject

```javascript
NavigationObject{
docindex : Open file index,
pageindex : page index,
cameraPos : mouse position object.
}
```

### `GUI_3DParts`

Connection object that is used to list parts in a 3D file. The callback is called when the user interacts with the 3D model using the 3D select method and when a 3D file with parts is opened.

**Additional Methods**

-   `getHeight()`: Returns canvas height. Can be used to set height of HTML GUI container.
-   `setlistHeight(height)`: Use to set the height of each list element.

**Properties**

-   `listheight`: height of a list element (number)
-   `isupdate`: true if a part is selected (Boolean)
-   `scrollto`: A list position value can be used with scrollTop to change list position (number)

**Callback Parameters**

The callback function should have the following parameters.

-   `Parts` : Array of Block3DObject

```javascript
Block3DObject{
name : string //name of part
index : number //part index
state : Boolean // display on/off
level : number //list level
position : number // position in the GUI display element in pixels.
selected : Boolean // selected on/off.
}
```

### `GUI_3DPartInfo`

Connection object to display information about a 3D part. The callback is called when the user interacts with the 3D model using the 3D select method.

**Callback Parameters**

The callback function should have the following parameters.

-   `PartInfo`: Part3DObject

```javascript
Part3DObject {
name : string //name of part
attributes : array of name, value pairs
}
```

### `GUI_3DPartState`

This callback Returns state information when the 3D part visibility is changed.

**Callback Parameters**

The callback function should have the following parameters.

-   `PartInfo`: Part3DObject

```javascript
Part3DObject {
name : string //name of part
visible : Boolean value indicating state of visibilty
}
```

Example.

```javascript
GUI_3DPartInfo.connect(function(partinfo){
If(partinfo.visible){
Console.log(“part is visible”);
}else{
Console.log(“part is hidden”);
}

});
```

### `GUI_3DView`

When a 3D view is set as active 3D view using RxCore.restoreCameraByName, this callback event Returns the name of the 3D View when the 3D view load is complete.

**Callback Parameters**

The callback function should have the following parameters.

-   `Viewname`: String containing the name of the activated 3D view.

### `GUI_3DWalkthrough`

Connection object to display a 3D navigation element on top of the canvas that is used for moving around in a 3D model.

**Additional Methods**

-   `setDivElement ()`: Sets a DIV element that is used as 3D navigation control.
-   `setWalkthroughGUI(setvisible)`: Turns the 3D navigation control element visibility on/off.

**Callback Parameters**

The callback function should have the following parameters.

-   `setvisible`: Boolean indicating if the 3D navigation control element should be visible or hidden. True = visible, False= hidden.

### `GUI_ActivateFile`

This callback notify which file is currently active when the active file state changes.

**Callback Parameters**

The callback function should have the following parameters.

-   `fileindex`: Index of the currently active file.

### `GUI_birdseye`

Callback event that return a canvas with the current birdseye page representation when updated.

**Callback Parameters**

The callback function should have the following parameters.

-   `pagnumber`: The 0 indexed page number.
-   `Thumbnail`: An Rx thumbnail object containing image canvas.

### `GUI_Calibratediag`

Connection object to display a dialog or other html element used for calibration of a drawing measurement.

**Additional Methods**

-   `getUnitlabel()`: Returns current Unit postfix like mm, cm, inch depending on setting.
-   `setCalibration(val)`: Use to set the current calibration value.
-   `SetTempCal`: Use to set a temporary calibration value.

**Callback Parameters**

The callback function should have the following parameters.

-   `calibratedata`: number indicating the measured distance.

### `GUI_CalibrateComplete`

Connection object that Returns the applied calibration value and page number when calibration value is applied to a page.

**Callback Parameters**

The callback function should have the following parameters.

-   `calibratedata`: object that contain calibration value and the page number.

```javascript
var calibratedata = {
	calibratescale: nCalibrateScale,
	pagenumber: pagenumber,
};
```

### `GUI_CameraPos`

Callback event that return the position of the 3D camera.

**Callback Parameters**

The callback function should have the following parameters.

-   `Position`: Camera position x, y and z coordinate.
-   `CameraAngle`: Angle of camera in radians.
-   `ModelCenter`: Centre of model x, y and z coordinate.

### `GUI_CanSaveTop3DView`

This event is called when the reset 3D View creation can be done.

**Callback Parameters**

The callback function takes no parameters

**Example**

```javascript
RxCore.GUI_CanSaveTop3DView.connect(function () {
	RxCore.saveTop3DCamera();
});
```

### `GUI_CompareAlign`

Connection object that implement an event used to control the compare alignment process.

**Callback Parameters**

The callback function should have the following parameters.

-   `alignfile`: Integer indicating the stage of the CompareAlign process.

### `GUI_CompareDiag`

Connection object used to specify a HTML element used to select and create a compare overlay.

**Callback Parameters**

The callback function should have the following parameters.

-   `OpenfileNames`: Array of FileNames for files currently open in RxView360 that can be used in a Compare overlay.

### `GUI_CompareMeasure`

Callback event that return result of compareMesure method.

**Callback Parameters**

The callback function should have the following parameters.

-   `distance`: The distance measured in document units
-   `angle`: Angle in radians of the two points of the distance measured.
-   `offset`: point object with x and y of first point.
-   `pagewidth`: width of measured page in pixels.

### `GUI_Consolidate`

Connection object that is called when consolidation is turned on using RxCore.consolidate(true);

**Callback Parameters**

The callback function should have the following parameters.

```javascript
consolidateObj {
isactive : Boolean //indicate if consolidate is on or off.
}
```

### `GUI_ConsolidateMarkup`

This callback event is Returns a markup object when that markup object has been consolidated.

**Callback Parameters**

The callback function should have the following parameters.

-``Markup`: markup object.

### `GUI_ContextMenuEvt`

Connection object that is called when right clicking on the display canvas that forwards the context menu event.

**Callback Parameters**

The callback function should have the following parameters.

-   `evt`: Dom event object for the display canvas.

**Example**

```javascript
function GUI_ContextMenuEvt() {
	RxCore.GUI_ContextMenuEvt.connect(onContextMenu);

	RxCore.getCanvasContextMenuEvent();

	function onContextMenu(evt) {
		evt.preventDefault();
		// perfdorm operations on context menu here.
		return false;
	}
}
```

### `GUI_CreationComplete`

Used with `RxCore.createServerContent` method \this callback Returns the xml created on server when the content on server is created.

**Callback Parameters**

The callback function should have the following parameters.

-   `xml`: a string holding the xml for the newly created content.

### `GUI_CustomStamps`

When creating custom stamps using the RxCore.createCustomStamps method this callback event is called to notify of the custom stamp creation.

**Callback Parameters**

The callback function should have the following parameters.

-   `Stampinfo:`: An object that holds information on the created stamp and type of event.

-   `stampdata.type`: type of event with values

2 – stampdata.data = library name
3 – stampdata.data = number of stamps.
5 – stampdata.data = stamp image object.
stampdata.index = stamp name
stampdata.width = stamp width
stampdata.height = stamp height

### `GUI_Download`

Connection object that is called when a file is loading.

**Callback Parameters**

The callback function should have the following parameters.

-   `download`: Either a string with values “show” or “hide” that can be used to hide or display the html element or an integer value indicating the progress of the download.

### `GUI_exportComplete`

Connection object that is called when a file export is completed.

**Callback Parameters**

The callback function should have the following parameters.

-   `fileURL`: URL to the file created.

### `GUI_FileInfo`

Connection object that is called when the RxCore_FileInfodialog method is executed.

**Additional Method**

-   `getUnitlabel`: Returns the current measurement unit label. Ex: mm, cm or Inch.

**Callback Parameters**

The callback function should have the following parameters.

-   `FileInformation`: object containing file information

```javascript
	FileInformation {
	FileFormat : string , //current file format
	FileName : string, //file name
	FileSize : string, //file size
	Compression : string, //Compression
	DPI : number, //file DPI,
	Pages : number, //number of pages.
	ImageWidth : number, // document width
	imagewidthunits : number, //Unit for document width
	ImageHeight : number, //document height
	imageheightunits : number, //Unit for document width
	OffsetX : number ,// File internal offset x direction
	OffsetY : number, //File internal offset y direction
	OriginalScale : number, // File internal scale.
}
```

### `GUI_FileLoadComplete`

Connection callback event that is called when the file and markup has finished loading.

**Callback Parameters**

The callback function should have the following parameters.

-   `FileURL`: The file path of the loaded file or markup. Also Returns 'Compare’ when a compare/overlay is loaded.

### `GUI_floorlevel`

This callback event Returns a floor elevation object. This can be used with getfloorplanDocs method to find an open drawing being used as 2D navigation page for a floor in a 3D model.

**Callback Parameters**

The callback function should have the following parameters.

-   `Floorindex`: The floor level index.

### `GUI_floorLoadComplete`

Callback event that triggers when a file is loaded using open3DFloorplanPage.

**Callback Parameters**

The callback function should have the following parameters.

-   `FileName`: String Filename.
-   `Active`: Boolean true if file is active.
-   `Docpage`: Object Docpage.

```css
docpage {
docindex : integer //open file index
floorindex : integer //3D model floor index
pageindex : integer //page index
}
```

### `GUI_FloorplanCanvas`

Returns a canvas when the get3dFloorplanCanvas method is used.

Use canvas to insert a floorplan plane into the 3D drawing using the create3DfloorplanfromCanvas method.

**Callback Parameters**

The callback function should have the following parameters.

-   `Floornum`: Floor number,
-   `Canvas`: html Canvas
-   `Alignarray`: Array of alignment data created when creating compare overlay

### `GUI_floorthumb`

Callback event that is called when a generic floorplan image is loaded.

**Callback Parameters**

The callback function should have the following parameters.

-   `Index`: Thumbnail index.
-   `Thumbnail`: Thumbnail object.

```javascript
	Thumbnail {
	BScale: double //Backround scale
	Elevation: integer // elevation of floor in model units.
	Name: string // floor name
	RScale: double //Replacement scale
	SRC: string //url to image file
	Scale: double //Scale
	alignarray: Array // array of alignment for replacement file.
	canvas: html Canvas
	ctx: html Canvas context
	height: integer //image height
	image: html img source
	index: integer // thumbnail index
	offsetX: integer // replacement offset x
	offsetY: integer // replacement offset y
	originalHeight: integer // original height
	originalWidth: integer // original width
	replaceScale: double // replacement scale
	replaced: Boolean // true if replaced
	thumbcanvas: html Canvas
	thumbctx: html Canvas context
	thumbheight: integer // thumbnail height
	thumbwidht: integer // thumbnail width
	width: integer //image width
}
```

### `GUI_FoxitReady`

Callback similar to GUI_Ready but called when Foxit is ready for interaction.
Use this to perform tasks when the page loads, like opening a file on startup.

**Callback Parameters**

```javascript
	Initdoc{
	url : string, //,URL to a file to open on startup
	open : Boolean // true if a file to open is available
	custom : Boolean // true if openFileCustom is to be used.
}
```

### `GUI_HasText`

Connection callback that notify if the opened file has searchable text.

**Callback Parameters**

The callback function should have the following parameter.

-   `hastext`: Boolean that is true if the document has searchable text.

### `GUI_HatchChange`

Callback Returns a fill object when fill is applied or removed.

**Callback Parameters**

The callback function should have the following parameters.

-   `Fillstyle`: A fill style object.

```javascript
Fillstyle = {
	type: "hatch",
	name: name,
	ptrn: HatchImage,
	tilesize: size,
	color: color,
	description: szdescript,
	inuse: false,
};
```

### `GUI_inputEvent`

Callback Returns a input object with information on input from mouse and keyboard.

**Callback Parameters**

The callback function should have the following parameters.

-   `Inputobj`: object that contain information on the event origin.

```javascript
inputobj = {
	mousepos: mousePos, //position when mouse is clicked.
	mousebutton: ev.button, //which mouse button is clicked.
	dblclick: false, //true if double click is used
	key: tool.curkey, //keyboard key pressed.
	tool: tool.name, // Current tool either markupedit (default) or pickpolygon
};
```

### `GUI_Markup`

Connection callback that is called when a markup object is selected.
See chapter on markup objects for information on properties and methods.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markup`: markup object
-   `Created`: Boolean, true if the markup object was just created.

### `GUI_MarkupIndex`

Has the same parameters as GUI_Markup but is only returned when markup is selected using the selectmarkupbyindex method.
See chapter on markup objects for information on properties and methods.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markup`: markup object.

###`GUI_MarkupAreaEdit`

Returns the label text of an Area or space markup when edited.

**Callback Parameters**

The callback function should have the following parameters.

-   `dimtext`: a String representing the label text.

### `GUI_markupdrawParams`

When setting markup dimensions using either applyAngleLength, applyAngleLengthSelected applyWidthHeightSelected or applyWidthHeight this callback event will return the values applied to the markup object.

**Callback Parameters**

The callback function should have the following parameters.

-   `lenghtangle`:- an object with different properties depending on the markup object and the method used.

### `GUI_MarkupHover`

Connection callback that is called when the mouse is moved over a markup object.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markup`: markup object.

See GUI_Markup for more information on how get additional markup information.

### `GUI_MarkupLayers`

Connection callback that gives a list of markup layers. Called during RxView360 startup.

**Additional Methods**

-   `getCurMarkupLayer`: Returns the current markup layer.
-   `getCanChangelayer`: Returns true if the layer can be changed
-   `SetLayerMarkupdisplay`: (numlayer,state) – set markup layer on/off

**Callback Parameters**

The callback function should have the following parameters.

-   `markuplayers`: array of markup layer objects.

```javascript
Layers{
	Layer : number; //layer index
	Name = string; //layer name
	Color = color; //layer color
	display = Boolean; //on/off
}
```

### `GUI_MarkupLink`

Callback event that return the value of link associated with a markup when the user clicks on a markup with a link enabled.

**Callback Parameters**

The callback function should have the following parameters.

-   `MarkupObject`: The markup object that was clicked on.
    Use `markup.getLink().link` to retrieve the link string value.

### `GUI_Markuplist`

Callback event that gives a list of markup objects when markup is changed and when the markup is initially loaded.

**Additional Methods**

-   `getDisplayName`: Returns the markup signature for the current user.
-   `getDisplayDate`: Returns a date string for a given date javascript value.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markuplist`: array of markup objects.

```javascript
Markup{
	type: number, //markup type
	subtype: number, //markup subtype
	alternative: number, // markup alternative
	color : color, //markup color
	fontname : string, // font name
	linewidth : number // width of markup object.
}
```

### `GUI_MarkupLoadComplete`

Connection callback that is called when markup is loaded.

**Callback Parameters**

-   `Nummarkupfiles`: Number of markup files loaded.

### `GUI_markupParamsError`

When setting markup dimensions using either applyAngleLength, applyAngleLengthSelected applyWidthHeightSelected or applyWidthHeight this callback event will return a text string 'outside’ if the values cause the markup to exceed the boundaries of the drawing.

**Callback Parameters**

The callback function should have the following parameters.

-   `onError`: a string

### `GUI_MarkupSave`

Connection callback that is called when markup is saved.

**Callback Parameters**

The callback function takes no parameters.

### `GUI_MarkupUnselect`

Connection callback that is called when a selected markup is unselected.

**Callback Parameters**

The callback function should have the following parameters.

-   `Markup`: markup object

**Example**

```javascript
Markup{
	type: number, //markup type
	subtype: number, //markup subtype
	alternative: number, // markup alternative
	color : color, //markup color
	fontname : string, // font name
	linewidth : number // width of markup object.
}
```

### `GUI_Measurediag`

Connection callback that is called when the measurement function is completed.

**Additional Methods**

-   `getLength(length)`: Returns the length in current measure unit.
-   `getUnitlabel`: Returns current measure label.
-   `getAreaUnitlabel(numlayer,state)`: set markup layer on/off

**Callback Parameters**

The callback function should have the following parameters.

-   `measureresult`: result object.

**Example**

```javascript
Measureresult{

             lengths : array, // array of lengths given with two points.
             angles : array, // array of angles given in radians
			totaldistance :number //total measured distance.
			area : number //measured area.
		}
```

### `GUI_Nav3DreplaceDiag`

Callback event that Returns a list of open files that can be used to perform a compare overlay to create replacement for generic floorplan to use as 2D navigation page. This callback is activated by using nav3Dreplacediag method.

**Callback Parameters**

The callback function should have the following parameters.

-   `OpenfileNames`: Array of open file objects.

**Example**

```javascript
FileObject {
	index: integer // open file index
	Name: string // file name
	Type: integer // document type
	isPDF : Boolean //true if file is PDF
	is3D : Boolean //true if file is 3D
	is2D : Boolean //true if file is 2D
	isImage : Boolean //true if file is image
	state: integer // overlay compare state.
}
```

### `GUI_Notediag`

Connection callback that is called when the note tool is used.

**Additional Methods**

-   ` setText(text)`: Sets the text to be displayed in the note dialog
-   `isAvailable`: Returns true if a note is selected otherwise false.
-   `getText`: Returns text of selected note.

**Callback Parameters**

The callback function should have the following parameters.

-   `Notedata` : the text of the note (string)
-   `Readonly` : if the text in the note is read only or not (Boolean)

### `GUI_NumMathces`

Connection callback that Returns number of matches for a text search.

**Callback Parameters**

The callback function should have the following parameters.

-   `nummatches`: integer value holding number of matches to a search expression.

### `GUI_NumMathcesMarkup`

This callback event is triggered when RxCore.markupTextSearch is used.

**Callback Parameters**

The callback function should have the following parameters.

-   `numMatches`: Number of markups that matches the search.

**Example**

```javascript
RxCore.GUI_NumMathcesMarkup.connect(onGetMatches);

function onGetMatches(numMatches)
console.log(“found ” + numMatches + “ matches”);
}
```

### `GUI_NumMathcesRect`

This callback event is triggered when RxCore.getTextRects is used.

**Callback Parameters**

The callback function should have the following parameters.

-   `numMatches`: An object that contain a matcharray that in turn has the rectangle objects for the search.
-   `Currentpage`: the page where the matches was found.

**Example**

```javascript
RxCore.GUI_NumMathcesRect.connect(onGetMatches);

function createrects(numMatches, currentpage) {
	if (numMatches.matcharray.length > 0) {
		var donextpage = false;
		var nextpage = 0;
		for (var nmi = 0; nmi < numMatches.matcharray.length; nmi++) {
			var padding = { left: 5, top: 5, right: 15, bottom: 15 };

			if (numMatches.matcharray[nmi].page == currentpage) {
				RxCore.markupLinkRect(
					true,
					numMatches.matcharray[nmi].rect,
					currentpage,
					"https://www.rasterex.com/",
					padding
				);
			} else if (numMatches.matcharray[nmi].page > currentpage) {
				donextpage = true;
				nextpage = numMatches.matcharray[nmi].page;
				RxCore.gotoPage(nextpage);
				break;
			}
		}
		if (donextpage) {
			RxCore.getTextRects(numMatches.expr, numMatches.casesens);
		} else {
			RxCore.endGetTextRects();
		}
	}
}

function onGetMatches(numMatches, currentpage) {
	if (numMatches.foxit) {
		return;
	} else {
		createrects(numMatches, currentpage);
	}
}
```

### `GUI_MathcesRectsPage`

This callback event is triggered when RxCore.getTextRects is used with Foxit PDF.

**Callback Parameters**

The callback function should have the following parameters.

-   `numMatches`: An object that contain a matcharray that in turn has the rectangle objects for the search.
-   `Currentpage`: the page where the matches was found.

**Example**

```javascript
RxCore.GUI_MathcesRectsPage.connect(onGetMatches);

function onGetMatches(rects, currentpage) {
	var padding = { left: 5, top: 5, right: 15, bottom: 15 };

	if (rects.length > 0) {
		for (var ri = 0; ri < rects.length; ri++) {
			RxCore.markupLinkRect(
				true,
				rects[ri],
				currentpage,
				"https://www.rasterex.com/",
				padding
			);
		}
	}
}
```

### `GUI_Page`

Connection callback event that is called when a page change happens.

**Callback Parameters**

The callback function should have the following parameters.

`pagingobject`: an object \{
`numpages`– number indicating total number of pages.`currentpage` – number indicating current page.
\};

### `GUI_pagedimLoadComplete`

Connection callback event that is called when a PDF page dimension data has been extracted.

**Callback Parameters**

The callback function should have the following parameters.

-   `FileURL`: The file path of the loaded file.

-   `bActiveFile`: Boolean that indicate if the file is the currently active file.

### `GUI_pageLoadComplete`

Connection callback that is called when a page has been loaded

**Callback Parameters**

The callback function should have the following parameters.

-   `Pagenumber`: 0 indexed page number

## `GUI_pagethumb`

Connection callback that is called when a file is loaded. Used to display page image thumbnail for a single page.

**Callback Parameters**

The callback function should have the following parameters.

-   `Thumbnail`:an object with \{
    `thumbnail` – canvas element holding the complete thumbnail.
    `Image` – html image of the thumbnail.
    `canvasSource` – canvas element holding the page image.
    `source` – string containing URL to a thumbnail image.
    `name` - string containing page name.
    `number` – 0 indexed page number
    `displaynum` – 1 indexed page number
    `draw` – function used to draw the thumbnail.
    \}

### `GUI_pagethumbs`

Connection callback that is called when a file is loaded. Used to display page image thumbnails.

**Additional Methods**

-   `getHeight`: Returns the height of the canvas.
-   `hasmarkup(page)`: Returns true if the page has markup, false if not.

**Callback Parameters**

The callback function should have the following parameters.

-   `thumbnails`: array of thumbnail objects.

**Example**

```javascript
Thumbnail{
thumbnail – canvas element holding the complete thumbnail.
Image – html image of the thumbnail.
canvasSource – canvas element holding the page image.
source – string containing URL to a thumbnail image.
name - string containing page name.
number – 0 indexed page number
displaynum – 1 indexed page number
draw – function used to draw the thumbnail.
}
```

### `GUI_PanUpdate`

Callback event that is triggered when a pan operation is performed. Used to synchronize pages opened in two different instances of RxCore.

**Callback Parameters**

The callback function should have the following parameters.

-`X`: Offset left -`Y`: Offset top -`pagerect`: object

**Example**

```javascript
var pagerect = {
x : //upper left position of page.
y : //upper left position of page.
w : //width of page
h : //height of page
};
```

### `GUI_PanUpdated`

Callback event that is triggered when a pan operation is completed.

**Callback Parameters**

The callback function should have the following parameters.

-   `X`: Offset left
-   `Y`: Offset top
-   `Pagerect`: object.

```javascript
var pagerect = {
x : //upper left position of page.
y : //upper left position of page.
w : //width of page
h : //height of page
};
```

### `GUI_Permissions`

Connection callback event that return if the current user has permission to perform consolidation. This is used to control if GUI elements related to consolidation is displayed or not.

**Callback Parameters**

-   `Permission`: object.

```javascript
Permission {
consolidate : Boolean //if true user can perform markup consolidation.
}
```

### `GUI_PrintRect`

Callback Returns a rectangle object for the selected area.

**Callback Parameters**

`Rect` = \{double x, double y, double w, double h\}

A rectangle object with x, y, w, h parameters for start point and width and height of rectangle in document coordinates.

**Example**

```javascript
RxCore.GUI_PrintRect.connect(function (rect) {
	var paperSize = {
		width: width,
		height: heigth,
		printrect: rect,
		mode: paper_orientation.mode,
	};
	RxCore.printSizeEx("printcanvas.htm", paperSize);
});
```

### `GUI_Read3DComplete`

Connection callback event that notify when all blocks in a 3D file is read. Use this to know when the 3D data is ready for interaction.

**Callback Parameters**

This callback has no parameters.

### `GUI_Ready`

Callback event called when the RxCore is ready for interaction. Use this to perform tasks when the page loads.

**Callback Parameters**

-   `Initdoc`: object

```javascript
Initdoc{
url : string, //,URL to a file to open on startup
open : Boolean // true if a file to open is available
custom : Boolean // true if openFileCustom is to be used.
}
```

### `GUI_Resize and GUI_Resize_ext`

Callback called when canvas is resized. The ext version is called when resize is set from an external source.

**Callback Parameters**

The callback function should have the following parameters.

-   `canvassize`: width and height of canvas given as canvassize.w and canvassize.h

### `GUI_RotatePage`

Connection callback that notify when a rotation operation has completed.

**Callback Parameters**

The callback function should have the following parameters.

-   `degree`
-   `pagenumber`

### `GUI_search3Denabled`

Callback event that triggers when the 3D model is loaded, and 3D search is possible.

**Callback Parameters**

The callback function should have the following parameters.

-   `URL`: File URL of the loaded 3D model.
-   `Active`: File is active if true.

### `GUI_Stamps`

Connection callback that list the texts for markup stamps. Called during RxView360 startup.

**Callback Parameters**
The callback function should have the following parameters.

-   `stamps` : array of stamp strings.

### `GUI_State`

Connection callback that is called when RxView360 has a state change. Currently apply to file load and page change. (For page change now use the new GUI_Page callback)

**Callback Parameters**

The callback function should have the following parameters.

-   `stateojb`: object with state attributes.

````javascript
stateobj = {
isPDF : Boolean //true if file is PDF
is3D : Boolean //true if file is 3D
is2D : Boolean //true if file is 2D
numpages : number // number of pages
currentpage : number // currently active page
}```

### `GUI_Symbols`

Connection callback that Returns symbol library data when a symbol interface function is called. Apply to

`RxCore.getSymbolLibNum`
`RxCore.getSymbolLibPNGData`
`RxCore.getSymbolName`
`RxCore.getnumSymbols`
`RxCore.selectSymbName`
`RxCore.selectSymblib`

**Callback Parameters**

The callback function should have the following parameters.

-   `symbolinfo`: an object with type-number, data:Numlibs

**Example**

```javascript
var symbolinfo = { type: 1, data: Numlibs };
var symbolinfo = { type: 2, data: libname };
var symbolinfo = { type: 3, data: numsymbols };
var symbolinfo = { type: 4, data: symbolName };
var symbolinfo = { type: 5, data: symbolPNGData, index: sname };
var symbolinfo = { type: 6, data: num };
````

### `GUI_TextCopied`

This callback events Returns the text when using the Foxit text selection tool.

**Callback Parameters**

The callback function should have the following parameters.

-   `OriginalURL`: the URL of the document,
-   `Text`: a string holding the selected text.

**Example**

```javascript
RxCore.GUI_TextCopied.connect(function (fileurl, text) {
	copyToClipboard(text)
		.then(function () {
			console.log("OK");

			/*if (thispage.DocRef.foxitdoc != null) {
			thispage.DocRef.foxitdoc.removeTextSelect(thispage.textselectobj);
		}*/
		})
		.catch(function (error) {
			console.log("Failed");
		});
});
```

### `GUI_Textdiag`

Connection callback called when the markup text tool is used.

**Additional Method**

-   `setText(text)`: Set text of selected text markup.

**Callback Parameters**

The callback function should have the following parameters.

-   `text` : the text of the text markup element.

### `GUI_TextInput`

Connection callback used to connect markup text to an html input control.

**Additional Methods**

-   `getText()`: Returns text of selected text markup.
-   `setText(text)`: Set text of selected text markup.

**Callback Parameters**

The callback function should have the following parameters.

-   `textrect`: A rectangle object indication position and size of markup text box.
-   `operation`: object with operation status values.

**Example**

```javascript
operation = {
	start: false,
	create: false,
	edit: false,
	save: false,
};
```

### `GUI_UndoRedoEmpty`

When undo or redo list is empty this callback event is called.

**Callback Parameters**

This callback Returns two Boolean values.

-   `bundoempty`: if true there are no more undo actions.
-   `bredoemtpy`: if true there are no more redo actions.

**Example**

```javascript
RxCore.GUI_UndoRedoEmpty.connect(function (bundoempty, bredoemtpy) {
	if (bundoempty) {
		console.log("undo list empty");
	}
	if (bredoemtpy) {
		console.log("redo list empty");
	}
});
```

### `GUI_UpdatebirdsEye`

Callback event that Returns data when the Bird’s eye is updated.

**Callback Parameters**

-   `None`: this callback has no parameters.

### `GUI_Upload`

Connection callback called when a file upload is in progress.

**Callback Parameters**

The callback function should have the following parameters.

-   `upload`: Either a string with values “show” or “hide” that can be used to hide or display the html element or an integer value indicating the progress of the download.

### `GUI_Users`

Connection callback called when the RxCore_MarkupUserdialog or RxCore_MarkupToolsmethod is called.

**Additional Methods**

-   `getSignature`: return signature for current user.
-   `setSignature(sign)`: Set current user signature.
-   `getCanChangeSign`: return true if user signature can be changed.
-   `SetUserMarkupdisplay (numuser,state)`: Turn display of markup for user on/off

**Callback Parameters**

The callback function should have the following parameters.

-   `Userlist`: array of user objects.

**Example**

```javascript
User{
display : Boolean //user markup on/off
DisplayName : string //user display name
}
```

### `GUI_VectorBlocks and GUI_VectorBlocksLoaded`

Connection callback called when a file containing vector blocks is loaded. `GUI_VectorBlocksLoaded` is called only once on initial file load where as `GUI_VectorBlocks` is called when there is change of vector block states.

**Additional Method**

-   `getHeight`: return height of canvas

**Callback Parameters**

The callback function should have the following parameters.

-   `vectorblocks`: array of vector block objects.

**Example**

```javascript
blockobject{
index : number // index of block
name = string // name of block
state = Boolean //display on/off
}
```

### `GUI_VectorLayers`

Connection callback called when a file containing vector layers is loaded.

**Additional Method**

-   `getHeight`: return height of canvas.

**Callback Parameters**

The callback function should have the following parameters.

-   `vectorlayers`: array of vector layer objects.

**Example**

```javascript
layerobject{
index : number // index of layer
name = string // name of layer
state = Boolean //display on/off
color = color // layer color

}
```

### `GUI_ZoomUpdate`

Callback event that is triggered when a Zoom operation is performed. Used to synchronize pages opened in two different instances of RxCore.

**Callback Parameters**

The callback function should have the following parameters.
These can be used directly with `zoomPageUpdate` method.

-   `Zoomparams`: Zoom operation parameters .
-   `Type`: Type of zoom operation.

    0 = Zoom in
    1 = Zoom out
    2 = zoom window
    3 = zoom all
    4 = zoom width
    5= zoom height

### `GUI_ZoomUpdated`

This callback event is triggered when a zoom change has completed.

**Callback Parameters**

The callback function should have the following parameters.
These can be used directly with `zoomPageUpdate` method.

-   `Zoomparams`: Zoom operation parameters .
-   `Type`: Type of zoom operation.

    0 = Zoom in
    1 = Zoom out
    2 = zoom window
    3 = zoom all
    4 = zoom width
    5= zoom height

### `Markup object`

Some callbacks return a single, or array of markup objects.
You can access information on this objects by using methods and properties.

-   `Markup`: onbject \{
    `type`: number, //markup type
    `subtype`: number, //markup subtype
    `alternative`: number, // markup alternative
    `color` : color, //markup color
    `fontname` : string, // font name
    `linewidth` : number // width of markup object.
    `signature` : string //name of the user who created the markup
    `markupnumber` : number //A number unique to the current markup set.
    `dimtext` : string // For measurement markups this Returns the value.
    `layer` : number // the markup layer for the markup
    `pagenumber` : number // 0 indexed page number where the markup is placed.
    \}

**Markup object methods**

The Markup object support some methods that can be used to set custom attributes that will be retained in the markup xml when saved to file.

`AddAttribute`:Use to add custom attributes to the markup that will be retained when saved to file.

Returns NA

**Syntax**

```javascript
Markup.AddAttribute(szName, szValue);
```

**Parameters**

-   `szName`: Attribute name
-   `szValue`: Attribute value

`ClearAttributes`Use to clear custom attributes.

**Syntax**

```javascript
Markup.ClearAttributes();
```

**Parameters** None
Returns NA

`GetAttributes`: Use to get the current custom attributes.

Syntax

```javascript
Markup.GetAttributes();
```

**Parameters** None

Returns Custom attributes Array containing current custom attributes.

### `getcount`

For count type markups Returns the count value

**Syntax**

```javascript
Markup.getcount();
```

**Parameters** None

Returns Number The count number.

### `getLink`

Gets an object with properties related to link associated with the markup

**Syntax**

```javascript
Markup.getLink();
```

**Parameters** None

Returns Object with properties. bCanHaveLink : true if the markup supports links.

-   `link` : the link if set.

-   `bhavelink` : true if the markup has a link set.

### `getMarkupType`

Use to get a string describing the markup type

**Syntax**

```javascript
Markup.getMarkupType();
```

**Parameters** None

Returns Object with additional properties label : Markup type description.

-   `type` : Upper case name of the type.

### `getselected`

Returns true if the markup is currently selected.

**Syntax**

```javascript
Markup.getselected();
```

**Parameters** None

Returns Boolean true= selected

### `getUniqueID`

Use to get a unique id of the markup if set.
Syntax Markup.getUniqueID()
Parameters None
Returns ID Unique ID value for the markup object.

### `ConsolidateList`

Use this method to add markup objects to an array to be consolidated.

**Syntax**

```javascript
Markup.ConsolidateList(settingsobject, last);
```

**Parameters**

`settingsobject`: Settingsobject = \{

`changeStrokeColor` : boolean, if true the markup object line color is changed to the color given by the strokecolor value.

`changeTexColor` : boolean, if true the markup object text color is changed to the color given by the textcolor value.

`changeLayer` : boolean, if true the markup object layer is changed to the layer given by the layer value.

`strokecolor` : html hex color,override line color

`textcolor` : html hex color, override text color

`layer` : integer, override markup layer

\}

-   `last`: Boolean value that if true will start the consolidation process on all markup objects in the list.

Returns NA

### `setLink()`

Associate a link with the markup object.

**Syntax**

```javascript
Markup.setLink();
```

**Parameters**

-   `link`: A string that is used as a link. Can be a url

-   `Bhavelink`: Set to true to activate the link.

Returns N/A

### `setUniqueID`

Use to set a unique ID for the markup object.

**Syntax**

```javascript
Markup.setRxUniqueID(ID);
```

**Parameters**

-   `ID`: An ID that needs to be unique.

Returns N/A

### `setRxUniqueID`

Use to set a unique ID for the markup object using the RxView360 server method.

**Syntax**

```javascript
Markup.setRxUniqueID();
```

**Parameters** None

Returns N/A

### `Appendix B`

**Notes** on XML redline configuration file.
To control the redlining information on a web system you can set transfer configuration in an file

**These are the available tags and their meaning**

```xml
<!—Top node 
<XML*RXCLIENTVIEW_INFO>
<!— Config info sub tag. 
<CONFIG_INFO>
<!— Contain the following sub tags 
<!— User layer contain a numerical value equal to the user layer number to use 
<USER_LAYER>1</USER_LAYER>
<!— User color contain a hex RGB value value equal to the color to use 
<USER_COLOR>0xff0000</USER_COLOR>
<!— User signature contain a string value for the user signature 
<USER_SIGNATURE>Frank</USER_SIGNATURE>
<!— If not FALSE, the user can change previous saved comments 
<USER_IGNOREMARKUP>TRUE</USER_IGNOREMARKUP>
<!— If TRUE disables saving of markup (even if save dialog is off)
<USER_EDITOLDCOMMENTS >FALSE</USER_EDITOLDCOMENTS >
<!— If TRUE the user can change the markup color
<USER_CHANGECOLOR>FALSE</USER_CHANGECOLOR>
<!— If TRUE the user can change the markup layer
<USER_CHANGELAYER>FALSE</USER_CHANGELAYER>
<!— If TRUE the user can delete all markup entities created by other users
<USER_DELETE>TRUE</USER_DELETE>
<!— If TRUE the user has Administrator privileges and can perform consolidation 
<USER_ADMINISTRATOR>FALSE</USER_ADMINISTRATOR>
<!— If TRUE the user can change settings in the Markup Settings dialog 
<USER_MARKUPSETTINGS>TRUE</USER_MARKUPSETTINGS>
<!— User markupfile is an URL to the redline file to save. May need to include user id and password
<USER_MARKUPFILE>http://uid:pwd@www.myweb.com/test.xcm</USER_MARKUPFILE>
<!— USER_MARKUPPOSTURL is an alternative way to transmit markup data to server using POST instead of PUT. Use the included MarkupPost.DLL to handle the POST data as shown below. USER* MARKUPFILE cannot be used together with USER_MARKUPPOSTURL 
<USER_MARKUPPOSTURL>http://www.myweb.com/rxbin/MarkupPOST.dll/Save?C:\\Program%20Files\\Rasterex\\RxViewServer\\samples\\&myfile.dwg.demo.xcm</USER_MARKUPPOSTURL>
<!— Other configuration settings will be supported. 
</CONFIG_INFO>
<!— Layer info sub tag.(optional) Use to define markup layers.
<LAYER_INFO>
<LAYER number="0" name="Plumbing" visible="TRUE" editable="TRUE" color="0x0000FF"/>
<LAYER number="1" name="Engineering" visible="TRUE" editable="TRUE" color="#0000ff"/>
</LAYER_INFO>
<!— Load info sub tag. 
<LOAD_INFO>
<!— Image info sub tag holds one sub tag URL with the URL to the file to load. 
<IMAGE_INFO>
<URL>http://www.rasterex.com/activex/test.dwf</URL>
</IMAGE_INFO>
<!— Markup info sub tag holds MARKUP_URL sub tags with the URLs to the redline files to load. 
<MARKUP_INFO>
<MARKUP_URL>http://test-3-xp.rasterex.com/Markup/test.xcm</MARKUP_URL>
<MARKUP_URL>http://test-3-xp.rasterex.com/Markup/test2.xcm</MARKUP_URL>
<MARKUP_URL>http://test-3-xp.rasterex.com/Markup/new.xcm</MARKUP_URL>
</MARKUP_INFO>
</LOAD_INFO>
</XML_RXCLIENTVIEW_INFO>
```

### `Appendix C`

These are supported mime that can be used with RxCore.openFile method.

Solidworks
• application/slddrw
• application/sldprt
• application/sldasm

Acrobat PDF
• application/pdf
• application/x-pdf

IFC
• application/x-extension-ifc

AutoCAD DWG
• application/dwg
• application/acad

MS Office word
• application/vnd.openxmlformats-officedocument.wordprocessingml.document
• application/msword

MS Office PowerPoint
• application/vnd.openxmlformats-officedocument.presentationml.presentation
• application/vnd.ms-powerpoint

MS Office Excel
• application/vnd.openxmlformats-officedocument.spreadsheetml.sheet
• application/vnd.ms-excel

Autodesk Inventor
Drawing
• application/idw
Part
• application/ipt
Assembly
• application/iam

\Image formats

• image/tiff
• image/png
• image/jpeg
• image/gif
• image/cgm
• image/bmp
• image/x-pcx
• image/x-icon
• image/webp

Visio (only supported by LibreOffice)

• application/vnd.visio
• application/vnd.visio2013

```

```

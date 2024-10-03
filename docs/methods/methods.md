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

When using a markup drawing tool that supports setting angle and length of a line, this can be used to override the mouse input and set angle and length using parameters. Values are in degrees and current active measurement unit. Works in conjunction with GUI_markupdrawParams event callback that returns the values set or GUI_markupParamsError that will be called if values exceed drawing boundaries

Returns NA

**Parameters**

-   `angle`: Direction to draw the line in current active measurement unit. Ex mm
-   `length`: Length of the line in current active measurement unit. Ex mm.
-   `bAdvance`: If markup has multiple segments and this is true the active segment will be the next two points. If false the active segment will remain the current segment.

**Syntax**

```javascript
RxCore.applyAngleLength(angle, length, bAdvance);
```

---

    More document content updating.....

---

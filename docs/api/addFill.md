---
id: addFill
title: addFill
sidebar_label: addFill
---

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

---
id: applyAngleLength
title: Apply Angle Length
sidebar_label: applyAngleLength
---

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

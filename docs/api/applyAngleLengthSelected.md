---
id: applyAngleLengthSelected
title: Apply Angle Length Selected
sidebar_label: applyAngleLengthSelected
---

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

---
id: applyWidthHeightSelected
title: Apply Width Height Selected
sidebar_label: applyWidthHeightSelected
---

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

---
id: applyWidthHeight
title: Apply Width Height
sidebar_label: applyWidthHeight
---

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

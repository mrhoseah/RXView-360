---
id: methods
title: RxView360 API Methods
sidebar_label: API Methods
---

### `add3DViewAttribute`

Adds a custom attribute to a 3D view.

**Parameters**:

-   `szname`: Name of the custom attribute (string)
-   `szvalue`: Value of the custom attribute (string)
-   `viewname`: Name of the 3D view (string)

**Example**:

```javascript
RxCore.add3DViewAttribute("description", "my description", annotitem.name);
```

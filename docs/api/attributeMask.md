---
id: attributeMask
title: Attribute Mask
sidebar_label: attributeMask
---

### `attributeMask`

For vector files with blocks that have attributes you can set a search expression to limit the returned attributes.

Returns NA

**Syntax**

```javascript
RxCore.attributeMask(attributeLoadMask);
```

**Parameters**

-   `attributeLoadMask`: String with wildcard “_” to match a list of attribute names. Ex “area_” matches all block names that begin with “area”.

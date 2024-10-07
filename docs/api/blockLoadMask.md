---
id: blockLoadMask
title: Block Load Mask
sidebar_label: blockLoadMask
---

### `blockLoadMask`

For vector files with blocks you can limit the listed blocks in the blocks list by applying a selection mask.

Returns NA

**Syntax**

```javascript
RxCore. blockLoadMask (BlockLoadMask)`
```

**Parameters**

-   `BlockLoadMask`: String with wildcard “_” to match a list of block names. Ex “area_” matches all block names that begin with “area”.

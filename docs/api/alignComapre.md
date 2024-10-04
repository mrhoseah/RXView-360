---
id: alignCompare
title: Align Compare
sidebar_label: alignCompare
---

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

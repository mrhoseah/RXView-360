---
id: addGltftoDoc
title: addGltftoDoc
sidebar_label: addGltftoDoc
---

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

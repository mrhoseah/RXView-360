---
id: how-to-add-to-html
title: How to add to HTML
sidebar_label: How to add to HTML
---

### How to add to HTML

Add rxcorefunctions.min.js as a javascript reference in the header of the html document.

```html
<script
	type="text/javascript"
	src="rxcorefunctions.min.js"
	charset="utf-8"
></script>
```

Default RxCore object will look for a div with ID ‘rxcontainer’.
You can also specify any div by passing the ID of this div in the RxCore.initialize() method along with a class name that is referenced in a style sheet with the properties listed below

You can create multiple instances of RxCore by assigning a variable to the result of a call to

```javascript
RxCoreMulti();
```

```html
<div id="rxcontainer">
	This should have the following css declaration referenced to the main html
	document
</div>
```

```css
#rxcontainer {
	position: relative;
	width: 100%;
	height: 100%;
	display: block;
	margin: 0;
	padding: 0;
	border: 0;
	float: left;
}
```

The following css styles for canvas elements also need to be declared in one of the referenced stylesheet files.

```css
#rxcanvas {
	border: 1px solid #000;
}
#imageDisp {
	position: absolute;
	top: 1px;
	left: 1px;
}
#imageTemp {
	position: absolute;
	top: 1px;
	left: 1px;
}
#canv3D {
	position: absolute;
	top: 1px;
	left: 1px;
	background: -webkit-linear-gradient(#ffffff, #b5b5b5);
	/* For Safari 5.1 to 6.0 */
	background: -o-linear-gradient(#ffffff, #b5b5b5);
	/* For Opera 11.1 to 12.0 */
	background: -moz-linear-gradient(#ffffff, #b5b5b5);
	/* For Firefox 3.6 to 15 */
	background: linear-gradient(#ffffff, #b5b5b5);
	/* Standard syntax */
}
```

---
id: foxit-web-sdk
title: Foxit web SDK
sidebar_label: Foxit web SDK
---

### Foxit web SDK

For the Foxit version we use an additional iframe used for Foxit PDF display. This must be included under the `rxcontainer` `<div>` and use the `foxpage.html` as the source.

```html
<iframe
	id="foxitframe"
	src="foxpage.html"
	width="100%"
	height="100%"
	style="position: absolute; top: 0px; left: 0px; z-index: 2; visibility: visible;"
></iframe>
```

`Foxpage.html` references an open-source class that provides the connection with the Foxit web SDK called iframefoxit.js this uses methods from the Foxit web SDK. See the included Foxit web SDK documentation for details on Foxit web SDK methods.

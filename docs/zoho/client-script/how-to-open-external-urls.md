---
title: How to Open External URLs
---

There may be a scenario where you want to open an external link within the client script code.
This doesn't seem to be documented anywhere, but I finally found out how through a very nice answer on the Zoho forums.

You can open a link directly with this code:
```js
$Client.openURL("https://thisisalink.com");
```
This will open the URL as soon as the code runs. Usually, you would want to add this inside of an if statement or something, but that's how it's done.


To make buttons function you can also use this. Here is an example:
```js
const isPressed = ZDK.Client.showConfirmation("https://thisisalink.com", "Visit Page",  "Cancel");
if (isPressed) {
    $Client.openURL("https://thisisalink.com");
}
```


<p class="section-text">Customizations</p>

# Testing

We have two testing environments in Strata UI

## Testing Area 1 - `testing-area` folder

**Use this as the main testing area**

This folder has a one column layout html page and a two column layout html page. These pull the most recently built files from `dist` into the HTML.

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" href="../../dist/css/index.css" />
  <script src="../../dist/js/scripts.js" defer=""></script>
  <title>One Column Layout</title>
</head>
```

Here we can test the actual custom HTML tags and ensure that they are correctly changed in the browser DOM. Use this testing area in conjunction with your browser inspector to ensure it works as expected.

## Testing Area 2 - `html-template` folder

This folder has all the different widgets and structural items as React components.

### `layouts` folder

This folder has the one column and two column layouts.

### `_includes` folder

This folder contains the widgets and grid components for Strata UI.

```js
// OneColumn.tsx
import React from "react";
import ReactDOMServer from "react-dom/server";
import Header from "../_includes/Header";
import FirstColContent from "../_includes/FirstColContent";
import Footer from "../_includes/Footer";

export default function OneColumn(): string {
  const htmlString = ReactDOMServer.renderToStaticMarkup(
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="../css/index.css" />
        <script src="../js/scripts.js" defer></script>
        <title>One Column Layout</title>
      </head>
      <body>
        <Header />
        <FirstColContent />
        <Footer />
      </body>
    </html>
  );
  return `<!DOCTYPE html>${htmlString}`;
}
```

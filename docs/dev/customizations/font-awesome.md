<p class="section-text">Customizations</p>

# Font Awesome

Font Awesom Icons for Strata UI

## Javascript

The Typescript that is converted to Javascript, takes the document `<head>` and inserts the link to the Font Awesome CDN so that icons are enabled in the page.

The CDN link path is in the _ts > modules > addFontAwesome.ts_ file.

```js
import { fontAwesomeVersionNum } from "../config";

// Create a link element
const fontAwesomeLink: HTMLLinkElement = document.createElement("link");

// Get the document head
const documentHead: HTMLElement = document.head;

// Define the Font Awesome CDN URL
const fontAwesomeCdn: string = `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/${fontAwesomeVersionNum}/css/all.min.css`;

// Add Font Awesome attributes and add the link to the document head
fontAwesomeLink.setAttribute("href", `${fontAwesomeCdn}`);
fontAwesomeLink.setAttribute("rel", "stylesheet");

// Append the link to the document head
documentHead.appendChild(fontAwesomeLink);
```

### Changing Version Number

To change the version number, you can change it in _ts > modules > config.ts_ file.

```js
// Edit Font Awesome Version Number
export const fontAwesomeVersionNum: string = "6.5.2";
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

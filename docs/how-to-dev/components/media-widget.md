# Media Widget 

The `media widget` is used to help ensure that embeded iframes are responsive and sized appropriately.

## HTML 

The structure for the `media widget` relies on custom tags that are nested in a specifc order. 

- The `<media-widget>` tag wraps all the content. 
- The `<media-object>` tag wraps the `iframe` only.
- The `<media-info>` tag wraps any text, that is related to the media. _(This portion of the widget is optional)_

```html
<media-widget>
  <media-object>
    <iframe>
      </iframe>
  </media-object>
  <!-- Media Info is optional -->
  <media-info>
    <p>Video description</p>
  </media-info>
  <!-- -------------------------- -->
</media-widget>
```


## CSS 

The styles for the `media widget` are based off of the tags used. 

### Utility Classes

There are two utility classes used for the `media widget`. 

1. Aspect Ratio Utility Classes 

Some videos have different aspect ratios and require more or less padding for the `iframe` area. Use the following classes to help resize the `iframe` window. Apply these classes to the `<media-widget>` tag.

```css
.ratio-4x3 {
  padding-bottom: 75% !important;
}

.ratio-4x3-content {
  padding-bottom: 78% !important;
}

.ratio-3x2 {
  padding-bottom: 66.66% !important;
}

.ratio-8x5 {
  padding-bottom: 62.5% !important;
}

.ratio-1x1 {
  padding-bottom: 100% !important;
}
```

2. Reverse Text Location Utility Class

The text for the `media-info` section is located at the bottom of the `iframe` by default. To have the text located at the top, add this class to the `<media-widget>` tag.

```css
.reverse {
    flex-direction: column-reverse;
  }
```


## JS 

The JavaScript associated with this widget is for applying custom aria attributes for better accessibility. 

```js
// Define a constant for media widgets, selecting all elements with the tag "media-widget"
const mediaWidgets: NodeListOf<HTMLDivElement> = document.querySelectorAll("media-widget");

// Define a function to add ARIA attributes to media widgets
const addMediaWidgetsAria = (): void => {
  // Iterate over each media widget
  mediaWidgets.forEach((eachMediaWidget: HTMLElement, index: number) => {
    // Generate a unique ID for each media widget container based on its index, converting to a letter
    let mediaLoopId: string = String.fromCharCode(index + 65).toLowerCase();
    // Select the media object within the current media widget container
    let mediaObject: HTMLElement | null = eachMediaWidget.querySelector("media-object");
    // Select the iframe within the current media widget container
    let mediaIframe: HTMLElement | null = eachMediaWidget.querySelector("iframe");
    // Select the media info within the current media widget container
    let mediaInfo: HTMLElement | null = eachMediaWidget.querySelector("media-info");

    // Check if the iframe exists within the current media widget container
    if (!mediaIframe) {
      console.warn("Document error: no iframe found for media widget");
    }
    // Check if the media object exists within the current media widget container
    if (!mediaObject) {
      console.warn("Document error: no media object found for media widget");
    }

    // If the iframe does not have an "aria-describedby" attribute and there is a media info element
    if (mediaIframe && !mediaIframe.hasAttribute("aria-describedby") && mediaInfo) {
      // Set the "aria-describedby" attribute of the iframe to the generated ID
      mediaIframe.setAttribute("aria-describedby", `${mediaLoopId}`);
      // Set the ID of the media info element to the generated ID
      mediaInfo.id = `${[mediaLoopId]}`;
    }
  });
}

// Call the function to add ARIA attributes if media widgets are present
if (mediaWidgets.length > 0) { addMediaWidgetsAria(); }
```
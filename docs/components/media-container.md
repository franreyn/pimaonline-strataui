# Media Container Widget 

The `media container widget` is used to help ensure that embeded iframes are responsive and sized appropriately.

## HTML 

The structure for the `media container widget` relies on custom tags that are nested in a specifc order. 

- The `<media-container>` tag wraps all the content. 
- The `<media-object>` tag wraps the `iframe` only.
- The `<media-info>` tag wraps any text, that is related to the media. _(This portion of the widget is optional)_

```html
<media-container>
  <media-object>
    <iframe>
      </iframe>
  </media-object>
  <!-- Media Info is optional -->
  <media-info>
    <p>Video description</p>
  </media-info>
  <!-- -------------------------- -->
</media-container>
```


## CSS 

The styles for the `media-container widget` are based off of the tag used. 

### Utility Classes

There are two utility classes used for the `media container widget`. 

1. Aspect Ratio Utility Classes 

Some videos have different aspect ratios and require more or less padding for the `iframe` area. Use the following classes to help resize the `iframe` window. 

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

The text for the `media-info` section is located at the bottom of the `iframe` by default. To have the text located at the top, add this class to the `<media-container>` tag.

```css
.reverse {
    flex-direction: column-reverse;
  }
```


## JS 

The JavaScript associated with this widget is for applying custom aria attributes for better accessibility. 

```js
// Define a constant for media containers, selecting all elements with the class "media-container"
const mediaContainers: NodeListOf<HTMLDivElement> = document.querySelectorAll("media-container");

// Define a function to add ARIA attributes to media containers
const addMediaContainersAria = (): void => {
  // Iterate over each media container
  mediaContainers.forEach((eachContainer: HTMLElement, index: number) => {
    // Generate a unique ID for each container based on its index, converting to a letter
    let mediaLoopId: string = String.fromCharCode(index + 65).toLowerCase();
    // Select the media object within the current container
    let mediaObject: HTMLElement | null = eachContainer.querySelector("media-object");
    // Select the iframe within the current container
    let mediaIframe: HTMLElement | null = eachContainer.querySelector("iframe");
    // Select the media info within the current container
    let mediaInfo: HTMLElement | null = eachContainer.querySelector("media-info");

    // Check if the iframe exists within the current container
    if (!mediaIframe) {
      console.warn("Document error: no iframe found for media container");
    }
    // Check if the media object exists within the current container
    if (!mediaObject) {
      console.warn("Document error: no media object found for media container");
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

// Call the function to add ARIA attributes if media containers are present
if (mediaContainers.length > 0) { addMediaContainersAria(); }
```
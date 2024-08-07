<p class="section-text">Widgets</p>

# Media Container

A responsive wrapper that holds all media content such as videos, iframes, or interactive embedded items.

## How to Use

1. Add the `<media-widget>`. This acts as a wrapper around the media content and media info.
2. Add the `<media-object>` around the media content.
3. Add the `<iframe>` within the `<media-object>`. This will usually be code that you copy and paste from a 3rd party technology. (YouTube, PlayPosit, h5p, etc.)
4. Optionally, you can add a `<media-info>` to add text that describes the media content. To add `<media-info>`, add it outside of the `<media-object>` container, but within the `<media-widget>` container.

### HTML Example

```html
<media-widget>
  <media-object>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </media-object>
  <media-info>
    <p>This is a description of the video</p>
  </media-info>
</media-widget>
```

### Preview

<div class="example-container">
<media-widget>
  <media-object>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </media-object>
  <media-info>
    <p>This is a description of the video</p>
  </media-info>
</media-widget>
</div>

## CSS

The styles for the media widget are based off of the tags used.

### Utility Classes

There are two utility classes used for the media widget.

#### Aspect Ratio Utility Classes

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

#### Reverse Media Info

You can use the `reverse` class on the `<media-widget>` tag to make the `<media-info>` content appear before the video instead of at the bottom after the video.

```html
<media-widget class="reverse">
  <!-- more html here -->
</media-widget>
```

```css
media-widget {
  border: 1px solid;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 100%;
  margin: 2rem auto;
  padding: 0.3rem;
  border-radius: var(--subtle-radius);

  &.reverse {
    flex-direction: column-reverse;
  }

  media-object {
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 55%;
    position: relative;
    width: 100%;

    iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  media-info {
    padding: 0.8rem 0;
    width: 100%;

    p {
      margin: 0;
    }

    .ratio-16x9 {
      padding-bottom: 56.25% !important;
    }
  }
}

@media screen and (min-width: 890px) {
  media-widget {
    max-width: 90%;
  }
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
};

// Call the function to add ARIA attributes if media widgets are present
if (mediaWidgets.length > 0) {
  addMediaWidgetsAria();
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

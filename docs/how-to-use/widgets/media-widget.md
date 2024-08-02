<p class="section-text">Widgets</p>

# Media Container

A responsive wrapper that holds all media content such as videos, iframes, or interactive embedded items.

## How to Use

1. Add the `<media-widget>`. This acts as a wrapper around the media content and media info.
2. Add the `<media-object>` around the media content.
3. Add the `<iframe>` within the `<media-object>`. This will usually be code that you copy and paste from a 3rd party technology. (YouTube, PlayPosit, h5p, etc.)
4. Optionally, you can add a `<media-info>` to add text that describes the media content. To add `<media-info>`, add it outside of the `<media-object>` container, but within the `<media-widget>` container.

### Utility Classes

There are two utility classes used for the `media widget`.

#### Aspect Ratio Utility Classes

Some videos have different aspect ratios and require more or less padding for the `iframe` area. Use the following classes to help resize the `iframe` window. Apply these classes to the `<media-widget>` tag.

These classes are in order of largest to smallest padding.

1. `ratio-1x1` - bottom padding of 100%
2. `ratio-4x3-content` - bottom padding of 78%
3. `ratio-4x3` - bottom padding of 75%
4. `ratio-3x2` - bottom padding of 66.66%
5. `ratio-8x5` - bottom padding of 62.5%

#### Reverse Media Info

You can use the `reverse` class on the `<media-widget>` tag to make the `<media-info>` content appear above the video instead of beaneath the video.

```html
<media-widget class="reverse">
  <!-- more html here -->
</media-widget>
```

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

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

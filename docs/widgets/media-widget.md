<p class="section-text">Widgets</p>

# Media Container

A responsive wrapper that holds all media content such as videos, iframes, or interactive embedded items.

## How to Use

1. Add a `<div>` with `class="media-widget"`. This acts as a wrapper around the media content and media info.
2. Add the `class="media-object"` around the media content.
3. Add the `<iframe>` element within the container that has `class="media-object"`. This will be where you copy and paste from a 3rd party technology. (YouTube, PlayPosit, h5p, etc.)
4. Optionally, you can add a `<div>` with `class="media-info"` to add text that describes the media content. Add this container outside the `media-object` container, but within the `media-widget` container.

### Utility Classes

There are two utility classes used for the media widget.

#### Aspect Ratio Utility Classes

Some videos have different aspect ratios and require more or less padding for the `iframe` area. Use the following classes to help resize the `iframe` window. Apply these classes to the `media-object` container.

These classes are in order of the largest to the smallest padding.

1. `ratio-1x1` - bottom padding of 100%
2. `ratio-4x3-content` - bottom padding of 78%
3. `ratio-4x3` - bottom padding of 75%
4. `ratio-3x2` - bottom padding of 66.66%
5. `ratio-8x5` - bottom padding of 62.5%

#### Reverse Media Info

You can use the `reverse` class on the `media-widget` container to make the `media-info` content appear above the video instead of beneath the video.

```html
<div class="media-widget reverse">
  <!-- more html here -->
</div>
```

### HTML Example

```html
<div class="media-widget reverse">
	<div class="media-object">
		<iframe width="560" height="315" src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
			title="YouTube video player" frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen></iframe>
	</div>
	<div class="media-info">
		<p>This is a description of the video</p>
	</div>
</div>
```

### Preview

<div class="example-container">
	<div class="media-widget reverse">
		<div class="media-object">
			<iframe width="560" height="315" src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
				title="YouTube video player" frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen></iframe>
		</div>
		<div class="media-info">
			<p>This is a description of the video</p>
		</div>
	</div>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

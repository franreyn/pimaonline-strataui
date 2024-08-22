<p class="section-text">Widgets</p>

# Slider

Add content to slides. Users are able to rotate through the different slides like a carousel.

## How to Use

Use the `slider-widget` container as the parent container of as many `slider-item` child elements as needed.

1. Add a `<div>` with `class="slider-widget"` as a container to wrap all slides.
2. Add a `<div>` with `class="slider-item"` as a container for each slide.
3. Add any text, image, or widget content to each slide.

### Additional Classes

You can use the following classes to change the height of the slider container for all slides.

- Add `h-400` class to the `slider-widget` element to make the height of the sliders 400px;
- Add `h-500` class to the `slider-widget` element to make the height of the sliders 500px;

_By default, the height of the slides will be 300px. Unless one of the classes above are added to the `slider-widget` container._

### HTML Example

```html
<div class="slider-widget">
	<div class="slider-item">
		<h3 class="icon-book-open">Aenean euismod</h3>
		<p>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet.
			Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
			bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener"
				href="javascript:void(0);">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo
			nisl. Vestibulum tempor ante <a href="javascript:void(0);" target="_blank" rel="noopener">Curabitur</a>, "
			<a href="javascript:void(0);" target="_blank" rel="noopener">Vivamus mollis</a> vitae nunc nec tellus
			sollicitudin cursus. Suspendisse quis tortor eget lorem condimentum malesuada mollis eget nulla.
		</p>
		<p>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet.
			Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
			bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener"
				href="javascript:void(0);">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo
			nisl. Vestibulum tempor ante <a href="javascript:void(0);" target="_blank" rel="noopener">Curabitur</a>, "
			<a href="javascript:void(0);" target="_blank" rel="noopener">Vivamus mollis</a> vitae nunc nec tellus
			sollicitudin cursus. Suspendisse quis tortor eget lorem condimentum malesuada mollis eget nulla.
		</p>
	</div>
	<div class="slider-item">
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
</div>
```

### Preview

<div class="example-container">
<div class="slider-widget">
	<div class="slider-item">
		<h3 class="icon-book-open">Aenean euismod</h3>
		<p>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet.
			Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
			bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener"
				href="javascript:void(0);">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo
			nisl. Vestibulum tempor ante <a href="javascript:void(0);" target="_blank" rel="noopener">Curabitur</a>, "
			<a href="javascript:void(0);" target="_blank" rel="noopener">Vivamus mollis</a> vitae nunc nec tellus
			sollicitudin cursus. Suspendisse quis tortor eget lorem condimentum malesuada mollis eget nulla.
		</p>
		<p>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet.
			Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
			bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener"
				href="javascript:void(0);">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo
			nisl. Vestibulum tempor ante <a href="javascript:void(0);" target="_blank" rel="noopener">Curabitur</a>, "
			<a href="javascript:void(0);" target="_blank" rel="noopener">Vivamus mollis</a> vitae nunc nec tellus
			sollicitudin cursus. Suspendisse quis tortor eget lorem condimentum malesuada mollis eget nulla.
		</p>
	</div>
	<div class="slider-item">
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
</div>
</div>

<div class="footer">
  <p>&copy; 2024 Strata UI</p>
</div>

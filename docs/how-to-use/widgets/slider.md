<p class="section-text">Widgets</p>

# Slider

Add content to slides. Users are able to rotate through the different slides like a carousel.

## How to Use

Use the `<slider-widget>` tag as the parent element of as many `<slider-item>` children elements as needed.

1. Add `<slider-widget>` as a container to wrap all slides.
2. Add `<slider-item>` as a container for each slide.
3. Add text, image, or widget content to each slide.

### Additional Classes

You can use the following classes to change the height of the slider container for all slides.

- Add `h-400` class to the `<slider-widget>` element to make the height of the sliders 400px;
- Add `h-500` class to the `<slider-widget>` element to make the height of the sliders 500px;

_By default, the height of the slides will be 300px. Unless one of the classes above are added to the `<slider-widget>` tag._

### HTML Example

```html
<slider-widget class="h-400">
  <slider-item>
    <h3 class="icon-book-open">Aenean euismod</h3>
    <p>
      Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
      bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener" href="#">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo nisl. Vestibulum tempor
      ante <a href="#" target="_blank" rel="noopener">Curabitur</a>, " <a href="#" target="_blank" rel="noopener">Vivamus mollis</a>vitae nunc nec tellus sollicitudin cursus. Suspendisse quis tortor eget lorem
      condimentum malesuada mollis eget nulla.
    </p>
  </slider-item>
  <slider-item>
    <div class="card-horizontal">
      <div class="card-body">
        <p>Ut posuere vitae ante varius consequat. Vivamus id condimentum dui, et tincidunt enim. Vivamus mollis lorem nec metus aliquet, vulputate condimentum ante ultricies.</p>
      </div>
      <div class="card-img"><img src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg" alt="" /></div>
    </div>
  </slider-item>
</slider-widget>
```

### Preview

<div class="example-container">
<slider-widget class="h-400">
  <slider-item>
    <h3 class="icon-book-open">Aenean euismod</h3>
    <p>
      Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet. Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
      bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener" href="#">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo nisl. Vestibulum tempor
      ante <a href="#" target="_blank" rel="noopener">Curabitur</a>, " <a href="#" target="_blank" rel="noopener">Vivamus mollis</a>vitae nunc nec tellus sollicitudin cursus. Suspendisse quis tortor eget lorem
      condimentum malesuada mollis eget nulla.
    </p>
  </slider-item>
  <slider-item>
    <div class="card-horizontal">
      <div class="card-body">
        <p>Ut posuere vitae ante varius consequat. Vivamus id condimentum dui, et tincidunt enim. Vivamus mollis lorem nec metus aliquet, vulputate condimentum ante ultricies.</p>
      </div>
      <div class="card-img"><img src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg" alt="" /></div>
    </div>
  </slider-item>
</slider-widget>
</div>

<div class="footer">
  <p>&copy; 2024 Strata UI</p>
</div>

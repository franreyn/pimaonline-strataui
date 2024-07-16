# Slider Widget

Use the Slider widget to add content to slides. Users are able to rotate through the different slides like a carousel.

Use the `<slider-widget>` tag as the parent element of as many `<slider-item>` children elements as necessary.

## HTML

There are two essential elements to include in the HTML for this widget. 

1. Wrap the entire widget in a `<slider-widget>` tag
2. Each slide within the widget must be a `<slider-item>` tag.

_By adding this HTML, the widget should function correctly. If there are any other errors in the code, but the HTML is correct, it must be part of the CSS or JS assocated with this widget._

### Additional Classes

You can use the following classes to change the height of the slider container for all slides.

- Add `.h-400` class to the `<slider-widget>` element to make the height of the sliders 400px;
- Add `.h-500` class to the `<slider-widget>` element to make the height of the sliders 500px;

_By default, the height of the slides will be 300px. Unless one of the classes above are added to the `<slider-widget>` tag_

```html
<slider-widget class="h-400">
        <slider-item>
          <h3 class="icon-book-open">Aenean euismod</h3>
          <p>Nunc sed lacus sit amet purus convallis vestibulum vitae quis libero. Nunc consectetur tristique aliquet.
            Suspendisse risus ex, vestibulum non leo sit amet, consequat ultricies eros. Curabitur leo nulla, ornare et
            bibendum imperdiet, congue id purus. Nullam lobortis quam id justo porta suscipit. <a rel="noopener" href="#">Fusce posuere</a> lectus turpis, egestas rhoncus ex vitae, porttitor commodo nisl. Vestibulum
            tempor ante <a href="#" target="_blank" rel="noopener">Curabitur</a>, " <a href="#" target="_blank" rel="noopener">Vivamus mollis</a>vitae nunc nec tellus sollicitudin cursus. Suspendisse quis tortor eget
            lorem condimentum malesuada mollis eget nulla.</p>
        </slider-item>
        <slider-item>
          <div class="card-horizontal">
            <div class="card-body">
              <p>Ut posuere vitae ante varius consequat. Vivamus id condimentum dui, et tincidunt enim. Vivamus mollis
                lorem nec metus aliquet, vulputate condimentum ante ultricies.</p>
            </div>
            <div class="card-img"> <img src="https://d2l.pima.edu/shared/images/placeholder/400x400.jpg" alt=""> </div>
          </div>
        </slider-item>
      </slider-widget>
```
<p class="section-text">Widgets</p>

# Blockquote

Draw attention to an important quote or piece of information.

## How to Use

1. Wrap the quote in the `<blockquote>` elements.

### HTML Example

```html
<blockquote>The biggest adventure you can ever take is to live the life of your dreams.</blockquote>
```

### Preview

<div class="example-container">
  <blockquote>The biggest adventure you can ever take is to live the life of your dreams.</blockquote>
</div>

<div class="footer">
  <p>&copy; 2024 Strata UI</p>
</div>


## CSS

Styles for `blockquote` are found in `blockquote.scss`. Blockquotes have slightly larger fonts than regular text and usually have subtle decorative elements such as icons or watermarks to draw attention.

You can use the `blockquote` selector to change the `font-family` or `color` in theme-specific stylesheets.

Update the decorative icons by targeting the pseudo-elements.

```css
blockquote {
  font-size: 1.1rem;
  line-height: 1.5rem;
  margin: 3.3rem 0;
  padding: .6rem;
  position: relative;
  left: 7%;
  max-width: 90%;

  &::before {
    content: "\F10D";
    font-family: "FontAwesome";
    font-size: 1rem;
    position: absolute;
    left: -7%;
  }
  .attribution {
    display: block;
    font-size: 1rem;
    margin: 1rem 0;
    font-weight: 700;
  }
}

@media screen and (min-width: 730px) {
  blockquote {
    padding: 1.1rem 2.2rem;
    margin: 2.2rem 0;
    left: 0;
    max-width: 100%;
    &::before {
      left: 0;
    }
  }

  columns-widget blockquote {
    left: 10%;
    max-width: 90%;
    &::before {
      left: -10%;
    }
  }
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

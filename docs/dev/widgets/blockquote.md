<p class="section-text">Widgets</p>

# Blockquote

Draw attention to an important quote or piece of information.

## How to Use

1. Wrap the quote in the `<blockquote>` tags.

### HTML Example

```html
<blockquote>The biggest adventure you can ever take is to live the life of your dreams.</blockquote>
```

### Preview

<div class="example-container">
  <blockquote>The biggest adventure you can ever take is to live the life of your dreams.</blockquote>
</div>

## CSS

Styles for `blockquote` are found in `blockquote.scss`. Blockquotes have slightly larger fonts than regular text and usually have subtle decorative elements such as icons or watermarks to draw attention.

You can use the `blockquote` selector to change the `font-family` or `color` in theme-specific stylesheets.

Update the decorative icons by targeting the pseudo elements.

```css
blockquote::before {
  color: var(--color-secondary);
  content: "\f10d";
}

blockquote::after {
  color: var(--color-secondary);
  content: "\f10e";
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

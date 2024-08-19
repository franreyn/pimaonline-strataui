<p class="section-text">Widgets</p>

# Callout

A shaded background to draw attention to an important piece of information.

## How to Use

1. Wrap content with the `<callout-widget>` tag.

_Note: The color of the background depends on which theme you use._

### HTML Example

```html
<callout-widget>Note: Your thesis should present a specific argument or perspective that you will support with evidence throughout your paper.</callout-widget>
```

### Preview

<div class="example-container">
  <callout-widget>Note: Your thesis should present a specific argument or perspective that you will support with evidence throughout your paper.</callout-widget>
</div>

## CSS

Styles for `callout-widget` are found in `/src/scss/modules/callout.scss` as well as stylesheets for specific themes in `/src/scss/themes`. Callouts have a shaded background color.

```css
/* /src/scss/modules/callout.scss */
callout-widget {
  display: block;
  margin: 2rem 0;
  padding: 2rem;
  border-radius: var(--subtle-radius);
}

/* /src/scss/themes/_basic.scss */
callout-widget {
  background-color: var(--color-accent-tint);
}

/* /src/scss/themes/_blue.scss */
callout-widget {
  background-color: var(--blue-theme-tertiary);
}

/* /src/scss/themes/_gold.scss */
callout-widget {
  background-color: var(--gold-theme-tertiary);
}

/* /src/scss/themes/_green.scss */
callout-widget {
  background-color: var(--green-theme-tertiary);
}

/* /src/scss/themes/_purple.scss */
callout-widget {
  background-color: var(--purple-theme-tertiary);
}

/* /src/scss/themes/_red.scss */
callout-widget {
  background-color: var(--red-theme-tertiary);
}
```

### JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

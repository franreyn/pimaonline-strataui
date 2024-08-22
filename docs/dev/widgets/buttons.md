<p class="section-text">Widgets</p>

# Buttons

Style links as buttons to create eye-catching clickable items.

## How to Use

1. Add a `<a>` element with `class="button"` to any link to have it styled as a button.

_Note: Links with the button class and the HTML `<button>` elements should **not** be used for links because they don't follow accessibility standards. Links should be used when you want to navigate users to a different page or resource, whereas buttons are ideal for triggering actions within the current page, such as submitting a form or opening a modal._

### HTML Example

```html
<a href="javascript:void(0);" class="button">Link</a>
```

### Preview

<div class="example-container">
  <a href="javascript:void(0);" class="button">Link</a>
</div>

### CSS

_The columns CSS is in the `buttons.scss` file._

```css
a.button {
  padding: 10px;
  border-radius: var(--subtle-radius);
  margin-bottom: 1rem;
  text-decoration: none;
  font-weight: 700;

  &:hover {
    text-decoration: none;
  }
}
```

### JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

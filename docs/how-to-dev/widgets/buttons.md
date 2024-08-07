<p class="section-text">Widgets</p>

# Buttons

Style links as buttons to create eye-catching clickable items.

## How to Use

1. Add `class="button"` to any link to have it styled as a button.

_Note: buttons and the HTML tag `<button>` should **not** be used for links because they doesn't follow accessibility standards. Links should be used when you want to navigate users to a different page or resource, whereas buttons are ideal for triggering actions within the current page, such as submitting a form or opening a modal."_

### HTML Example

```html
<a href="#" class="button">Link</a>
```

### Preview

<div class="example-container">
  <a href="#" class="button">Link</a>
</div>

### CSS

_The columns CSS is in the `buttons.scss` file._

```css
a.button {
  background-color: var(--color-pcc-primary);
  padding: 10px;
  border-radius: var(--subtle-radius);
  margin-bottom: 1rem;
  color: var(--color-white);
  text-decoration: none;
}

a.button:hover {
  background-color: var(--color-pcc-primary-hover);
  color: var(--color-white);
  text-decoration: none;
}
```

### JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

# Buttons

## Button Links

Links can be styled as buttons by adding a class to the `<a>` tag. `<button>` should not be used for links because that doesn't follow accessibility standards.

### HTML 

Add `class="button"` to links you want to style as buttons. 

```html
<a href="#" class="button">Link</a>
```

### CSS

_The columns CSS is in the `buttons.scss` file._

```css
a.button {
  background-color: var(--color-pcc-primary);
  padding: 10px;
  border-radius: var(--subtle-radius);
  margin-bottom: 1rem;
  color: var(--color-pcc-white);
  text-decoration: none;
}

a.button:hover {
  background-color: var(--color-pcc-primary-hover);
  color: var(--color-pcc-white);
  text-decoration: none;
}
```

### JS 

_There is no JS for button components._ 
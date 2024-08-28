<p class="section-text">Widgets</p>

# Labels

Create badge-like icons using any text.

## How to Use

1. Wrap the content of the label with a `<label>` element with `class="default-label"` or use a styled label using a different Strata UI class.

### Styled Labels

There are six styles for labels:

1. `class="default-label"` for the default label
2. `class="muted-label"` for a label with a blue background
3. `class="success-label"` for a label with a green background
4. `class="warning-label"` for a label with a yellow background
5. `class="danger-label"` for a label with a red background
6. `class="info-label"` for a label with a light blue background

### HTML Example

```html
<label class="default-label">Default Label</label>
<label class="muted-label">Muted Label</label>
<label class="success-label">Success Label</label>
<label class="warning-label">Warning Label</label>
<label class="danger-label">Danger Label</label>
<label class="info-label">Info Label</label>
```

### Preview

<div class="example-container">
<label class="default-label">Default Label</label>
<label class="muted-label">Muted Label</label>
<label class="success-label">Success Label</label>
<label class="warning-label">Warning Label</label>
<label class="danger-label">Danger Label</label>
<label class="info-label">Info Label</label>
</div>

## CSS

The CSS for the labels are to ensure the font is small enough to fit within the label and provide different colors.

The styles are located in the `labels.scss` file.

```css
.default-label, .muted-label, .success-label, .warning-label, .danger-label, .info-label {
  border-radius: 1px;
  color: var(--color-white);
  display: inline;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  padding: 0.2rem 0.6rem 0.3rem;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  border-radius: 1px;
}

.default-label {
  background-color: var(--color-primary);
}

.muted-label {
  background-color: var(--muted-label-color);
  color: var(--color-black);
}

.success-label {
  background-color: var(--success-label-color);
}

.danger-label {
  background-color: var(--danger-label-color);
}

.warning-label {
  background-color: var(--warning-label-color);
  color: var(--color-black);
}

.info-label {
  background-color: var(--info-label-color);
  color: var(--color-black);
}
```

### JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

# Labels

Labels are used to create badge-like icons using any text.

## Editing Labels

If you are going to be adding, editing, or removing labels, you'll have to do it in mulitple places.

1. `config.ts` - edit the key value pair of strings that associate the custom tag with the HTML tag.
2. `labels.scss` - edit the styles associated with the specific label.

## HTML

To add the different labels, you can add the custom HTML label.

```html
<default-label>Default Label</default-label> <muted-label>Muted Label</muted-label>
```

## CSS

The CSS for the labels are to ensure the font is small enough to fit within the label and provide different colors.

The styles are located in the `_grid.scss` file.

```scss
default-label,
muted-label,
success-label,
warning-label,
danger-label,
info-label {
  border-radius: 1px;
  color: var(--color-white);
  display: inline;
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  padding: 0.2em 0.6em 0.3em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
}

default-label {
  background-color: var(--color-primary);
}

muted-label {
  background-color: var(--muted-label-color);
}

success-label {
  background-color: var(--success-label-color);
}

danger-label {
  background-color: var(--danger-label-color);
}

warning-label {
  background-color: var(--warning-label-color);
  color: var(--color-black);
}

info-label {
  background-color: var(--info-label-color);
  color: var(--color-black);
}
```

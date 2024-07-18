

# Labels

Labels are used to create badge-like icons using any text.

## HTML

To add the different labels, you can add the custom HTML label. 

```html
<default-label>Default Label</default-label>
<muted-label>Muted Label</muted-label>
```

## CSS

The CSS for the labels are to ensure the font is small enough to fit within the label and provide different colors.

The styles are located in the `_grid.scss` file.

```scss
.label, default-label, muted-label {
  border-radius: 1px;
  color: var(--color-white);
  display: inline;
  font-size: 0.7em;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
  padding: 0.2em 0.6em 0.3em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
}

.label-default, default-label {
  background-color: var(--color-primary);
}

.label-muted, muted-label {
  background-color: var(--color-ltgrey);
  color: var(--color-muted-black);
}
```

## JS

The Javascript for tabs is for adding the specific classes to the labels. 

```js
const defaultLabels: NodeListOf<HTMLElement> = document.querySelectorAll("default-label");
const mutedLabels: NodeListOf<HTMLElement> = document.querySelectorAll("muted-label");

defaultLabels.forEach((defaultLabel: HTMLElement) => {
  defaultLabel.classList.add("label-default");
  defaultLabel.classList.add("label");
})

mutedLabels.forEach((mutedLabel: HTMLElement) => {
  mutedLabel.classList.add("label-muted");
  mutedLabel.classList.add("label");
})
```

Label widgets use the `tagConversion.ts` file to change the custom tags into `<label>` tags.
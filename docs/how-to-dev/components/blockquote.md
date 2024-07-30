# Blockquote

Blockquotes can be used to draw attention to an important quote or piece of information.

## HTML

The following is an example of the HTML used for the `blockquote`.

```html
<blockquote>The biggest adventure you can ever take is to live the life of your dreams.</blockquote>
```

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

  <div class="footer">
    <p>&copy; 2024 StrataCSS</p>
  </div>

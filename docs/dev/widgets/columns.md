<p class="section-text">Widgets</p>

# Columns

Display content side-by-side in columns.

## About

Place all child elements, such as text, images, or HTML elements, inside the `<div>` with `class="columns-widget"`. The widget will automatically adjust the number of columns based on the content and the page width.

## How To Use

1. Add a `<div>` element with `class="columns-widget"` to create the container that will hold all the columns.
2. Add any text or image, and it will automatically be placed into a column.

### Utility Classes

1. `<div class="columns-widget wide-narrow">` - The `wide-narrow` class makes the left column wider than the right column. This is typically used to place a block of text (wide column) next to an image (narrow column).

2. `<div class="columns-widget narrow-wide">` - The `narrow-wide` class is the reverse where the left column is narrower than the right column.

## Examples

### Example 1: This will display the content in two-columns of equal widths

```html
<div class="columns-widget">
  <p>
    The ocean, vast and mysterious, covers more than 70% of our planet's surface, holding countless wonders and secrets within its depths. Its rhythmic waves dance under the sun's warm gaze, carrying stories of distant
    shores and ancient creatures. From the tranquil turquoise shallows to the midnight blues of the abyss, the ocean teems with life, a delicate balance of beauty and power. Its salty embrace connects distant lands,
    shaping climates and fostering life in ways we are only beginning to understand. The ocean is a source of inspiration, adventure, and awe, reminding us of the boundless wonders of our planet.
  </p>
  <img src="https://unsplash.it/id/179/500/300" alt="" />
</div>
```

### Example 1: Preview

<div class="example-container">
  <div class="columns-widget">
    <p>The ocean, vast and mysterious, covers more than 70% of our planet's surface, holding countless wonders and secrets within its depths. Its rhythmic waves dance under the sun's warm gaze, carrying stories of distant shores and ancient creatures. From the tranquil turquoise shallows to the midnight blues of the abyss, the ocean teems with life, a delicate balance of beauty and power. Its salty embrace connects distant lands, shaping climates and fostering life in ways we are only beginning to understand. The ocean is a source of inspiration, adventure, and awe, reminding us of the boundless wonders of our planet.</p>
    <img src="https://unsplash.it/id/179/500/300" alt="">
  </div>
</div>

### Example 2: This will display the paragraph in a wider column on the left and the image in a narrower column on the right

```html
<div class="columns-widget wide-narrow">
  <p>
    The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky
    transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their
    timeless light. In its expanse, one finds solace, wonder, and endless possibility.
  </p>
  <img src="https://unsplash.it/id/114/500/300" alt="" />
</div>
```

### Example 2: Preview

<div class="example-container">
  <div class="columns-widget wide-narrow">
    <p>The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their timeless light. In its expanse, one finds solace, wonder, and endless possibility.</p>
    <img src="https://unsplash.it/id/114/500/300" alt="">
  </div>
</div>

### Example 3: This will display the paragraph in a wider column on the right and the image in a narrower column on the left

```html
<div class="columns-widget narrow-wide">
  <p>
    The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky
    transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their
    timeless light. In its expanse, one finds solace, wonder, and endless possibility.
  </p>
  <img src="https://unsplash.it/id/114/500/300" alt="" />
</div>
```

### Example 3: Preview

<div class="example-container">
  <div class="columns-widget narrow-wide">
    <p>The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their timeless light. In its expanse, one finds solace, wonder, and endless possibility.</p>
    <img src="https://unsplash.it/id/114/500/300" alt="">
  </div>
</div>

## CSS

_The columns CSS is in the `columns.scss` file._

The `columns widget` is made responsive by using CSS grid.

```css
.columns-widget {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 2rem 0;
  &.top {
    align-items: flex-start;
  }
  &.middle {
    align-items: center;
  }
  &.bottom {
    align-items: flex-end;
  }
}

.columns-widget > *, .columns-widget > * > * {
  width: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .columns-widget.wide-narrow:not(#two-column .columns-widget.wide-narrow) {
    grid-template-columns: 65% calc(35% - 1rem);
  }
  
  .columns-widget.narrow-wide:not(#two-column .columns-widget.narrow-wide) {
    grid-template-columns: 35% calc(65% - 1rem);
  }
}

@media screen and (min-width: 1024px) {
  #two-column .columns-widget.wide-narrow {
    grid-template-columns: 65% calc(35% - 1rem);
  }
  
  #two-column .columns-widget.narrow-wide {
    grid-template-columns: 35% calc(65% - 1rem);
  }
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

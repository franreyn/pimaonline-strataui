<p class="section-text">Widgets</p>

# Columns

Display content side-by-side in columns.

## About

The `<columns-widget>` should contain all of the children elements. A child element could be text, images, HTML elements, etc. This widget will automatically see what content is within the `<columns-widget>` container and determine how many columns it can fit along the width of the page.

## How To Use

1. Add `<columns-widget>` to create the container that will hold all the columns.
2. Add any text or image and it will automatically be placed into a column.

### Utility Classes

1. `<columns-widget class="wide-narrow">` - The `wide-narrow` class makes the left column wider than the right column. This is typically used to place a block of text (wide column) next to an image (narrow column).

2. `<columns-widget class="narrow-wide">` - The `narrow-wide` class is the reverse where the left column is narrower than the right column.

## Examples

### Example 1: This will display the content in two columns of equal widths

```html
<columns-widget>
  <p>
    The ocean, vast and mysterious, covers more than 70% of our planet's surface, holding countless wonders and secrets within its depths. Its rhythmic waves dance under the sun's warm gaze, carrying stories of distant
    shores and ancient creatures. From the tranquil turquoise shallows to the midnight blues of the abyss, the ocean teems with life, a delicate balance of beauty and power. Its salty embrace connects distant lands,
    shaping climates and fostering life in ways we are only beginning to understand. The ocean is a source of inspiration, adventure, and awe, reminding us of the boundless wonders of our planet.
  </p>
  <img src="https://unsplash.it/id/179/500/300" alt="" />
</columns-widget>
```

### Example 1: Preview

<div class="example-container">
  <columns-widget>
    <p>The ocean, vast and mysterious, covers more than 70% of our planet's surface, holding countless wonders and secrets within its depths. Its rhythmic waves dance under the sun's warm gaze, carrying stories of distant shores and ancient creatures. From the tranquil turquoise shallows to the midnight blues of the abyss, the ocean teems with life, a delicate balance of beauty and power. Its salty embrace connects distant lands, shaping climates and fostering life in ways we are only beginning to understand. The ocean is a source of inspiration, adventure, and awe, reminding us of the boundless wonders of our planet.</p>
    <img src="https://unsplash.it/id/179/500/300" alt="">
  </columns-widget>
</div>

### Example 2: This will display the paragraph in a wider column on the left and the image in a narrower column on the right

```html
<columns-widget class="wide-narrow">
  <p>
    The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky
    transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their
    timeless light. In its expanse, one finds solace, wonder, and endless possibility.
  </p>
  <img src="https://unsplash.it/id/114/500/300" alt="" />
</columns-widget>
```

### Example 2: Preview

<div class="example-container">
  <columns-widget class="wide-narrow">
    <p>The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their timeless light. In its expanse, one finds solace, wonder, and endless possibility.</p>
    <img src="https://unsplash.it/id/114/500/300" alt="">
  </columns-widget>
</div>

### Example 3: This will display the paragraph in a wider column on the right and the image in a narrower column on the left

```html
<columns-widget class="narrow-wide">
  <p>
    The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky
    transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their
    timeless light. In its expanse, one finds solace, wonder, and endless possibility.
  </p>
  <img src="https://unsplash.it/id/114/500/300" alt="" />
</columns-widget>
```

### Example 3: Preview

<div class="example-container">
  <columns-widget class="narrow-wide">
    <p>The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their timeless light. In its expanse, one finds solace, wonder, and endless possibility.</p>
    <img src="https://unsplash.it/id/114/500/300" alt="">
  </columns-widget>
</div>

## CSS

_The columns CSS is in the `columns.scss` file._

The `columns widget` is made responsive by using CSS grid.

```css
columns-widget {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  margin: 1rem 0;
}

columns-widget > *,
columns-widget > * > * {
  width: 100%;
  margin: 0;
  padding: 0;
}

@media screen and (min-width: 768px) {
  columns-widget.wide-narrow:not(#two-column columns-widget.wide-narrow) {
    grid-template-columns: 65% calc(35% - 1rem);
  }

  columns-widget.narrow-wide:not(#two-column columns-widget.narrow-wide) {
    grid-template-columns: 35% calc(65% - 1rem);
  }
}

@media screen and (min-width: 1024px) {
  #two-column columns-widget.wide-narrow {
    grid-template-columns: 65% calc(35% - 1rem);
  }

  #two-column columns-widget.narrow-wide {
    grid-template-columns: 35% calc(65% - 1rem);
  }
}
```

## JS

_There is no JS for this widget._

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

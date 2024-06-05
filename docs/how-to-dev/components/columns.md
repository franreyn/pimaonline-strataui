# Columns Widget

The `columns widget` displays content side-by-side in columns. The maximum number of columns is 3. Any additional content will wrap onto subsequent lines.

## Custom Elements

The `columns widget` uses a custom tag and is defined in the `CustomElements.ts file`. 

### Columns Structure

The `<columns-widget>` wraps all children elements. A child element could be a `<p>`, `<img>`, etc. There are a few HTML examples below of the `columns widget`.

### Classes

1. `<columns-widget class="wide-narrow">` - The `wide-narrow` class makes the left column wider than the right column. This is typically used to place a block of text (wide column) next to an image (narrow column).

2. `<columns-widget class="narrow-wide">` - The `narrow-wide` class is the reverse where the left column is narrower than the right column.

## HTML 

The `columns widget` in the HTML should have this structure. 

```html
<!-- Example 1: This will display the content in two columns of equal widths -->
<columns-widget>
  <p>The ocean, vast and mysterious, covers more than 70% of our planet's surface, holding countless wonders and secrets within its depths. Its rhythmic waves dance under the sun's warm gaze, carrying stories of distant shores and ancient creatures. From the tranquil turquoise shallows to the midnight blues of the abyss, the ocean teems with life, a delicate balance of beauty and power. Its salty embrace connects distant lands, shaping climates and fostering life in ways we are only beginning to understand. The ocean is a source of inspiration, adventure, and awe, reminding us of the boundless wonders of our planet.</p>
  <img src="https://unsplash.it/id/179/500/300" alt="">
</columns-widget>

<!-- Example 2: This will display the content in 3 columns of equal widths -->
<columns-widget>
  <p>The forest, a realm of towering trees and dappled sunlight, is a sanctuary of tranquility and life. With each step, the earthy scent of damp soil and the chorus of birdsong envelop the senses, transporting one to a world untouched by time. Sunlight filters through the dense canopy, painting the forest floor with shifting patterns of light and shadow. Here, among the ancient giants and delicate ferns, one can't help but feel a profound connection to nature's rhythms.</p>
  <p>In the heart of the forest, a symphony of life unfolds with each passing moment. From the smallest insects to the majestic deer, every inhabitant plays a vital role in this intricate ecosystem. The rustle of leaves, the gentle murmur of a stream, and the occasional call of a distant owl create a harmonious melody that resonates through the trees. Moss-covered rocks and fallen logs provide shelter for a myriad of creatures, while the canopy above shelters them from the elements.</p>
  <p>As the sun sets, the forest undergoes a magical transformation. Shafts of golden light pierce through the trees, casting long shadows on the forest floor. Nighttime creatures stir from their daytime slumber, preparing for the nocturnal hunt. The air is alive with the sounds of rustling leaves and chirping crickets, while the scent of pine and damp earth fills the cool night air. In the heart of the forest, under a blanket of stars, one can't help but feel a sense of wonder and awe at the beauty of the natural world.</p>
</columns-widget>

<!-- Example 3: This will display the paragraph in a wider column on the left and the image in a narrower column on the right -->
<columns-widget class="wide-narrow">
  <p>The sky, an ever-changing canvas of infinite blue, is a window to the vastness of the universe. By day, the sun's warm rays illuminate the heavens, painting wispy clouds in shades of white and gray. At dusk, the sky transforms into a masterpiece of vibrant hues, as the setting sun sets the clouds ablaze with fiery oranges and pinks. And when night falls, the sky becomes a tapestry of twinkling stars, guiding wanderers with their timeless light. In its expanse, one finds solace, wonder, and endless possibility.</p>
  <img src="https://unsplash.it/id/114/500/300" alt="">
</columns-widget>
```

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

columns-widget > *, columns-widget > * > * {
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

_There is no JS for the columns widget._ 
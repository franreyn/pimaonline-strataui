<p class="section-text">Widgets</p>

# Vocab Cards

Create a set of flashcards with terms and definitions.

## How to Use

1. Add a `<ul>` element with `class="vocab-cards-widget"` as the parent container.
2. Add a `<li>` element for each vocab card.
3. Within each vocab card, add a `<h3>` for vocab term and `<p>` for term definition.

### HTML Example

```html
<ul class="vocab-cards-widget">
	<li>
		<h3>Vocab Term</h3>
		<p>The vocabulary term and definition.</p>
	</li>
	<li>
		<h3>Vocab Term</h3>
		<p>The vocabulary term and definition.</p>
	</li>
	<li>
		<h3>Vocab Term</h3>
		<p>The vocabulary term and definition.</p>
	</li>
	<li>
		<h3>Vocab Term</h3>
		<p>The vocabulary term and definition.</p>
	</li>
</ul>
```

### Preview

<div class="example-container">
	<ul class="vocab-cards-widget">
		<li>
			<h3>Vocab Term</h3>
			<p>The vocabulary term and definition.</p>
		</li>
		<li>
			<h3>Vocab Term</h3>
			<p>The vocabulary term and definition.</p>
		</li>
		<li>
			<h3>Vocab Term</h3>
			<p>The vocabulary term and definition.</p>
		</li>
		<li>
			<h3>Vocab Term</h3>
			<p>The vocabulary term and definition.</p>
		</li>
	</ul>
</div>

## CSS

The styles for this widget help with spacing and adds a slight hover animation.

```css
ul.vocab-cards-widget {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  list-style-type: none;


li {
  border-radius: var(--round-radius);
  background-color: var(--color-white);
  box-shadow: var(--sm-shadow);
  margin: 10px auto;
  max-width: 275px;
  padding: 1rem;
  transition: .5s;

  h3,h4,h5 {
    margin: .5rem 0;
  }

  p {
    margin: .5rem 0;
  }

  &:hover {
    transform: translate(0, -5px);
    transition: .5s;
    box-shadow: var(--reg-shadow);

  }
}
}
```

## JS

The `vocabCards.ts` file adds the attributes and classes.

```js
const vocabCardsWidgets: NodeListOf<HTMLElement> = document.querySelectorAll("vocab-cards-widget");

if (vocabCardsWidgets.length > 0) {
  // Add aria attributes to ul.vocab-cards
  vocabCardsWidgets.forEach((vocabCardsWidget: HTMLElement) => {
    vocabCardsWidget.setAttribute("role", "region");
    vocabCardsWidget.setAttribute("aria-label", "vocabulary list");
    vocabCardsWidget.classList.add("vocab-cards-widget");

    const vocabGroups: NodeListOf<HTMLElement> = vocabCardsWidget.querySelectorAll("li,vocab-card");

    if (vocabGroups.length > 0) {
      // Add aria attributes to li.vocab
      vocabGroups.forEach((vocabGroup: HTMLElement) => {
        vocabGroup.setAttribute("role", "group");
        vocabGroup.setAttribute("aria-label", "vocabulary term and definition");
      });
    }
  });
}
```

This widget leverages the use of `tagConversion.ts` to convert the tags into `<ul>` and `<li>` tags. If you need to change the tags see the `config.ts` file.

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

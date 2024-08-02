<p class="section-text">Widgets</p>

# Vocab Cards

Create a set of flashcards with terms and definitions.

## How to Use

1. Wrap the group of vocab cards in a `<vocab-cards-widget>` container.
2. Wrap each vocab card in a `<vocab-card>` container.
3. Within each vocab card, add an `<h3>` for vocab term and `<p>` for term definition.

### HTML Example

```html
<vocab-cards-widget>
  <vocab-card>
    <h3>Vocab Term</h3>
    <p>The vocabulary term and definition.</p>
  </vocab-card>
  <vocab-card>
    <h3>Vocab Term</h3>
    <p>The vocabulary term and definition.</p>
  </vocab-card>
  <vocab-card>
    <h3>Vocab Term</h3>
    <p>The vocabulary term and definition.</p>
  </vocab-card>
  <vocab-card>
    <h3>Vocab Term</h3>
    <p>The vocabulary term and definition.</p>
  </vocab-card>
</vocab-cards-widget>
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

```scss
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
    padding: 1em;
    transition: 0.5s;

    h3,
    h4,
    h5 {
      margin: 0.5em 0;
    }
    h3,
    h4,
    h5 {
      margin: 0.5rem 0;
    }

    &:hover {
      transform: translate(0, -5px);
      transition: 0.5s;
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

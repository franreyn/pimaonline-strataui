# Vocab Cards Widget

Vocab cards widget is used to create vocabulary term and definition pairs.

## HTML

The HTML that the ID writes can use the custom tags associated with the widget and should look like this:

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

The tags are eventually converted into semantic HTML.


## SCSS

The styles for this widget help with spacing and adds a slight hover animation.

```scss
ul.vocab-cards-widget {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1em;
  list-style-type: none;


li {
  border-radius: var(--round-radius);
  background-color: var(--color-white);
  box-shadow: var(--sm-shadow);
  margin: 10px auto;
  max-width: 275px;
  padding: 1em;
  transition: .5s;

  h3,h4,h5 {
    margin: .5em 0;
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

The `vocabCards.ts` file that adds the attributes and classes.

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
      })
    }
  })
}
```

This widget leverages the use of `tagConversion.ts` to convert the tags into `<ul>` and `<li>` tags. If you need to change the tags see the `config.ts` file.

```js
/* Configure changing custom tag names into semantic normal HTML tags. key should be the custom tag you are targetting, and the value should be the standard HTML tag you want to replace it with.
 */
export const customTagPairs: { [customTagName: string]: string } =  {
  "vocab-cards-widget": "ul",
  "vocab-card": "li",
}
```
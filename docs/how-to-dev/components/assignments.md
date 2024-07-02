# Assignments Widget

Use the `assignments-widget` to organize each assignment into cards.


## HTML 

The `<assignments-widget>` wraps all `<assignment-item>` elements. Both are custom elements and the configurations can be found in `/src/ts/config.ts` and `/src/ts/modules/customElements.ts`.

An `<assignment-item>` typically consists of an `<h3>` heading which is the title of the assignment, a `<p>` element that describes the assignment, and an `<a>` element which is a link styled as a button using `class="button"` that will direct the user to the assignment page.

```html
<assignments-widget>
  <assignment-item>
    <h3>Module 1 Readings</h3>
    <p>The readings in the list have interactive exercises that will help you determine if you are fully understanding the material.</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Reading Review Activity 1</h3>
    <p>Revision and Editing Review Activity</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
  <assignment-item>
    <h3>Information Literacy Discussion 1</h3>
    <p>The Importance of Listening</p>
    <a href="#" class="button">Link To Assignment</a>
  </assignment-item>
</assignments-widget>
```


# CSS

The `assignments widget` uses flexbox to responsively display the cards. The CSS for this component can be found in `/src/scss/modules/assignments.scss`.

```css
#second-column assignments-widget,#second-column assignments-widget {
  margin: 0;
  padding: 0
}

#content-wrapper assignments-widget,#content-wrapper assignments-widget {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between
}

assignment-item {
  display: block;
  background-color: transparent;
  border: 1px solid var(--color-docs-primary);
  border-radius: var(--subtle-radius);
  margin: 0;
  margin-bottom: .8rem;
  padding: .6rem .6rem 1.5rem;
  transition: .3s;
}

assignment-item:hover {
  transform: translate(0, -5px)
}

assignment-item h2,assignment-item h3,assignment-item h4 {
  background-color: var(--color-accent-tint);
  font-size: 1.15em;
  font-weight: 600;
  margin: -0.6rem -0.6rem .6rem -0.6rem !important;
  padding: .3rem .6rem;
  border-radius: var(--top-radius);
}

assignment-item ol li,assignment-item ul li {
  margin: 0
}

assignment-item p,assignment-item ol,assignment-item ul {
  font-size: .95em;
  margin-bottom: 1.5rem;
}

assignment-item::before,assignment-item::marker {
  content: none
}

@media screen and (min-width: 576px) {
  #content-wrapper assignment-item {
      flex-basis:45%
  }
}

@media screen and (min-width: 768px) {
  #content-wrapper assignment-item {
      flex-basis:30%
  }
}
```


# JS

_There is no JS for this widget._
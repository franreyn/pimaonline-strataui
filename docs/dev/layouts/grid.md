# Grid Components

The grid components help make up the different layouts in Strata UI.

The grid components are:

1. Content Block component
2. One-Column component
3. Two-Column component

The one and two-column layouts, determine if the layout has one large column, or two-columns with main content on the left-hand side and supplemental content on the left-hand side.

The content body component, helps separate smaller pieces of information and resides within one of the columns.

## How It Works

### One-Column Layout

Using grid and grid template, the CSS creates a general layout of the page.

```css
#one-column {
  display: grid;
  grid-row-gap: 10px;
  grid-template-areas:
    "header"
    "body"
    "footer";
  padding: 15px 2.5%;
  width: 95%;
}
```

### Two-Column Layout

The two-column layout uses grid as well and a combination of flex to ensure that the height of the two-columns match regardless of the content size.

```css
#two-column {
  display: grid;
  grid-row-gap: 10px;
  justify-content: center;
  padding: 10px 2.5%;
  width: 95%;
  margin: 0 auto;
}

#two-column {
  grid-template-areas:
    "header"
    "body"
    "column-two"
    "footer";
}

#two-column column-one,
column-two {
  display: flex;
  flex-flow: column;
  height: 100%;
}

#two-column content-block:last-child {
  flex-grow: 1;
}
```

### Content Body Element

The content body element are the sub grid components that contain the actual content. They fit inside the different columns and ensure that the learning content has a background and uniform padding.

```css
//CONTENT BODY
content-block {
  margin-bottom: 10px;
  padding: 15px;
  background-color: var(--color-white);

  h2:first-child {
    margin: 0 0 20px 0;
  }
}

content-block:last-child {
  margin-bottom: 0px;
}

#two-column content-block:last-child {
  flex-grow: 1;
}

column-one {
  grid-area: body;

  content-block {
    width: 96%;
    width: -moz-available;
    width: -webkit-fill-available;
  }
}
```

## SCSS

The SCSS to control the layout is in `_grid.scss`. Contains the CSS styles that control the layout. It also contains some generic elements and gives them a basic style.

It also consists of basic styles for the following:

1. Background for body
2. Header and footer
3. One-column and two-column
4. Typography for header and footnotes
5. Syllabus header
6. Buttons, links, images, figures, and utility elements

<div class="footer">
  <p>&copy; 2024 Strata UI</p>
</div>

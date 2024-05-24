# _typography.scss Documentation

This styles can be found in the `_typography.scss` file. This file contains styles related to typography for Strata CSS.

## Import

```scss
@import "variables";
```

This line imports a SCSS file named `"variables"`. This file contains predefined SCSS variables that are used throughout the styles in this file.

## HTML and Body Styles

```scss
html {
  font-size: 18px;
}
body {
  font-family: "Lato", sans-serif;
  font-size: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.35;
}
```
These styles set the base font size for the HTML document and the font family, size, font smoothing, and line height for the body of the document.

## Heading Styles

```scss
h1, h2, h3, h4, h5, h6 {
  color: var(--color-pcc-primary);
  font-family: "Lato", sans-serif;
  padding-left: 0px;
}
```

These styles apply to all heading elements (h1 through h6). They set the color, font family, and left padding for these elements.

## Media Queries

```scss
@media (min-width: 768px) {
  h1 {
    font-size: 1.9rem;
    line-height: 1.25;
  }
  ...
}
```

These styles apply to different elements when the viewport is at least 768 pixels wide. They adjust the font size and line height of the heading elements to better fit larger screens.

## List Styles

```scss
ul,
ol {
  list-style-position: outside;
  margin: 20px 0 10px 10px !important;
  padding: 0 0 0 20px;
}
```
These styles apply to unordered (ul) and ordered (ol) lists. They set the list style position, margin, and padding for these elements.

## Two and Three Column Lists

```scss
ul.two-col,
ol.two-col {
  columns: 1;
  padding-right: 20px;
}
@media screen and (min-width: 700px) {
  ul.two-col,
  ol.two-col {
    columns: 2;
  }
}
```
These styles apply to unordered and ordered lists with the class "two-col" or "three-col". They set the number of columns for these lists to 1 by default, and increase to 2 or 3 columns when the viewport is at least 700 pixels wide.
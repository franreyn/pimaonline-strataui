<p class="section-text">Getting Started</p>

# Installation

In order to use Strata UI, ensure you follow these steps and have the correct code in your HTML page.

## HTML head

To use Strata in your course, ensure that your HTML page is loading the correct links. Ensure at the top of your HTML document, it has the following elements.

1. **Strata UI CSS Link** - This adds all the visual styles to all the widgets and themes.

```html

```

2. **Strata UI JS Link** - This enables you to use custom HTML elements, and creates all the dynamic formatting of the code.

```html

```

_Note: These links should be present on every HTML page for your course._

### HTML Example

At the top of your HTML file, after the document type and `<html>` tag, ensure the `<head>` tag contains the following attributes and links.

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@1/dist/css/index.css" />
  <script src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@1/dist/js/scripts.js" defer=""></script>
</head>
```

_Note: Don't forget to add a `<title>` to the head of your HTML document (should match the `<h1>` of the document)._

```html
<title>One Column Layout</title>
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

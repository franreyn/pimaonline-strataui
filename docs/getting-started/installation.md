<p class="section-text">Getting Started</p>

# Installation

Ready to use Strata UI? Just follow these steps.

## HTML head

Ensure the top of your HTML document has the following links.

1. **Strata UI CSS Link** - This link adds the visual styles to the widgets and themes.

```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@2/dist/css/index.css" />
```

2. **Strata UI JS Link** - This link dynamically adds accessibility attributes and allows for widget functionality.

```html
<script src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@2/dist/js/scripts.js" defer=""></script>
```

_Note: These links should be present on every HTML page for your course._

### HTML Example

At the top of your HTML file, after the document type and `<html>` element, ensure the `<head>` element contains the following attributes and links.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@2/dist/css/index.css" />
  <script src="https://cdn.jsdelivr.net/npm/@pimaonline/pimaonline-strataui@2/dist/js/scripts.js" defer=""></script>
</head>
//...more html here
</html>
```

_Note: Don't forget to add a `<title>` to the head of your HTML document (that should match the content of your `<h1>` element)._

```html
<title>One-Column Layout</title>
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

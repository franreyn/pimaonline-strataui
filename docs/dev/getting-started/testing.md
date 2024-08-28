<p class="section-text">Customizations</p>

# Testing

Use the designated testing area folder as well as D2L.

## Use `testing-area` folder

**Use this as the main testing area**

This folder has a one-column layout HTML page and a two-column layout HTML page. These pull the most recently built files from `dist` into the HTML.

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <link rel="stylesheet" href="../../dist/css/index.css" />
  <script src="../../dist/js/scripts.js" defer=""></script>
  <title>One-Column Layout</title>
</head>
```

Here we can test the actual custom HTML tags and ensure that they are correctly changed in the browser DOM. Use this testing area in conjunction with your browser inspector to ensure it works as expected.

## D2L 

Please test in D2L as well.
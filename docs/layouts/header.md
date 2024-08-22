<p class="section-text">Layouts</p>

# Header

Top section of every page that gives the student an idea of what they'll learn.

The header is the first thing the student sees and includes the title of the page and an image. You can also optionally add a subtitle as well.

## How to Use

1. Add a `<header>` element as a container to wrap all the items within the header.
2. Add the header image using the `<img>` element.
3. Directly after the header image add a `<div>` with `class="header-text"` as a container around the `<h1>` and `<p>`.

## HTML Example

```html
<header>
  <img src="https://via.placeholder.com/1920X600" alt="" />
  <div class="header-text">
    <h1>Lorem Ipsum</h1>
    <p>Donec sollicitudin perspiciatis malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
  </div>
</header>
```

### Preview

<div class="example-container">
<header>
  <img src="https://via.placeholder.com/1920X600" alt="" />
<div class="header-text">
  <h1>Module Introduction</h1>
  <p>Welcome to this module! In this section, you'll be introduced to key concepts and topics that will form the foundation of your learning in this course. Let's dive in and get started!</p>
</div>

</header>
</div>

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

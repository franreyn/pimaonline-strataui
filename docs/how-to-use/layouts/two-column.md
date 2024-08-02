<p class="section-text">Layouts</p>

# Two Column

Best for pairing supplemental learning materials with primary learning materials.

For example, in the primary column, an overview page with introductory video and text of the general overview of the course module, and within the smaller second column, a list of assignments or a relatable quote.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <link rel="stylesheet" href="../../dist/css/index.css" />
    <script src="../../dist/js/scripts.js" defer=""></script>
    <title>Two Column Layout</title>
  </head>

  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman&#x27;s hand typing on a computer" />
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <column-one>
      <content-block>
        <h2>Welcome to [course name here]</h2>
        <media-container class="reverse">
          <media-object>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            >
            </iframe>
          </media-object>
          <media-info>
            <p>This is a description of the video</p>
          </media-info>
        </media-container>
      </content-block>
      <content-block>
        <h2>Heading</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue
          nibh sed imperdiet.
        </p>
      </content-block>
    </column-one>
    <column-two>
      <content-block>
        <assignments-widget>
          <assignment-item>
            <h3>Assignment Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur
              congue nibh sed imperdiet.
            </p>
            <a href="#" class="button">Link To Assignment</a>
          </assignment-item>
          <assignment-item>
            <h3>Assignment Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur
              congue nibh sed imperdiet.
            </p>
            <a href="#" class="button">Link To Assignment</a>
          </assignment-item>
          <assignment-item>
            <h3>Assignment Item</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur
              congue nibh sed imperdiet.
            </p>
            <a href="#" class="button">Link To Assignment</a>
          </assignment-item>
        </assignments-widget>
      </content-block>
      <content-block>
        <h4 class="icon-image">Image</h4>
        <figure><img src="https://via.placeholder.com/800x800" alt="" /></figure>
      </content-block>
    </column-two>
  </body>
</html>
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

<p class="section-text">Layouts</p>

# One Column

Typically best used for content-heavy pages and linear learning paths.

For example, the singular column in the one column layout could have lots of text with a learning activity embedded at the end.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="stylesheet" href="../../dist/css/index.css" />
    <script src="../../dist/js/scripts.js" defer=""></script>
    <title>One Column Layout</title>
  </head>

  <body>
    <header class="header">
      <img src="https://via.placeholder.com/1920X600" alt="decorative image of a woman's hand typing on a computer" />
      <div class="text-container">
        <h1>Course Intro</h1>
        <p>Donec sollicitudin molestie malesuada. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Pellentesque in ipsum id orci porta.</p>
      </div>
    </header>
    <column-one>
      <content-block>
        <h2>Welcome to [course name here]</h2>
        <blockquote>This is a quote without p tag</blockquote>
        <blockquote>
          <p>This is a quote with p tag</p>
        </blockquote>
        <callout-widget>
          <h3>Callout Widget</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur
            congue nibh sed imperdiet.
          </p>
        </callout-widget>
        <p>
          Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada
          feugiat. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus. Donec rutrum congue leo eget malesuada.
        </p>
      </content-block>
      <content-block>
        <h2>Header</h2>
        <p>
          Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Sed porttitor lectus nibh. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Curabitur aliquet quam id dui posuere blandit. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
        </p>
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
    </column-one>
  </body>
</html>
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

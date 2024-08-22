<p class="section-text">Layouts</p>

# Two-Column

This layout is best for pairing primary learning materials with supplementary learning materials.

### Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="../css/index.css" />
    <script src="../js/scripts.js" defer=""></script>
    <title>Two-Column Layout</title>
  </head>
  <body>
    <header>
      <img src="https://via.placeholder.com/1920X600" alt="" />
      <div class="header-text">
        <h1>Module 1</h1>
        <p>Drafting Your Rhetorical Analysis</p>
      </div>
    </header>
    <div class="column-one">
      <div class="content-block">
        <h2>Lorem ipsum</h2>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>- John Doe</p>
        </blockquote>
        <div class="callout-widget">
          <h3>Nullam consectetur orci eu urna</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula fringilla quam, in bibendum elit interdum sit amet. Etiam venenatis lacus magna, id posuere ligula interdum at. Donec non leo sed eros
          consequat tincidunt.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur orci eu urna vehicula, sit amet suscipit ex eleifend. Curabitur eget magna neque. Suspendisse malesuada tellus sed nisl blandit, at
          feugiat turpis vehicula. Donec ut ex id magna vehicula efficitur sed vel risus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum dictum tellus, sed pulvinar erat ullamcorper eget. Nulla fermentum condimentum urna, a vestibulum enim vulputate id. Fusce sed ultrices
          lorem.
        </p>
        <div class="accordion-widget">
          <div class="accordion-item">
            <h3>Lorem Ipsum 1</h3>
            <div class="accordion-content">
              <h4>Lorem Ipsum 1 Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 1</p>
            </div>
          </div>
          <div class="accordion-item">
            <h3>Lorem Ipsum 2</h3>
            <div class="accordion-content">
              <h4>Lorem Ipsum 2 Title</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 2</p>
            </div>
          </div>
          <div class="accordion-item">
            <h3>Lorem Ipsum 3</h3>
            <div class="accordion-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 3</p>
            </div>
          </div>
        </div>
        <blockquote>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>- John Doe</p>
        </blockquote>
      </div>
      <div class="content-block">
        <h2>Lorem Ipsum Videos</h2>
        <div class="media-widget">
          <div class="media-object ratio-8x5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div class="media-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="media-widget reverse">
          <div class="media-object ratio-8x5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dxz8GPU-E1s?wmode=opaque"
              title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
          </div>
          <div class="media-info">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Lorem Ipsum</th>
            <th>Lorem</th>
            <th>Ipsum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="javascript:void(0);">Lorem Ipsum Interactive Readings</a></td>
            <td>0</td>
            <td>Lorem Ipsum</td>
          </tr>
          <tr>
            <td>Lorem Ipsum Activity 1</td>
            <td>15</td>
            <td>Lorem Ipsum</td>
          </tr>
          <tr>
            <td>Lorem Ipsum Analysis</td>
            <td>20</td>
            <td>Lorem Ipsum</td>
          </tr>
          <tr>
            <td>Lorem Ipsum Thesis/Outline</td>
            <td>30</td>
            <td>Lorem Ipsum</td>
          </tr>
          <tr>
            <td>Lorem Ipsum Draft</td>
            <td>10</td>
            <td>Lorem Ipsum</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="content-block">
      <div class="columns-widget wide-narrow">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eveniet doloribus obcaecati soluta repudiandae laborum quidem, neque ratione minus voluptates sint deserunt sapiente labore ipsum assumenda eaque illum velit. Veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eveniet doloribus obcaecati soluta repudiandae laborum quidem, neque ratione minus voluptates sint deserunt sapiente labore ipsum assumenda eaque illum velit. Veritatis.</p>
        <img src="https://via.placeholder.com/500x300" alt="500x300">
      </div>
    </div>
    </div>
    </div>
    <div class="column-two">
      <div class="content-block">
        <div class="assignments-widget">
          <div class="assignment-item">
            <h3>Lorem Ipsum 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.</p>
            <a href="javascript:void(0);" class="button">Lorem Ipsum Link</a>
          </div>
          <div class="assignment-item">
            <h3>Lorem Ipsum 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.</p>
            <a href="javascript:void(0);" class="button">Lorem Ipsum Link</a>
          </div>
          <div class="assignment-item">
            <h3>Lorem Ipsum 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus. Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.</p>
            <a href="javascript:void(0);" class="button">Lorem Ipsum Link</a>
          </div>
        </div>
      </div>
      <div class="content-block">
        <h3 class="icon-image">Lorem Ipsum Image</h3>
        <figure><img src="https://via.placeholder.com/800x800" alt="Lorem Ipsum Image" /></figure>
      </div>
      <div class="content-block">
        <h3 class="icon-pencil">Lorem Ipsum Vocabulary</h3>
        <dl>
          <dt>Lorem:</dt>
          <dd>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</dd>
          <dt>Ipsum:</dt>
          <dd>Vestibulum imperdiet iaculis eros sed hendrerit. Duis consectetur congue nibh sed imperdiet.</dd>
          <dt>Dolor:</dt>
          <dd>Quisque venenatis felis malesuada nulla malesuada, laoreet egestas felis luctus.</dd>
          <dt>Sit Amet:</dt>
          <dd>Consectetur adipiscing elit. Quisque venenatis felis malesuada nulla malesuada.</dd>
        </dl>
      </div>
      <div class="content-block">
        <div class="callout-widget">
          <h3>Lorem Ipsum Callout</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
    <footer>
      <p class="text-center toggle-footnotes" tabindex="0">[Lorem Ipsum]</p>
      <div class="footnotes">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula turpis eget dui dignissim, vel bibendum lacus fermentum. Nulla facilisi<sup>1</sup>.
        </p>
        <p>"Lorem Ipsum," Lorem Ipsum Dolor Sit Amet, accessed August 20, 2024, https://www.example.com.</p>
      </div>
    </footer>
  </body>
</html>
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

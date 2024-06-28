# Tables

Use tables to organize content into cells.

## HTML 

Tables follow the standard HTML structure as detailed below. 

### Example 1: The width of each column is determined by the width of the content

```html
<table>
  <thead>
    <tr>
      <th>Assignment</th>
      <th>Points</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">Module 1 Interactive Readings</a></td>
      <td>0</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Reading Review Activity 1: Rhetorical Analysis</td>
      <td>15</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1A: Ad Analysis</td>
      <td>20</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
      <td>30</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Assignment 1: Rhetorical Analysis Draft</td>
      <td>10</td>
      <td>TBD</td>
    </tr>
  </tbody>
</table>
```

<div class="example-container">
  <table>
    <thead>
      <tr>
        <th>Assignment</th>
        <th>Points</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#">Module 1 Interactive Readings</a></td>
        <td>0</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Reading Review Activity 1: Rhetorical Analysis</td>
        <td>15</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1A: Ad Analysis</td>
        <td>20</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
        <td>30</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Assignment 1: Rhetorical Analysis Draft</td>
        <td>10</td>
        <td>TBD</td>
      </tr>
    </tbody>
  </table>
</div>

### Example 2: Add _class="sm-table-col"_ to make a column narrower

```html
<table>
  <thead>
    <tr>
      <th class="sm-table-col">Assignment</th>
      <th>Points</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">Module 1 Interactive Readings</a></td>
      <td>0</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Reading Review Activity 1: Rhetorical Analysis</td>
      <td>15</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1A: Ad Analysis</td>
      <td>20</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
      <td>30</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Assignment 1: Rhetorical Analysis Draft</td>
      <td>10</td>
      <td>TBD</td>
    </tr>
  </tbody>
</table>
```

<div class="example-container">
  <table>
    <thead>
      <tr>
        <th class="sm-table-col">Assignment</th>
        <th>Points</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#">Module 1 Interactive Readings</a></td>
        <td>0</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Reading Review Activity 1: Rhetorical Analysis</td>
        <td>15</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1A: Ad Analysis</td>
        <td>20</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
        <td>30</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Assignment 1: Rhetorical Analysis Draft</td>
        <td>10</td>
        <td>TBD</td>
      </tr>
    </tbody>
  </table>
</div>

### Example 3: There's also _class="md-table-col"_ which has a wider width than _class="sm-table-col"_

```html
<table>
  <thead>
    <tr>
      <th class="md-table-col">Assignment</th>
      <th>Points</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">Module 1 Interactive Readings</a></td>
      <td>0</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Reading Review Activity 1: Rhetorical Analysis</td>
      <td>15</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1A: Ad Analysis</td>
      <td>20</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
      <td>30</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Assignment 1: Rhetorical Analysis Draft</td>
      <td>10</td>
      <td>TBD</td>
    </tr>
  </tbody>
</table>
```

<div class="example-container">
  <table>
    <thead>
      <tr>
        <th class="md-table-col">Assignment</th>
        <th>Points</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#">Module 1 Interactive Readings</a></td>
        <td>0</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Reading Review Activity 1: Rhetorical Analysis</td>
        <td>15</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1A: Ad Analysis</td>
        <td>20</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
        <td>30</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Assignment 1: Rhetorical Analysis Draft</td>
        <td>10</td>
        <td>TBD</td>
      </tr>
    </tbody>
  </table>
</div>

### Example 4: And _class="lg-table-col"_ is wider than the other two

```html
<table>
  <thead>
    <tr>
      <th class="lg-table-col">Assignment</th>
      <th>Points</th>
      <th>Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="#">Module 1 Interactive Readings</a></td>
      <td>0</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Reading Review Activity 1: Rhetorical Analysis</td>
      <td>15</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1A: Ad Analysis</td>
      <td>20</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
      <td>30</td>
      <td>TBD</td>
    </tr>
    <tr>
      <td>Assignment 1: Rhetorical Analysis Draft</td>
      <td>10</td>
      <td>TBD</td>
    </tr>
  </tbody>
</table>
```

<div class="example-container">
  <table>
    <thead>
      <tr>
        <th class="lg-table-col">Assignment</th>
        <th>Points</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="#">Module 1 Interactive Readings</a></td>
        <td>0</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Reading Review Activity 1: Rhetorical Analysis</td>
        <td>15</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1A: Ad Analysis</td>
        <td>20</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Discussion 1B: Rhetorical Analysis Thesis/Outline</td>
        <td>30</td>
        <td>TBD</td>
      </tr>
      <tr>
        <td>Assignment 1: Rhetorical Analysis Draft</td>
        <td>10</td>
        <td>TBD</td>
      </tr>
    </tbody>
  </table>
</div>
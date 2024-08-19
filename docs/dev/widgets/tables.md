<p class="section-text">Widgets</p>

# Tables

Use tables to organize content into cells.

## How to Use

Tables follow the standard HTML structure as detailed below.

1. Wrap the entire table with the `<table>` container.
2. The portion of the table that has the table headings, wrap wih `<thead>`. Then follow the example below to add the table headings.
3. Add the `<tbody>` which holds all the cells for the table besides the table headings.
4. Build the table by row. Add the `<tr>` to wrap the content that belongs within that row. Within each row, use `<td>` for each cell. Ensure each row has the same amount of cells.

### Example 1: The width of each column is determined by the width of the content

```html
<table>
  <thead>
    <tr>
      <th scope="col">Assignment</th>
      <th scope="col">Points</th>
      <th scope="col">Due Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="javascript:void(0);">Module 1 Interactive Readings</a></td>
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

### Example 1: Preview

<div class="example-container">
  <table>
    <thead>
      <tr>
        <th scope="col">Assignment</th>
        <th scope="col">Points</th>
        <th scope="col">Due Date</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><a href="javascript:void(0);">Module 1 Interactive Readings</a></td>
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

## CSS

The CSS is located in the `/src/scss/modules/tables.scss` file. Included is the media query to make tables responsive on mobile.

```css
table {
  border-collapse: collapse !important;
  color: var(--color-white);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
  margin: 40px 20px 15px 20px;
  text-rendering: optimizeLegibility;
  border: 1px solid var(--color-primary);

  th {
    font-size: 1.0625rem;
    font-weight: bold;
    line-height: normal;
    padding: 5px;
    text-align: left;
    vertical-align: top;
    border: none;
  }

  thead,
  tr,
  td {
    vertical-align: top;
  }

  caption {
    font-size: 1.3rem;
    margin: 0.25rem;
    margin-bottom: 0.25rem;
  }

  thead th {
    font-weight: 600;
  }

  thead th,
  tbody td {
    font-size: 1rem;
    padding: 0.8rem;
  }

  tbody tr {
    color: var(--color-primary);
    font-size: 1rem;
    padding: 0.8rem;
  }
}

table {
  width: 100%;
}

table td,
table th {
  font-size: 1rem;
  padding: 10px 10px 20px 10px;
  border: 1px solid var(--color-primary);
}

@media screen and (min-width: 730px) {
  table {
    margin: 20px 0 5px 0;
  }
}

@media screen and (min-width: 768px) {
  table.custom-width th:first-child {
    width: 40%;
  }
  table.custom-width th:nth-child(2) {
    width: 20%;
  }
  tr:nth-child(even) {
    background-color: var(--color-primary-tint1);
  }
  table th {
    background-color: var(--color-primary);
  }
}

/* Responsive table CSS for mobile */
@media screen and (max-width: 768px) {
  table {
    background: none;
    background-color: var(--color-white);
    display: inline-table !important; /*fixes table snapping in all browsers, including ie*/
    margin: 10px auto;

    thead {
      display: none;
    }

    tbody td {
      display: block;
      padding: 0.6rem;
      border-bottom: 1px solid var(--color-primary);

      a {
        color: var(--color-white);

        &:hover {
          color: var(--color-primary-tint1);
        }
      }

      &:first-child {
        color: var(--color-white);
        background-color: var(--color-primary);
      }

      &::before {
        content: attr(data-th) ": ";
        display: inline-block;
        font-weight: bold;
        padding-right: 5px;
        width: auto;
      }
    }
  }

  td:nth-of-type(odd) {
    background-color: var(--color-primary-tint1);
  }
}

td#alignright {
  text-align: right;
}

table.two-column-table {
  border-collapse: collapse;
  margin: 0;

  tr {
    border-bottom: 15px solid transparent !important;
    display: table-row;

    td {
      padding: 0;
      vertical-align: top;

      &:first-child::after {
        content: ":";
      }

      &:nth-child(2) {
        padding-left: 5%;
        width: 100%;
      }
    }

    &:nth-child(even) {
      background: transparent;
    }
  }

  h3 {
    margin-top: 0;
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;

    li:before {
      content: "\F101";
      font-family: "FontAwesome";
      font-size: 1rem;
      font-weight: 400;
      margin-right: 10px;
      opacity: 1;
    }
  }
}

table.two-column-table,
table.two-column-table tr,
table.two-column-table tr td {
  border: none;
}

/* Can be added to th elements to adjust the width of the column */
.sm-table-col {
  width: 20%;
}

.md-table-col {
  width: 30%;
}

.lg-table-col {
  width: 50%;
}
```

## JS

The JS for the table widget is located in `/src/ts/modules/responsiveTables.ts`. The JS hides the content of all `<th>` elements and adds `data-th` attributes with the respective `<th>` content to each of the `<td>` elements.

```js
// Select all tables in the document
const responsiveTables: NodeListOf<HTMLTableElement> = document.querySelectorAll("table");

// Function to initialize responsive tables
const initResponsiveTables = () => {
  // Loop through each table in the `tables` NodeList
  [...responsiveTables].forEach((table: HTMLTableElement) => {
    // Select all header elements within the current table
    const tableHeaders: NodeListOf<HTMLElement> = table.querySelectorAll(" table th, table th,  table th, table th");
    // Select the table body within the current table
    const tableBody: HTMLTableSectionElement | null = table.querySelector("table tbody, table tbody,  table tbody, table tbody");

    if (tableHeaders.length > 0) {
      // Initialize an array to store header text
      const headerTexts: string[] = [...tableHeaders].map((headerText) => headerText.textContent?.replace(/\r?\n|\r/, "") || "");

      // Check if `tableBody` is not null before proceeding
      if (tableBody) {
        // Loop through each row in the table body
        [...tableBody.rows].forEach((row) => {
          // Loop through each cell in the current row
          [...row.cells].forEach((cell, index) => {
            // Set a `data-th` attribute on the current cell with the corresponding header text
            cell.setAttribute("data-th", headerTexts[index]);
          });
        });
      } else {
        console.warn("Document error: no table <tbody> found"); // Note: Google Chrome will automatically include a <tbody>
      }
    } else {
      console.warn("Document error: no table headers <th> found");
    }
  });
};

// Call the `initResponsiveTables` function to initialize responsive tables if there are any tables
if (responsiveTables.length > 0) {
  initResponsiveTables();
}
```

  <div class="footer">
    <p>&copy; 2024 Strata UI</p>
  </div>

export const responsiveTablesJs = () => {
	
// Select all tables in the document
const responsiveTables = document.querySelectorAll("table")

// Function to initialize responsive tables
const initResponsiveTables = () => {
  // Loop through each table in the `tables` NodeList
  ;[...responsiveTables].forEach(table => {
    // Select all header elements within the current table
    const tableHeaders = table.querySelectorAll("th")


    // Select the table body within the current table
    const tableBody = table.querySelector("tbody")


    if (tableHeaders.length > 0) {
      // Initialize an array to store header text
      const headerTexts = [...tableHeaders].map(
        headerText => headerText.textContent?.replace(/\r?\n|\r/, "") || ""
      )

      // Check if `tableBody` is not null before proceeding
      if (tableBody) {
        // Loop through each row in the table body
        ;[...tableBody.rows].forEach(row => {
          // Loop through each cell in the current row
          ;[...row.cells].forEach((cell, index) => {
            // Set a `data-th` attribute on the current cell with the corresponding header text
            cell.setAttribute("data-th", headerTexts[index])
          })
        })
      } else {
        console.warn("Document error: no table <tbody> found") // Note: Google Chrome will automatically include a <tbody>
      }
    } else {
      console.warn("Document error: no table headers <th> found")
    }
  })
}

// Call the `initResponsiveTables` function to initialize responsive tables if there are any tables
if (responsiveTables.length > 0) {
  initResponsiveTables()
}
}
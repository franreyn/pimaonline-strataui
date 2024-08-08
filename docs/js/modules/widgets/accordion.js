export const accordionWidgetJs = () => {
  // Select all accordion widgets
  const accordionWidgets = document.querySelectorAll("accordion-widget");

  // Validate each accordion widget
  const validateAccordion = (accordionWidget) => {

    // Check if there are any accordion items inside the accordion widget
    const accordionItems = accordionWidget.querySelectorAll('accordion-item');

    // If there are no accordion items, log a warning
    if (accordionItems.length === 0) {
      console.warn('Document Error: no accordion items found inside the accordion widget.');
      return;
    }

    // Check if there are any headings and content inside each accordion item
    accordionItems.forEach((item, index) => {
      const heading = item.querySelector('h3, h4');
      const content = item.querySelector('accordion-content');

      // If there are no heading for the accordion item, log a warning
      if (!heading) {
        console.warn(`Document Error: no heading found for accordion item ${index + 1}.`);
        return;
      }

      // If there are no content for the accordion item, log a warning
      if (!content) {
        console.warn(`No content found for accordion item ${index + 1}.`);
        return;
      }
    });
  };

  // Handle accordions
  const handleAccordions = () => {

    // Iterate over each accordion widget
    accordionWidgets.forEach((accordionWidget) => {

      // Validate the accordion widget
      validateAccordion(accordionWidget);

      const accordionItems = accordionWidget.querySelectorAll("accordion-item");

      // Iterate over each accordion item
      if (accordionItems.length > 0) {
        accordionItems.forEach((accordionItem) => {

          const accordionHeading = accordionItem.querySelector("accordion-item>h3, accordion-item>h4");

          // Add classes and attributes to the accordion heading and content
          if (accordionHeading) {
            accordionHeading.setAttribute("tabindex", "0");
            accordionHeading.classList.add("toggle-btn");
            accordionHeading.classList.add("accordion-title");
            accordionHeading.classList.add("arrow-right");
          }

          const accordionContent = accordionItem.querySelector("accordion-content");

          // Add class to the accordion content
          if (accordionContent) {
            accordionContent.classList.add("toggle-btn-content");
          }
        });
      }

    });
  };

  // If there are any accordion widgets, call handleAccordions
  if (accordionWidgets.length > 0) { handleAccordions(); }

}
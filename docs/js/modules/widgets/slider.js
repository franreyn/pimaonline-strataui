export const sliderWidgetJs = () => {
  const sliderWidgets = document.querySelectorAll("slider-widget");
  const sliderItems = document.querySelectorAll("slider-item");
  const slideHeight = 300;

  const handleSliderWidget = () => {
    // Function to check if all direct children of each slider have the "slider-item" class
    const checkSliderChildren = () => {
      sliderWidgets.forEach((slider) => {
        // Check if every direct child of the slider has the "slider-item" tag
        let sliderChildren = Array.from(slider.children).every(child => child.tagName.toLowerCase() === "slider-item");

        // Log an error message if any direct child does not have the "slider-item"
        if (!sliderChildren) {
          console.warn(`Document error: not all direct children of slider-widget have the slider-item tag name`);
        }
      });
    };
    checkSliderChildren();

    // Function to hide all slides except the active one and deactivate all dots except the active one
    const hideSlidesAndDots = (sliderItems, sliderDots, newIndex) => {
      // Iterate over each slider item
      sliderItems.forEach((item, itemIndex) => {
        // Set the display style based on whether the item is the active slide
        item.style.display = itemIndex === newIndex ? "block" : "none";
      });
      // Iterate over each dot
      sliderDots.forEach((sliderDot, sliderDotIndex) => {
        // Toggle the "active" class based on whether the dot corresponds to the active slide
        sliderDot.classList.toggle("active", sliderDotIndex === newIndex);
      });
    };

    // Function to update the display of slides and dots when a new slide is selected
    const updateSlide = (sliderItems, sliderDots, newIndex) => {
      // Call the function to hide all slides and deactivate all dots except for the active ones
      hideSlidesAndDots(sliderItems, sliderDots, newIndex);
    };

    // Function to create a button element with the specified class name
    const createSliderButton = (className) => {
      // Create a new button element
      const sliderButton = document.createElement("button");
      // Set the class name of the button
      sliderButton.className = className;
      // Set tabindex to -1 to skip when tabbing
      sliderButton.setAttribute("tabindex", "-1");
      // Return the created button
      return sliderButton;
    };

    // Function to vertically center the content of a slide if it is short and does not contain videos
    const totalSlideContentHeight = (sliderItem) => {
      let totalContentHeight = 0;
      // Iterate over the children of sliderItem
      for (let i = 0; i < sliderItem.children.length; i++) {
        const child = sliderItem.children[i]; // Children returns an element
        // Check if the child is an HTMLElement
        if (child instanceof HTMLElement) {
          totalContentHeight += child.offsetHeight;
        }
      }
      if (totalContentHeight < slideHeight && !sliderItem.querySelector(".media-container")) {
        const sliderWrapper = document.createElement("div");
        while (sliderItem.firstChild) {
          sliderWrapper.appendChild(sliderItem.firstChild);
        }
        sliderItem.appendChild(sliderWrapper);
        sliderItem.classList.add("short-content");
      }
    };

    // Initialize each slider with navigation buttons, dots, and keyboard navigation
    document.querySelectorAll("slider-widget").forEach((slider, sliderIndex) => {
      // Set accessibility attributes for the slider
      slider.setAttribute("tabindex", "0");
      slider.setAttribute("role", "group");

      // Create a hidden label for the slider for screen readers
      const sliderLabel = document.createElement("span");
      sliderLabel.id = `slider-label-${sliderIndex + 1}`;
      sliderLabel.textContent = "Interactive Slider";
      sliderLabel.hidden = true;
      // Insert the label at the beginning of the slider
      slider.prepend(sliderLabel);

      // Associate the label with the slider for screen readers
      slider.setAttribute("aria-labelledby", `slider-label-${sliderIndex + 1}`);

      // Initialize the current index for the slider
      let currentSlide = 0;
      // Select all slider items within the current slider
      const sliderItems = Array.from(slider.querySelectorAll("slider-item"));
      // Create a div to contain the dots for navigation
      const sliderDotsBar = document.createElement("div");
      sliderDotsBar.className = "slider-dots-bar";
      // Append the dots bar to the slider
      slider.appendChild(sliderDotsBar);
      // Initialize an array to keep track of the dots
      let sliderDots = [];

      // Create dots for each slide and set up click events to navigate to the slide
      sliderItems.forEach((sliderItem, sliderIndex) => {
        // Create a span element to represent a dot
        const sliderDot = document.createElement("span");
        sliderDot.className = "slider-dot";
        // Add a click event listener to the dot
        sliderDot.addEventListener("click", () => {
          // Update the current index to the index of the clicked dot
          currentSlide = sliderIndex;
          // Call the function to update the slide display
          hideSlidesAndDots(sliderItems, sliderDots, currentSlide);
          // Ensure the current slide is displayed
          sliderItems[currentSlide].style.display = "block";
          // Add the "active" class to the current dot
          sliderDot.classList.add("active");
          // Call the function to align the slide content if necessary
          totalSlideContentHeight(sliderItems[currentSlide]);
        });
        // Append the dot to the dots bar
        sliderDotsBar.appendChild(sliderDot);
        // Add the dot to the array of dots
        sliderDots.push(sliderDot);

        // Hide the slide if it's not the current one
        sliderItem.style.display = sliderIndex !== currentSlide ? "none" : "block";
        // If it's the current slide, add the "active" class to the corresponding dot
        if (sliderIndex === currentSlide) {
          sliderDot.classList.add("active");
        }
      });

      // Create navigation buttons and set up click events to navigate between slides
      const sliderLeftArrow = createSliderButton("slider-arrow fa-chevron-left");
      const sliderRightArrow = createSliderButton("slider-arrow fa-chevron-right");
      // Append the navigation buttons to the slider
      slider.appendChild(sliderLeftArrow);
      slider.appendChild(sliderRightArrow);

      // Add a click event listener to the left arrow button
      sliderLeftArrow.addEventListener("click", () => {
        // Update the current index to the previous slide, wrapping around if necessary
        currentSlide = currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1;
        // Call the function to update the slide display
        updateSlide(sliderItems, sliderDots, currentSlide);
        // Call the function to align the slide content if necessary
        totalSlideContentHeight(sliderItems[currentSlide]);
      });

      // Add a click event listener to the right arrow button
      sliderRightArrow.addEventListener("click", () => {
        // Update the current index to the next slide, wrapping around if necessary
        currentSlide = currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0;
        // Call the function to update the slide display
        updateSlide(sliderItems, sliderDots, currentSlide);
        // Call the function to align the slide content if necessary
        totalSlideContentHeight(sliderItems[currentSlide]);
      });

      // Function to update the label text when the slide changes
      function updateSliderLabel() {
        // Update the text content of the label to reflect the current slide number
        sliderLabel.textContent = `Interactive Slide: slide ${currentSlide + 1} of ${sliderItems.length}`;
      }

      // Set up keyboard navigation for the slider
      slider.addEventListener("keydown", (event) => {
        // Handle the left and right arrow keys
        switch (event.key) {
          case "ArrowLeft":
            // Update the current index to the previous slide, wrapping around if necessary
            currentSlide = currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1;
            break;
          case "ArrowRight":
            // Update the current index to the next slide, wrapping around if necessary
            currentSlide = currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0;
            break;
          default:
            // If any other key is pressed, do nothing and return
            return;
        }
        // Call the function to update the slide display
        updateSlide(sliderItems, sliderDots, currentSlide);
        // Call the function to align the slide content if necessary
        totalSlideContentHeight(sliderItems[currentSlide]);
        // Prevent the default action for the keydown event
        event.preventDefault();
        // Call the function to update the label text
        updateSliderLabel();
        // Focus the slider widget
        slider.focus();
      });

      // Variables to store the starting and ending X coordinates of a touch event
      let touchStartX = 0;
      let touchEndX = 0;

      // Event listener for the "touchstart" event, which fires when a touch point is placed on the touch surface
      slider.addEventListener("touchstart", (e) => {
        // Store the X coordinate of the touch point when the touch starts
        touchStartX = e.changedTouches[0].screenX;
      }, false);

    });

  }

  if (sliderWidgets.length > 0) {
    handleSliderWidget();
  }

}
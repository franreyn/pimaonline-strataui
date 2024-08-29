export const sliderWidgetJs = () => {
  const sliderWidgets = document.querySelectorAll(".slider-widget")
const sliderItems = document.querySelectorAll(".slider-item")
const slideHeight = 300

const handleSliderWidget = () => {
  // Function to check if all direct children of each slider have the "slider-item" class
  const checkSliderChildren = () => {
    ;[...sliderWidgets].forEach(slider => {
	// Get all direct child div elements of the slider
	const sliderChildrenDivs = Array.from(slider.children).filter(child =>
		child.tagName === 'DIV'
	);

    // Check if every direct child div has the "slider-item" class
    const allChildrenAreSliderItems = sliderChildrenDivs.every(child =>
      child.classList.contains("slider-item") || child.classList.contains("slider-dots-bar")
    );

    if (!allChildrenAreSliderItems) {
      // Find any child divs that do not have the "slider-item" class
      sliderChildrenDivs.forEach(child => {
        if (!child.classList.contains("slider-item") && !child.classList.contains("slider-dots-bar")) {
          console.warn(
            "Document error: not all direct child div elements of slider-widget have the slider-item class"
          );
        }
      });
    }
    })
  }
  checkSliderChildren()

  // Function to hide all slides except the active one and deactivate all dots except the active one
  const hideSlidesAndDots = (sliderItems, sliderDots, newIndex) => {
    // Iterate over each slider item
    sliderItems.forEach((item, itemIndex) => {
      // Set the display style based on whether the item is the active slide
      item.style.display = itemIndex === newIndex ? "block" : "none"
    })
    // Iterate over each dot
    sliderDots.forEach((sliderDot, sliderDotIndex) => {
      // Toggle the "active" class based on whether the dot corresponds to the active slide
      sliderDot.classList.toggle("active", sliderDotIndex === newIndex)
    })
  }

  // Function to update the display of slides and dots when a new slide is selected
  const updateSlide = (sliderItems, sliderDots, newIndex) => {
    // Call the function to hide all slides and deactivate all dots except for the active ones
    hideSlidesAndDots(sliderItems, sliderDots, newIndex)
  }

  // Function to create a button element with the specified class name
  const createSliderButton = className => {
    // Create a new button element
    const sliderButton = document.createElement("button")
    // Set the class name of the button
    sliderButton.className = className
    // Set tabindex to -1 to skip when tabbing
    sliderButton.setAttribute("tabindex", "-1")
    // Return the created button
    return sliderButton
  }

  // Function to vertically center the content of a slide if it is short and does not contain videos
  const totalSlideContentHeight = sliderItem => {
    let totalContentHeight = 0
    // Iterate over the children of sliderItem
    for (let i = 0; i < sliderItem.children.length; i++) {
      const child = sliderItem.children[i] // Children returns an element
      // Check if the child is an HTMLElement
      if (child instanceof HTMLElement) {
        totalContentHeight += child.offsetHeight
      }
    }
    if (
      totalContentHeight < slideHeight &&
      !sliderItem.querySelector(".media-container")
    ) {
      const sliderWrapper = document.createElement("div")
      while (sliderItem.firstChild) {
        sliderWrapper.appendChild(sliderItem.firstChild)
      }
      sliderItem.appendChild(sliderWrapper)
      sliderItem.classList.add("short-content")
    }
  }

  // Initialize each slider with navigation buttons, dots, and keyboard navigation
  document.querySelectorAll(".slider-widget").forEach((slider, sliderIndex) => {
  // Set accessibility attributes for the slider
  slider.setAttribute("tabindex", "0")
  slider.setAttribute("role", "group")

  // Create a hidden label for the slider for screen readers
  const sliderLabel = document.createElement("span")
  sliderLabel.id = `slider-label-${sliderIndex + 1}`
  sliderLabel.textContent = "Interactive Slider"
  sliderLabel.hidden = true
  // Insert the label at the beginning of the slider
  slider.prepend(sliderLabel)

  // Associate the label with the slider for screen readers
  slider.setAttribute("aria-labelledby", `slider-label-${sliderIndex + 1}`)

  // Initialize the current index for the slider
  let currentSlide = 0
  // Select all slider items within the current slider
  const sliderItems = Array.from(slider.querySelectorAll(".slider-item"))
  // Check if a slider-dots-bar already exists
  let sliderDotsBar = slider.querySelector(".slider-dots-bar")
  
  // If it doesn't exist, create a new one
  if (!sliderDotsBar) {
    sliderDotsBar = document.createElement("div")
    sliderDotsBar.className = "slider-dots-bar"
    // Append the dots bar to the slider
    slider.appendChild(sliderDotsBar)
  }

// Initialize an array to keep track of the dots
let sliderDots = []

// Create dots for each slide and set up click events to navigate to the slide
// Check if there are any dots already present to avoid duplicates
if (sliderDotsBar.children.length === 0) {
  sliderItems.forEach((sliderItem, sliderIndex) => {
    const sliderDot = document.createElement("span")
    sliderDot.className = "slider-dot"

    // Add a click event listener to the dot
    sliderDot.addEventListener("click", () => {
      currentSlide = sliderIndex
      updateSlide(sliderItems, sliderDots, currentSlide)
      totalSlideContentHeight(sliderItems[currentSlide])
    })

    sliderDotsBar.appendChild(sliderDot)
    sliderItem.style.display = sliderIndex !== currentSlide ? "none" : "block"
    if (sliderIndex === currentSlide) {
      sliderDot.classList.add("active")
    }
  })
} 

// Populate sliderDots array with the actual dots from the sliderDotsBar
sliderDots = Array.from(sliderDotsBar.children)



    // Create navigation buttons and set up click events to navigate between slides
    const sliderLeftArrow = createSliderButton("slider-arrow fa-chevron-left")
    const sliderRightArrow = createSliderButton("slider-arrow fa-chevron-right")
    // Append the navigation buttons to the slider
    slider.appendChild(sliderLeftArrow)
    slider.appendChild(sliderRightArrow)

		// Add a click event listener to the left arrow button
		sliderLeftArrow.addEventListener("click", () => {
			// Update the current index to the previous slide, wrapping around if necessary
			currentSlide =
				currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1
			// Call the function to update the slide display
			updateSlide(sliderItems, sliderDots, currentSlide)
			// Call the function to align the slide content if necessary
			totalSlideContentHeight(sliderItems[currentSlide])
		})

		// Add a click event listener to the right arrow button
		sliderRightArrow.addEventListener("click", () => {
			// Update the current index to the next slide, wrapping around if necessary
			currentSlide =
				currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0
			// Call the function to update the slide display
			updateSlide(sliderItems, sliderDots, currentSlide)
			// Call the function to align the slide content if necessary
			totalSlideContentHeight(sliderItems[currentSlide])
		})


    // Function to update the label text when the slide changes
    function updateSliderLabel() {
      // Update the text content of the label to reflect the current slide number
      sliderLabel.textContent = `Interactive Slide: slide ${currentSlide +
        1} of ${sliderItems.length}`
    }

    // Set up keyboard navigation for the slider
    slider.addEventListener("keydown", event => {
      // Handle the left and right arrow keys
      switch (event.key) {
        case "ArrowLeft":
          // Update the current index to the previous slide, wrapping around if necessary
          currentSlide =
            currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1
          break
        case "ArrowRight":
          // Update the current index to the next slide, wrapping around if necessary
          currentSlide =
            currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0
          break
        default:
          // If any other key is pressed, do nothing and return
          return
      }
      // Call the function to update the slide display
      updateSlide(sliderItems, sliderDots, currentSlide)
      // Call the function to align the slide content if necessary
      totalSlideContentHeight(sliderItems[currentSlide])
      // Prevent the default action for the keydown event
      event.preventDefault()
      // Call the function to update the label text
      updateSliderLabel()
      // Focus the slider widget
      slider.focus()
    })

    // Variables to store the starting and ending X coordinates of a touch event
    let touchStartX = 0
    let touchEndX = 0

    // Event listener for the "touchstart" event, which fires when a touch point is placed on the touch surface
    slider.addEventListener(
      "touchstart",
      e => {
        // Store the X coordinate of the touch point when the touch starts
        touchStartX = e.changedTouches[0].screenX
      },
      false
    )

    // Event listener for the "touchend" event, which fires when a touch point is removed from the touch surface
    slider.addEventListener(
      "touchend",
      e => {
        // Store the X coordinate of the touch point when the touch ends
        touchEndX = e.changedTouches[0].screenX
        // Call the function to handle the swipe gesture
        sliderSwipe()
      },
      false
    )

    // Function to handle the swipe gesture
    const sliderSwipe = () => {
      // Calculate the difference between the starting and ending X coordinates
      let diffX = touchEndX - touchStartX

      // Check if the absolute value of the difference is greater than a minimum threshold (50 pixels)
      if (Math.abs(diffX) > 50) {
        // Minimum distance for a swipe
        // Determine the direction of the swipe based on the sign of the difference
        if (diffX > 0) {
          // If the difference is positive, the user swiped to the left
          // Update the current slide index to the previous slide, wrapping around if necessary
          currentSlide =
            currentSlide > 0 ? currentSlide - 1 : sliderItems.length - 1
        } else {
          // If the difference is negative, the user swiped to the right
          // Update the current slide index to the next slide, wrapping around if necessary
          currentSlide =
            currentSlide < sliderItems.length - 1 ? currentSlide + 1 : 0
        }
        // Call the function to update the slide display
        updateSlide(sliderItems, sliderDots, currentSlide)
        // Call the function to align the slide content if necessary
        totalSlideContentHeight(sliderItems[currentSlide])
        // Refocus the slider widget to maintain accessibility
        slider.focus()
      }
    }
  })

  // Function to check if the slider contains all required elements for navigation
  const checkSliderNavs = (slider, sliderIndex) => {
    // Select the navigation controls within the context of the current slider
    const sliderNextButton = slider.querySelector(".fa-chevron-right")
    const sliderPrevButton = slider.querySelector(".fa-chevron-left")
    const sliderDotsBar = slider.querySelector(".slider-dots-bar")

    // Check if the navigation controls are present
    if (!sliderNextButton) {
      console.warn(
        `Document error: next button is missing for slider ${sliderIndex + 1}.`
      )
    }
    if (!sliderPrevButton) {
      console.warn(
        `Document error: previous button is missing for slider ${sliderIndex +
          1}.`
      )
    }
    if (!sliderDotsBar) {
      console.warn(
        `Document error: dots bar is missing for slider ${sliderIndex + 1}.`
      )
    }
  }

  // Call the function for each slider to perform the check
  sliderWidgets.forEach((slider, sliderIndex) => {
    checkSliderNavs(slider, sliderIndex)
  })

  // Check if slider items are empty
  const checkEmptySliderItems = () => {
    sliderWidgets.forEach((slider, sliderIndex) => {
      // Get all slider-item children of the current slider
      let sliderItems = Array.from(slider.querySelectorAll(".slider-item"))

      // Check each slider-item to see if it is empty
      sliderItems.forEach((item, itemIndex) => {
        // An element is considered empty if it has no children, or all its children are either comment nodes or text nodes with only whitespace
        const isEmpty = Array.from(item.childNodes).every(node => {
          return (
            node.nodeType === Node.COMMENT_NODE ||
            (node.nodeType === Node.TEXT_NODE && !node.textContent.trim())
          )
        })

        // Log an error message if the slider-item is empty
        if (isEmpty) {
          console.warn(
            `Document error: slider-item at index ${itemIndex} in slider ${sliderIndex +
              1} is empty.`
          )
        }
      })
    })
  }
  checkEmptySliderItems()
}

if (sliderWidgets.length > 0) {
  handleSliderWidget()
}

if (sliderItems.length > 0) {
  if (sliderWidgets.length === 0) {
    // Error check: slider-item elements found but no slider-widget elements found
    console.warn(
      "Document error: slider-item elements found but no slider-widget elements found. Please add a slider-widget element to contain the slider-item elements."
    )
  }
}

}
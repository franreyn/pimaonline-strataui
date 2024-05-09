// Define a constant for media widgets, selecting all elements with the tag "media-widget"
const mediaWidgets: NodeListOf<HTMLDivElement> = document.querySelectorAll("media-widget");

// Define a function to add ARIA attributes to media widgets
const addMediaWidgetsAria = (): void => {
  // Iterate over each media widget
  mediaWidgets.forEach((eachMediaWidget: HTMLElement, index: number) => {
    // Generate a unique ID for each media widget container based on its index, converting to a letter
    let mediaLoopId: string = String.fromCharCode(index + 65).toLowerCase();
    // Select the media object within the current media widget container
    let mediaObject: HTMLElement | null = eachMediaWidget.querySelector("media-object");
    // Select the iframe within the current media widget container
    let mediaIframe: HTMLElement | null = eachMediaWidget.querySelector("iframe");
    // Select the media info within the current media widget container
    let mediaInfo: HTMLElement | null = eachMediaWidget.querySelector("media-info");

    // Check if the iframe exists within the current media widget container
    if (!mediaIframe) {
      console.warn("Document error: no iframe found for media widget");
    }
    // Check if the media object exists within the current media widget container
    if (!mediaObject) {
      console.warn("Document error: no media object found for media widget");
    }

    // If the iframe does not have an "aria-describedby" attribute and there is a media info element
    if (mediaIframe && !mediaIframe.hasAttribute("aria-describedby") && mediaInfo) {
      // Set the "aria-describedby" attribute of the iframe to the generated ID
      mediaIframe.setAttribute("aria-describedby", `${mediaLoopId}`);
      // Set the ID of the media info element to the generated ID
      mediaInfo.id = `${[mediaLoopId]}`;
    }
  });
}

// Call the function to add ARIA attributes if media widgets are present
if (mediaWidgets.length > 0) { addMediaWidgetsAria(); }
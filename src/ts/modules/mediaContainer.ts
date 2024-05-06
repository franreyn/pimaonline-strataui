// Define a constant for media containers, selecting all elements with the class "media-container"
const mediaContainers: NodeListOf<HTMLDivElement> = document.querySelectorAll("media-container");

// Define a function to add ARIA attributes to media containers
const addMediaContainersAria = (): void => {
  // Iterate over each media container
  mediaContainers.forEach((eachContainer: HTMLElement, index: number) => {
    // Generate a unique ID for each container based on its index, converting to a letter
    let mediaLoopId: string = String.fromCharCode(index + 65).toLowerCase();
    // Select the media object within the current container
    let mediaObject: HTMLElement | null = eachContainer.querySelector("media-object");
    // Select the iframe within the current container
    let mediaIframe: HTMLElement | null = eachContainer.querySelector("iframe");
    // Select the media info within the current container
    let mediaInfo: HTMLElement | null = eachContainer.querySelector("media-info");

    // Check if the iframe exists within the current container
    if (!mediaIframe) {
      console.warn("Document error: no iframe found for media container");
    }
    // Check if the media object exists within the current container
    if (!mediaObject) {
      console.warn("Document error: no media object found for media container");
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

// Call the function to add ARIA attributes if media containers are present
if (mediaContainers.length > 0) { addMediaContainersAria(); }
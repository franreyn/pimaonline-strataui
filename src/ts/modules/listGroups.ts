const listGroups: NodeListOf<HTMLElement> = document.querySelectorAll('unordered-list-group, ordered-list-group');

// Function to handle list groups
const handleListGroups = (listGroups: NodeListOf<HTMLElement>) => {

  // Loop through each list group
  listGroups.forEach((listGroup: HTMLElement) => {
    const listItems: NodeListOf<HTMLElement> = listGroup.querySelectorAll('list-group-item');

    // Add class to list group
    listGroup.classList.add("list-group");

    listItems.forEach((listItem: HTMLElement) => {
      // Add class to list items
      listItem.classList.add("list-group-item");
    });
  });

}

// Check if list groups exist
if(listGroups.length > 0) {
  handleListGroups(listGroups)
}
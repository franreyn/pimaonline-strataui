// Select list groups
const listGroups: NodeListOf<HTMLElement> = document.querySelectorAll(".unordered-list-group, .ordered-list-group");

// Function to handle individual list group
const handleListGroup = (listGroup: HTMLElement) => {
  const listItems: NodeListOf<HTMLElement> = listGroup.querySelectorAll(".list-group-item");

  // Add class to list group
  listGroup.classList.add("list-group");

  // Add class to each list item
  listItems.forEach((listItem: HTMLElement) => {
    listItem.classList.add("list-group-item");
  });
};

// Function to handle all list groups
const handleListGroups = (listGroups: NodeListOf<HTMLElement>) => {
  listGroups.forEach((listGroup: HTMLElement) => {
    handleListGroup(listGroup);
  });
};

// Check if list groups exist
if(listGroups.length > 0) {
  handleListGroups(listGroups)
}
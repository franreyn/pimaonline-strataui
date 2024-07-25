const listGroups = document.querySelectorAll('unordered-list-group, ordered-list-group');

const handleListGroups = (listGroups: NodeListOf<Element>) => {

  listGroups.forEach((listGroup: Element) => {
    const listItems: NodeListOf<Element> = listGroup.querySelectorAll('list-group-item');

    listGroup.classList.add("list-group");

    listItems.forEach((listItem: Element) => {
      listItem.classList.add("list-group-item");
    });
  });

}

if(listGroups.length > 0) {
  handleListGroups(listGroups)
}
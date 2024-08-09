// Select toggle buttons
const toggleBtns: NodeListOf<HTMLElement> = document.querySelectorAll(".toggle-btn, .toggle-footnotes");

const handleToggle = (event: Event) => {
  const target = event.target as HTMLElement;
  const nextElement: Element | null = target.nextElementSibling;
  if (nextElement) {
    nextElement.classList.toggle("show");
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "Enter") {
    handleToggle(event);
  }
};

const handleToggleButtons = () => {
  toggleBtns.forEach((toggleBtn: HTMLElement) => {
    toggleBtn.setAttribute("tabindex", "0");
    toggleBtn.addEventListener("click", handleToggle);
    toggleBtn.addEventListener("keydown", handleKeydown);
  });
};

if (toggleBtns.length > 0) {
  handleToggleButtons();
}
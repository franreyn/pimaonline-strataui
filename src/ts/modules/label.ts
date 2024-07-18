const defaultLabels: NodeListOf<HTMLElement> = document.querySelectorAll("default-label");
const mutedLabels: NodeListOf<HTMLElement> = document.querySelectorAll("muted-label");

defaultLabels.forEach((defaultLabel: HTMLElement) => {
  defaultLabel.classList.add("label-default");
  defaultLabel.classList.add("label");
})

mutedLabels.forEach((mutedLabel: HTMLElement) => {
  mutedLabel.classList.add("label-muted");
  mutedLabel.classList.add("label");
})
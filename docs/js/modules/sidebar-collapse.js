
window.onload = function() {
  const sidebarBtn = document.querySelector('.sidebar-toggle');
  if (sidebarBtn) {
    const sidebarIcon = sidebarBtn.querySelector('.sidebar-toggle-button');
    sidebarBtn.addEventListener('click', () => {
      sidebarIcon.classList.toggle('closed');
    })

    sidebarBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        sidebarIcon.classList.toggle('closed');
      }
    })

  }

}
  
function removeMarginFromPos() {
  const sidebar = document.querySelector('.sidebar');
  const positions = document.querySelectorAll('.position');

  const sidebarBottom = sidebar.getBoundingClientRect().bottom + scrollY;

  positions.forEach((position) => {
    const rect = position.getBoundingClientRect();

    const posTop = rect.top + scrollY;
    const posBottom = rect.bottom + scrollY;

    if (posBottom > sidebarBottom) {
      position.style.marginLeft = '0';
    }
  });
}

export { removeMarginFromPos };

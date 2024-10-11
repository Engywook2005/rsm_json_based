function removeMarginFromPos() {
  const positions = document.querySelectorAll('.position');

  positions.forEach((position, i) => {
    const rect = position.getBoundingClientRect();

    const posBottom = rect.bottom + scrollY;
    console.log(`${i} ${posBottom}`);
    const pageBottom = 1005;

    if (posBottom > pageBottom) {
      position.classList.add('page-2');
    }
  });
}

export { removeMarginFromPos };

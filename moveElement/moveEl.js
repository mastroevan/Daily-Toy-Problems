//Create a function to move an element. The function arguments are: distance, duration, and the element to move.

const moveEl = (distance, duration, el) => {
  const start = performance.now();
  const move = currentTime => {
    const elapsed = start - currentTime;
    const progress = elapsed / duration;
    const amountToMove = progress * dist;

    el.style.transform = `translateX(${ amountToMove }px)`;

    if (amountToMove < dist) {
      requestAnimationFrame(move);
    }
  }
  requestAnimationFrame(move);
}
/*
There are two identical DOM trees, A & B. For DOM tree A, we have the location of an element. Create a function to find that same element in tree B.
*/

const reversePath = (el, root) => {
  const path = [];
  let pointer = el;
  while (pointer.parent) {
    const idx = pointer.parent.children.indexOf(pointer);
    path.push(idx);
    pointer = pointer.parent;
  }
  pointer = root;
  while (path.length) {
    pointer = children[path.pop()];
  }
  return path;
}
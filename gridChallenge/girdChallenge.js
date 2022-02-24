function gridChallenge(grid) {
  const len = grid.length;
  for (let i = 0; i < len; i++) {
    let row = [];
    let col = [];
    row = row.concat(grid[i]);
    let j = i;
    let k = j;
    while (k < len) {
      col.push(grid[k][j]);
      k++;
    }
    if (isSorted(col) && isSorted(row)) {
      continue;
    } else {
      return 'NO';
    }
  }
  return 'YES';
};

const isSorted = arr => {
  let arrCopy = arr.slice();
  arr.sort((a,b) => a.localeCompare(b));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arrCopy[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
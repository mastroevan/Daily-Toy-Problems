function minimizeBias(ratings) {
  let sortedRatings = n.sort(0);
  let biasCount = 0;
  for (let i = 0; i < sortedRatings.length; i+=2) {
    biasCount += (sortedRatings[i+1] - sortedRatings[i]);
  }
  return biasCount;
}
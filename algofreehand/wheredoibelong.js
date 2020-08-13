function getIndexToIns(arr, num) {
  // iterate over the array
  // for each array element check if num is greater than or equal to arr[i]
  // if it is then we want to return i - 1 to go back one place on the index indicating the insertion point
  var sorted = arr.concat(num).sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (num <= sorted[i]) {
      return i;
    }
  }
}

getIndexToIns([40, 60], 50);

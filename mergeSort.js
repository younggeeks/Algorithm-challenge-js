function merge(leftPile, rightPile) {
  let leftIndex = 0;
  let rightIndex = 0;
  let sortedPile = [];

  //while all piles have items
  while (leftIndex < leftPile.length && rightIndex < rightPile.length) {
    if (leftPile[leftIndex] < rightPile[rightIndex]) {
      sortedPile.push(leftPile[leftIndex]);
      leftIndex += 1;
    } else if (rightPile[rightIndex] < leftPile[leftIndex]) {
      sortedPile.push(rightPile[rightIndex]);
      rightIndex += 1;
    } else {
      sortedPile.push(leftPile[leftIndex]);
      leftIndex += 1;

      sortedPile.push(rightPile[rightIndex]);
      rightIndex += 1;
    }
  }

  //while only left pile has items
  while (leftIndex < leftPile.length) {
    sortedPile.push(leftPile[leftIndex]);
    leftIndex += 1;
  }

  //while only right pile has items
  while (rightIndex < rightPile.length) {
    sortedPile.push(rightPile[rightIndex]);
    rightIndex += 1;
  }

  return sortedPile;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let middleIndex = Math.floor(arr.length / 2);

  let leftArray = mergeSort(arr.slice(0, middleIndex));
  let rightArray = mergeSort(arr.slice(middleIndex, arr.length));

  return merge(leftArray, rightArray);
}

console.log(mergeSort([2, 1, 100, 7, 355, 5]));

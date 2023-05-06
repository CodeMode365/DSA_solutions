//  BigO(nlogn)
// Divide and  Conquore

const items = [1, 23, 4, 5, 465, 45, 34, 5, 23, 65, 43, 56, 33];

// logn
function mergeSort(arr: Array<number>): Array<number> {
  if (arr.length < 2) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left: number[] = arr.slice(0, midIndex);
  const right: number[] = arr.slice(midIndex, arr.length);
  return merge(mergeSort(left), mergeSort(right));
}


// n
function merge(left: Array<number>, right: Array<number>): Array<number> {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  //concatinate the ramaining items
  return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

console.log(mergeSort(items));

const sortedArr = [17, 21, 25, 28, 29, 30, 43, 54, 65, 67, 74, 75, 83, 98];

const binarySearch = (
  arr: number[],
  start: number,
  end: number,
  target: number
): number => {
  if (start > end) return -1;
  const midInd = Math.floor((start + end) / 2);
  if (target == arr[midInd]) return midInd;
  else if (target > arr[midInd])
    return binarySearch(arr, midInd + 1, end, target);
  else return binarySearch(arr, start, midInd - 1, target);
};

console.log(binarySearch(sortedArr,0,sortedArr.length-1,54))

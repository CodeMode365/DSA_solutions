// Binary searching algorithm
// For sorted array

/* @Generates random numbers from 0 to 100 */
// let orginalArray = [
//   Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
// ];

const numbers: number[] = [21, 22, 32, 41, 52, 65, 76, 85, 89, 92, 99];

function bindarySearch(
  arr: number[],
  start: number = 0,
  end: number = arr.length,
  target: number
): number {
  const midIndex: number = Math.floor((start + end) / 2);
  console.log(start, end);
  if (arr[midIndex] === target) {
    return midIndex;
  } else if (arr[midIndex] < target) {
    return bindarySearch(arr, midIndex + 1, end, target);
  } else if (arr[midIndex] > target) {
    return bindarySearch(arr, start, midIndex - 1, target);
  }
}

const output = bindarySearch(numbers, 0, numbers.length - 1, 21);
console.log(output);
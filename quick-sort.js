const partition = (arr, start, end) => {
  const pivotValue = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivotValue > arr[i]) {
      swapIndex++;
      if (i !== swapIndex) {
        [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
      }
    }
  }
  if (swapIndex !== start) {
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]];
  }
  return swapIndex;
};

const quickSort = (arr, start = 0, end = arr.length - 1) => {
  if (start >= end) return;
  let pivotIndex = partition(arr, start, end);

  quickSort(arr, start, pivotIndex - 1);

  quickSort(arr, pivotIndex + 1, end);
  return arr;
};

const data1 = [8, 9, 6, 4, 5];
quickSort(data1);
console.log(data1);

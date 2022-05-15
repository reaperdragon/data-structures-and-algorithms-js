const bubbleSort = (list) => {
  let n = list.length;

  for (let i = 0; i < n; i++) {
    let swap = false;

    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        let temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return;
};

const data1 = [56, 84, 5, 4, 24, 23, 15];
bubbleSort(data1);
console.log(data1);

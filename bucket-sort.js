const bucketSort = (arr, size = 5) => {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const bucket = Array.from(
        { length: Math.floor((max - min) / size) + 1 },
        () => []
    );
    arr.forEach(val => {
        bucket[Math.floor((val - min) / size)].push(val);
    });

    return bucket.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], []);
};

const data1 = [6, 5, 2, 4];
console.log(bucketSort(data1));
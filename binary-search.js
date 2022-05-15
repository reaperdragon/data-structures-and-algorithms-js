const binarySearch = (list, item) => {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
       
        if (list[mid] < item) {
            low = mid + 1
        } else if(list[mid] > item){
            high = mid - 1;
        } else if(list[mid] === item) {
            return mid;
        }
    }
    return -1;
}

const data1 = binarySearch([5, 6, 8,  9,10,16], 8);
console.log(data1); // 2
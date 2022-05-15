const linearSearch = (list, item) =>  {
    for (let i = 0; i < list.length; i++){
        if (list[i] === item) {
            return i;
        }
    }
    return -1;
}

const data1 = linearSearch([55, 85, 12, 63, 954, 45, 75, 2, 3, 56, 0, 15], 2);
console.log(data1);
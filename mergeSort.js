const mergeSort = numbers => {
    if(numbers.length <= 1) return numbers;
    const right = [...numbers];
    const middlePoint = numbers.length / 2;
    const left = right.splice(0, middlePoint);
    return mergeUnsortedNumbers(mergeSort(left), mergeSort(right));
}
const mergeUnsortedNumbers = (left, right) => {
    const sortedItems = [];
    while(left.length && right.length) {
        if(left[0] <= right[0]){
            sortedItems.push(left.shift())
        } else {
            sortedItems.push(right.shift())
        }
    }
    return [...sortedItems, ...left, ...right];
}
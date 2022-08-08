function selectionSort (numbers){
    let value;
    for (let i = 0; i < numbers.length; i++) {
        value = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[value] > numbers[j]) {
                value = j;
            }
        }
        if (i !== value){
            let temp = numbers[i];
            numbers[i] = numbers[value];
            numbers[value] = temp;
        }
    }
    return numbers;
}
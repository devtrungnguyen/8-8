function insertionSort(numbers) {
    for (var i = 1; i < numbers.length; i++) {
    var key = numbers[i];
    var j = i - 1;
    while (j >= 0 && key < numbers[j]) {
    numbers[j + 1] = numbers[j];
    --j;
    }
    numbers[j + 1] = key;
    }
    return numbers;
    }
   
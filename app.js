function truthyOrFalthy(elem) {
    let sum = 0;
    for (i = 1; i <= elem; ++i) {
        sum = sum + i
    }
    return sum;
}

console.log(truthyOrFalthy(3));
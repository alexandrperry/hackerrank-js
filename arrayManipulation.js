function arrayManipulation(n, queries) {
    let max = -99999
    const arr = new Array(n).fill(0)
    queries.forEach((element, index) => {
        const [start, end, value] = element
        arr[start - 1] += value
        if (end < arr.length) {
            arr[end] -= value
        }
    })
    console.log(arr)
    arr.reduce((acc, item) => {
        acc += item;
        max = Math.max(max, acc);
        return acc;
    }, 0);
    return max

}

function minimumSwaps(arr) {
    let swap = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            const item = arr[j]
            if (current !== i + 1 && item === i + 1) {
                const temp = arr[j]
                arr[j] = current
                arr[i] = temp
                swap++
                break
            }


        }

    }
    return swap
}

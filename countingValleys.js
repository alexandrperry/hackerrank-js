function countingValleys(n, s) {
    let altitude = 0
    let res = 0
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U') {
            if (altitude === -1) {
                res++
            }
            altitude++
        }
        if (s[i] === 'D') {
            altitude--
        }
    }
    return res
}

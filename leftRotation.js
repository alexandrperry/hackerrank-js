function rotLeft(a, d) {
    const res = []
    a.forEach((item, index) => {
        index - d >= 0 ? res[index - d] = item : res[a.length - Math.abs(index - d)] = item
    })
    return res
}

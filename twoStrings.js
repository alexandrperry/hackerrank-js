function twoStrings(s1, s2) {
    let status = null
    for (let i = 0; i < s1.length; i++){
        status = s2.includes(s1[i])
        if (status) break
    }
    return status ? 'YES' : 'NO'
}

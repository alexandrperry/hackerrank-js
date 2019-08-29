function checkMagazine(magazine, note) {
    const obj = {}
    magazine.forEach(item => {
        if (obj[item]) {
            obj[item]++
        }
        else {
            obj[item] = 1
        }
    })
    //console.log(obj)
    let status = 'Yes'
    for (let i = 0; i < note.length; i++){
        if (!obj[note[i]]) {
            status = 'No'
            break
        }
        if (obj[note[i]] < 1) {
            status = 'No'
            break
        }
        obj[note[i]]--
    }
    console.log(status)
    return status
    

}

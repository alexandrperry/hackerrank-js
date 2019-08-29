function jumpingOnClouds(c) {
    let start = 0
    let jump = 0
    c.forEach((num, i) => {
        if (i < c.length-1) {
            if (start === i) {
                if (c[i + 1]) {
                    start = i + 2
                    jump++
                }
                else {
                    jump++
                    if (!c[i + 2]) {
                        start = i + 2

                    }
                    else {
                        start = i + 1
                    }
                }
            }
        }
        
        
    })
    return jump

}

function minimumBribes(q) {
    let res = 0
    for (let i = 0; i < q.length; i++) {
        q[i]--
    }
    for (let i = 0; i < q.length; i++) {
        const current = q[i]
        const diff = current - i
        if (diff > 2) {
            console.log('Too chaotic');
            return
        }
        for (let j = Math.max(current - 1, 0); j < i; j++) {
            if (q[j] > current) {
                res++
            }
        }
    }


    console.log(res);

}

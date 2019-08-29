function sockMerchant(n, arr) {
    const itemsArr = [...new Set(arr)];
    let res = 0;
    itemsArr.forEach(item => {
        const len = arr.filter(num => num === item).length;
        if (len >= 2) {
            len % 2 ? res += (len - 1) / 2 : res += len / 2
        }
    });
    return res;
}

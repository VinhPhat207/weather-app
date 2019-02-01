// 1 + 2 + 3 + 4 + 5 + 6

getSum = (a, b, callback) => {
    return  new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a !== 'number' || typeof b !== 'number') {
                reject('Syntax err');
            } else {
                resolve({
                    sum: a + b
                })
            }
        }, 1000);
    });
}

getSum(1, 2)
    .then (res => {
        console.log('Sum: ' + res.sum)
        return getSum(res.sum, 3);
    })
    .then(res => {
        console.log('Sum: ' + res.sum)
        return getSum(res.sum, 'dsadsad');
    })
    .then(res => {
        console.log('Sum: ' + res.sum)
        return getSum(res.sum, 5);
    })
    .then(res => console.log('Sum: ' + res.sum))
    .catch (err => console.log(err))
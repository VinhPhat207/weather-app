const somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('It worked! 1');
        // resolve('It worked! 2');

        reject('It did not work!');
    }, 1000);
})

somePromise
    .then(res => console.log(res))
    .catch(err => console.log(err))
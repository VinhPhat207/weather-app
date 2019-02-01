getData = (callback) => {
    setTimeout(() => {
        console.log("Get data");
        callback();
    }, 3000);
}

showData = () => {
    console.log('Show data');
}

getData(() => {
    showData();
});
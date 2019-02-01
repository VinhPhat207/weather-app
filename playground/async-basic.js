console.log("the first line");

setTimeout(() => {
    console.log("the middle code 1");
}, 2000);

setTimeout(() => {
    console.log("the middle code 2");
}, 0);

console.log("the second line");

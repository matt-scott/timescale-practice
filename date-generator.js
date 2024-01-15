const date1 = new Date('Mon Jan 15 2024 1:13:45 GMT-0600');

let timeArr = [];
for (let i = 0; i < 10; i++) {
    timeArr[i] = (`Mon Jan 15 2024 ${i}:13:45 GMT-0600`);
}

for (let i = 0; i < timeArr.length; i++) {
    let x = new Date(timeArr[i]);
    console.log(`time: ${x.getTime()}`);
}

// Milliseconds since Jan 1, 1970, 00:00:00.000 GMT
// console.log(date1.getTime());
// // Expected output: -14182940000

// const time = new Date().getTime();
// const date = new Date(time);
// const local = date.toString();
// console.log(local);
// let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());

// console.log(typeof myDate);

let myCreatedDate = new Date("01-14-2023")


let myTimeStamp = Date.now()

console.log(myTimeStamp);

console.log((myCreatedDate.getTime()));


let myDate = new Date() 
console.log(myDate); // 2024-01-04T07:35:09.154Z
console.log(myDate.toString()); // Thu Jan 04 2024 07:35:09 GMT+0000 (Coordinated Universal Time)
console.log('dateString '+ myDate.toDateString()); // dateString Thu Jan 04 2024
console.log('isoString '+ myDate.toISOString()); // isoString 2024-01-04T07:35:09.154Z
console.log('JSON '+ myDate.toJSON()); // JSON 2024-01-04T07:35:09.154Z
console.log('LocaleDateString '+ myDate.toLocaleDateString()); // LocaleDateString 1/4/2024
console.log('LocaleString '+ myDate.toLocaleString()); // LocaleString 1/4/2024, 7:35:09 AM
console.log('LocaleTimeString '+ myDate.toLocaleTimeString()); // LocaleTimeString 7:35:09 AM

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log('dateString '+ myDate.toDateString());
// console.log('isoString '+ myDate.toISOString());
// console.log('JSON '+ myDate.toJSON());
// console.log('LocaleDateString '+ myDate.toLocaleDateString());
// console.log('LocaleString '+ myDate.toLocaleString());
// console.log('LocaleTimeString '+ myDate.toLocaleTimeString());
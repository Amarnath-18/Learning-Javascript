const arr = [0,1,2,3,4,5]
arr[3]=6 
// console.log(arr);
const myArry = new Array(1 , 2, 3, 4);
// console.log(myArry);
// myArry.push(9)
// myArry.pop();
// myArry.unshift(2);
// myArry.shift()

// console.log(myArry.includes(3));
// console.log(myArry.indexOf(3));

const newarr = myArry.join();
console.log( typeof newarr);

// Slice , splice

console.log(" A " , myArry);

const myn1 = myArry.slice(1,3)

console.log(myn1);

console.log(" B ", myArry);

const myn2 = myArry.splice(1,3)
console.log(" C",myArry)

console.log(myn2);
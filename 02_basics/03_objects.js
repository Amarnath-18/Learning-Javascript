
const jsUser = {
    name : "Amarnath" ,
    Roll_No : 42 ,
    Subject : "Javascript" ,
    isPresent : true ,
}
// console.log(jsUser["Roll_No"]);
console.log(jsUser.Roll_No);
Object.freeze(jsUser)
jsUser.Roll_No=344
console.log(jsUser.Roll_No);

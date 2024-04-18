function myName(){
    console.log("Amarnath");
    console.log("Garai");
}

// myName()

// function addTwoNum(number1 , number2){
//     console.log(number1+number2);
// }

// 

function addTwoNum(number1 , number2){
   let result = number1+number2
   return result
}
const result = addTwoNum(2,5)
// console.log(result); 

function loginUserMassage(username = "random"){
    // if(username === undefined){
    //     console.log("please enter the username")
    //     return ;
    // }
    
    return `${username} just logged in`
}
    

// console.log(loginUserMassage("Amarnath"));

// console.log(loginUserMassage());


function calculatecartPrice(...num1){
    return num1;
}

console.log(calculatecartPrice(200,400,500,433));

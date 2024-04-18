const user = {
    username : "Amarnath",
    price : 999 ,

    welcomeMassage : function(){
        console.log(`${this.username} Welcome to website`);
        console.log(this);
    }

}


// user.welcomeMassage()
// user.username = "ram"
// user.welcomeMassage()
// console.log(this);

// function chai(){
//     let username = "hh"
//     console.log(this.uername);
// }
// chai()

// const chai = () =>{
//     let username = "amarnath"
//     console.log(this);
// }

// chai();

// const addtwo = (num1 , num2) =>{
//     return num1+num2;
// } 

const addtwo= (num1,num2) => (num1+num2)
console.log(addtwo(4,6))


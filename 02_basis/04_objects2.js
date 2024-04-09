// const tinderUser = new Object() // single ton objects

//nonsingleton objects
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularname = {
    email : "abcd12@gmail.com" ,
    fulllname : {
        userfullname : {
            firstname : "Amarnath" ,
            lastname : "Garai"
        }
    }
}

// console.log(regularname.fulllname.userfullname.firstname);

const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "c" , 4 : "d"}
const obj3 = {4 : "e" , 5 : "f"}

// const obj4 = Object.assign({}, obj1 , obj2 ,obj3)
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);
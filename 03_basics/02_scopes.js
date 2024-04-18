let a = 1
const b = 49
var c = 33

{
    let f = 99
    // console.log(f);
    var c = 99
    let a =44
    // console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(f);

function one(){
    const username = "Amarnath";

    function two(){
        const wesite = "youtube";
        console.log(username);
    }
    // console.log(wesite);

    two();
}

// one();

// +++++++++++Interesting++++++++++

function addone(num){
    return num++
}

addone(4)

const addTwo = function(num){
    return num+2
}

console.log(addTwo(4))
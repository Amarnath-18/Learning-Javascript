const abc = null

// if(abc==null) console.log(true);

const month = "jan"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "fab":
        console.log("fab");
        break;
    case "merh":
        console.log("merch");
        break;
    case "april ":
        console.log("april");
        break;

    default:
        console.log("kuch bhi");
        break;
}

let val1 
val1 = 5 ?? 10

console.log(val1)

// Terniray Operator

// condition ? true : false

const price = 100

price <= 50 ? console.log("less then 50") : console.log("Greater then 50"); 
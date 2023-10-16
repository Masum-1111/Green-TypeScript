// --------------------------------  ANY ---------------------------



// let mynumber = 111

// mynumber = "masum"

// it is give error 

// but use by ANY

let mynumber:any = 111

mynumber = "masum"
console.log(mynumber)


// --------------------------------------- unknow ------------------

let num1:unknown
num1 = 5;
num1 = "masum"
num1 = true;

if(typeof num1 == "number"){

    console.log(num1 + 10)
}
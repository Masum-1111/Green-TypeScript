// --------------------------------  ANY ---------------------------
// let mynumber = 111
// mynumber = "masum"
// it is give error 
// but use by ANY
var mynumber = 111;
mynumber = "masum";
console.log(mynumber);
// --------------------------------------- unknow ------------------
var num1;
num1 = 5;
num1 = "masum";
num1 = true;
if (typeof num1 == "number") {
    console.log(num1 + 10);
}

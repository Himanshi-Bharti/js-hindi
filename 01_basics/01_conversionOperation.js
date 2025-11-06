// *****************************************************conversion**************************************************************


let score = 33                            // datatype is number

let score1 = "33"                         // datatype is string coz in ""

let score2 = "33abc"

console.log(typeof score);                // two types of to know the datatype
console.log(typeof (score1));
console.log(typeof (score2));

let valueInNumber = Number(score1)       // converting the score1 datatype to number 
let valueInNumber1 = String(score)       // converting to string
let valueInNumber2 = Number(score2)      // converting string to number and the valueInNumber2 becomes NAN as the value has 33abc

console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(typeof valueInNumber2);      // conversion will happen and the data type will become number but the value of valueInNumber2 will become NAN

console.log(valueInNumber2);               // NAN means not a number as it has 33abc in it and it is not number


// "33" => 33
// "33abc" => NAN
// true => 1 ; false => 0
// we can convert any type to other type like Number, String, Boolean

let isNum = 1

let booleanisNum = Boolean(isNum)
console.log(booleanisNum);

// so if the isNum has a value in it either 1 or 0 or "himanshi" then the output will be true and if its empty like "", null, undefined then the value will be false






// *****************************************************operation**************************************************************


let num = 3
let negNum = -num                      // assigning negative number to negNum just use - infront of the variable 
console.log(negNum);                   // output -3


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);                     // 2 raise tot he power 3
// console.log(2/3);
// console.log(2%3);                      // remainder 2/3


let str1 = "Hello beautiful"
let str2 = " Himanshi baby.."
let str3 = console.log(str1+str2);        // concatination

console.log("1" + 2);                     // 12
console.log(1 + "2");                     // 12
console.log("1" + "2");                   // 12

console.log("1" + 2 + 2);                 // 122
console.log(1 + 2 + "2");                 // 32 
console.log(1 + "2" + 2);                 // 122

console.log(+true);                       // 1
// console.log(true+);                       // error
console.log(+"");                         // 0

let num1, num2, num3

num1 = num2 = num3 = 2+3

let gameCounter = 1
let gameCounter1 = 1
// ++gameCounter;
// gameCounter1++

// console.log(gameCounter);
console.log((gameCounter++) + (++gameCounter1));
console.log(gameCounter);

console.log(++gameCounter1);


// link to study tc39.es/ecma262 sec-type-conversion







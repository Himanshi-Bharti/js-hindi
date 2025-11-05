const account_ID= 14455  //constant
let accountEmail= "Himanshi"        // eliminate the scope problem, type of declaring var
var accountPassword= "12345"        
accountCity = "Ghaziabad"        //   not a good practise but we can declare the var like this too
console.log(account_ID);
let accountState;


/*

never use var as it is not good practise, it goes out of  functional scope  so use let

*/


// account_id=2 not allowed//

//**************to print in tabular form**************** */

accountEmail= "hc@hc.com"
accountPassword= "202020"
accountCity="delhi"
console.table([account_ID, accountEmail, accountPassword, accountCity, accountState]);


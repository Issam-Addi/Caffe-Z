// let Name = prompt("What is your name ?");
// let Gender = prompt("Plz, enter your gender (male or female)");

// if ( Gender == "male") {
// alert ("Welcome Mr, " +Name +"!");
// } 
// else if ( Gender == "female") {
//     alert ("Welcome Ms, " +Name +"!");
// }
// else alert ("Welcome !");

// let Drink = prompt("Do you want to drink (hot or cold) ?");
// let DrinkName = prompt("what kind of drink would you like ?");

// alert ("your drink is getting prepared !");
// console.log( "Name: "+ Name +'\n'+ "DrinkName: " + DrinkName);

let answers = [];

let name = prompt("What is your name ?");

let gender = '';
while(gender != "male" && gender != "female") {
    gender = prompt("Plz', enter your gender (male/female)");
}
let drink = prompt("Do you want to drink (hot or cold) ?");
let drinkName = prompt("what kind of drink would you like ?");

answers.push(name, gender, drink, drinkName);

for(let i = 0; i < answers.length ; i++) {
    console.log(answers[i]);
}
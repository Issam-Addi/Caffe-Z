function userGender(){
    let gender = prompt("Plz', enter your gender (male/female)");
    while(gender != "male" && gender != "female") {
        gender = prompt("Plz', enter your gender (male/female) again");
        if (gender == "male")
        return "male";
        else
        return "female";
    }
}

let answers = [];
let nameuser = prompt("What is your name ?");
let gender = userGender();let drink = prompt("Do you want to drink (hot or cold) ?");
let drinkName = prompt("what kind of drink would you like ?");
answers.push(nameuser, gender, drink, drinkName);
for(let i = 0; i < answers.length ; i++) {
    console.log(answers[i]);
}
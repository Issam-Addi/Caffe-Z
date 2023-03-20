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
let gender = userGender();
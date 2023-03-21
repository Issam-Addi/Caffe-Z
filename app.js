let userName = prompt("Esnter your name ?!");
let userGender = prompt("Esnter your gender ?!");
let userAge = prompt("Esnter your age ?!");
let drinkType = prompt("Esnter your drinktype(hot/cold) ?!");
let userDrink = prompt("Esnter your drink ?!");
let mainCont = document.getElementById("mainBody")
let maindiv = document.createElement("div");
let parg = document.createElement("p");
parg.textContent = userName;
maindiv.appendChild(parg);
let unorderList = document.createElement("ul");
let listItem1 = document.createElement("li");
listItem1.textContent = `Gender: ${userGender}`;
let listItem2 = document.createElement("li");
listItem2.textContent = `Age: ${userAge}`;
let listItem3 = document.createElement("li");
listItem3.textContent = `Drink: ${drinkType} ${userDrink}`;
unorderList.appendChild(listItem1);
unorderList.appendChild(listItem2);
unorderList.appendChild(listItem3);
maindiv.appendChild(unorderList);
mainCont.appendChild(maindiv);


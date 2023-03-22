const mainForm = document.getElementById("mainBody");
mainForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = event.target.fname.value;
    const userAge = event.target.age.value;
    const drinkType = event.target.type.checked ? event.target.type.value : "";
    const drinkType1 = event.target.type1.checked ? event.target.type1.value : "";
    const drinName = event.target.dname.value;
    let mainCont = document.getElementById("info")
    let maindiv = document.createElement("div");
    let parg = document.createElement("p");
    parg.textContent = `Your name is: ${userName}`;
    maindiv.appendChild(parg);
    let unorderList = document.createElement("ul");
    let listItem1 = document.createElement("li");
    listItem1.textContent = `Age: ${userAge}`;
    let listItem2 = document.createElement("li");
    listItem2.textContent = `Type: ${drinkType}  ${drinkType1}`;
    let listItem3 = document.createElement("li");
    listItem3.textContent = `Drink: ${drinName}`;
    unorderList.appendChild(listItem1);
    unorderList.appendChild(listItem2);
    unorderList.appendChild(listItem3);
    maindiv.appendChild(unorderList);
    mainCont.appendChild(maindiv);
    mainForm.reset();
});
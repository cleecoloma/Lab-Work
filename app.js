let visitorsName = "";
let confirmName = "";
let rate1 = null;
let rate2 = null;
let rate3 = null;

function visitor() {
  visitorsName = prompt("What is your name?");
}

function confirmVisitor() {
  confirmName = prompt("Type ONE to make sure you're not a robot!");
  while (confirmName !== "ONE") {
    confirmName = prompt("Type ONE to make sure you're not a robot!");
  }
}

function updateHeaderTextColor() {
  document.getElementById("topHeaderName").style.color = "white";
  document.getElementById("midHeaderName").style.color = "white";
  document.getElementById("bestfriend").style.color = "white";
}

function updateHeaderText() {
  if (confirmName) {
    let headerColor = prompt(
      "Change header color by inputting the corresponding number. \n 1 - light blue, 2 - light gray, 3 - light pink"
    );
    document.getElementById("bestfriend").innerHTML = visitorsName;
    let element = document.getElementById("header");
    if (headerColor === "1") {
      element.style.backgroundColor = "lightblue";
      updateHeaderTextColor();
    } else if (headerColor === "2") {
      element.style.backgroundColor = "lightgray";
      updateHeaderTextColor();
    } else if (headerColor === "3") {
      element.style.backgroundColor = "lightpink";
      updateHeaderTextColor();
    } else {
      alert(
        "Error - Input was not recognized! \nRefresh the web page to continue"
      );
    }
  } else {
    alert("Please refresh the web page");
  }
}

function rateDog1() {
  rate1 = prompt("Rate Golden Retriever Breed.\nType 1 through 5");
  return rate1;
}

function rateDog2() {
  rate2 = prompt("Rate English Bulldog Breed.\nType 1 through 5");
  return rate2;
}

function rateDog3() {
  rate3 = prompt("Rate Husky Breed.\nType 1 through 5");
  return rate3;
}

function rate(number) {
  for (i = number; i > 0; i--) {
    document.write("🐶");
  }
}

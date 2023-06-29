let visitorsName = "";
let confirmName = "";

function visitor() {
  visitorsName = prompt("What is your name?");
}

function confirmVisitor() {
  confirmName = confirm(
    "Is " + visitorsName + " your name? \nPress OK for yes and Cancel for no."
  );
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

let divCounter = 0;

function createDiv() {
  divCounter++;
  const newDiv = document.createElement("div");
  const uniqueId = `myCreatedDiv${divCounter}`;

  newDiv.classList.add("created-div");
  newDiv.id = uniqueId;

  document.body.appendChild(newDiv);
}

function changeColor() {
  var createdDiv = document.querySelector(".created-div:last-child");
  if (createdDiv) {
    createdDiv.style.backgroundColor = "red";
  } else {
    alert("No div to change color!");
  }
}

function removeDiv() {
  var createdDiv = document.querySelector(".created-div:last-child");
  if (createdDiv) {
    document.body.removeChild(createdDiv);
  } else {
    alert("No div to remove!");
  }
}

var createDivButton = document.getElementById("createDivButton");
var removeDivButton = document.getElementById("removeDivButton");
var colorChangeButton = document.getElementById("colorChangeButton");

createDivButton.addEventListener("click", createDiv);
removeDivButton.addEventListener("click", removeDiv);
colorChangeButton.addEventListener("click", changeColor);

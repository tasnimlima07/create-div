let divCounter = 0;
let containerDiv = document.createElement("div");
containerDiv.classList.add("container-div");

const createDiv = () => {
  divCounter++;
  const newDiv = document.createElement("div");
  const uniqueId = `myCreatedDiv${divCounter}`;

  newDiv.classList.add("created-div");
  newDiv.id = uniqueId;

  containerDiv.appendChild(newDiv);
};

const changeColor = () => {
  const createdDiv = document.querySelector(".created-div:last-child");
  if (createdDiv) {
    createdDiv.style.backgroundColor = "red";
  } else {
    alert("No div to change color!");
  }
};

const removeDiv = () => {
  const createdDiv = document.querySelector(".created-div:last-child");
  if (createdDiv) {
    containerDiv.removeChild(createdDiv);
  } else {
    alert("No div to remove!");
  }
};

const createDivButton = document.getElementById("createDivButton");
const removeDivButton = document.getElementById("removeDivButton");
const colorChangeButton = document.getElementById("colorChangeButton");

document.body.appendChild(containerDiv);

createDivButton.onclick = createDiv;
removeDivButton.onclick = removeDiv;
colorChangeButton.onclick = changeColor;

const container = document.querySelector('.container');

const createDiv = () => {
  const newDiv = document.createElement("div");
  newDiv.classList.add("created-div");
  container.appendChild(newDiv);
};

const changeColor = () => {
  const divs = document.querySelectorAll(".created-div");
  const lastDiv = divs[divs.length - 1];
  if (lastDiv) {
      lastDiv.style.backgroundColor = "red";
  }
};

const removeDiv = () => {
  const divs = document.querySelectorAll(".created-div");
  const lastDiv = divs[divs.length - 1];
  if (lastDiv) {
      lastDiv.remove();
  }
};
        
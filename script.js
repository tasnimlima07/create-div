
 // Function to add div

function createDiv() {
    var newDiv = document.createElement("div");
    
    newDiv.classList.add("created-div");
    newDiv.id = "myCreatedDiv";

    document.body.appendChild(newDiv);
  }

  
  // Function to change color

  function changeColor() {
    var createdDiv = document.getElementById("myCreatedDiv");
    if (createdDiv) {
      createdDiv.style.backgroundColor = "red";
    } else {
      alert("No div to change color!");
    }
  }



  // Function to remove the previously created div
  function removeDiv() {
    var createdDiv = document.getElementById("myCreatedDiv");
    if (createdDiv) {
        document.body.removeChild(createdDiv)
      } else {
        alert("No div to remove!");
      }
    	
  }


  function changeColor() {
    var createdDiv = document.getElementById("myCreatedDiv");
    if (createdDiv) {
      createdDiv.style.backgroundColor = "red";
    } else {
      alert("No div to change color!");
    }
  }
  

 
  var createDivButton = document.getElementById("createDivButton");
  var removeDivButton = document.getElementById("removeDivButton");
  var colorChangeButton = document.getElementById("colorChangeButton");


  createDivButton.addEventListener("click", createDiv);
  removeDivButton.addEventListener("click", removeDiv);
  colorChangeButton.addEventListener("click", changeColor);
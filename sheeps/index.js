let count = 0;
let content = document.getElementById("content");
let sheepsContainer = document.getElementById("sheepsContainer");

let counterText = document.createElement("p");
counterText.textContent = count;
content.appendChild(counterText);

let button = document.createElement("button");
button.classList.add("btn", "btn-primary");
button.textContent = "Incrementar";
content.appendChild(button);

button.addEventListener("click", function () {
  count = count + 1;
  content.innerHTML = "";
  sheepsContainer.innerHTML = "";

  counterText.textContent = count;
  content.appendChild(counterText);
  content.appendChild(button);

  for (let i = 1; i <= count; i++) {
    let sheepImg = document.createElement("img");
    sheepImg.src = "sheep.svg";
    sheepImg.width = "32";
    sheepImg.height = "32";
    sheepsContainer.appendChild(sheepImg);
  }
});

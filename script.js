const container = document.querySelector(".container");

function changeColor(event) {
    event.target.style.backgroundColor = "#c56565";
}

// Creating 256 grid squares which equals 16x16
for (let i = 0; i < 256; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-square");
    // adds an eventlistener to each square
    newDiv.addEventListener("mouseover", changeColor);
    container.appendChild(newDiv);
}


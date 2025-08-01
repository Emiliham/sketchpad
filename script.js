const container = document.querySelector(".container");

function createGrid(squarePrSide) {
    // Clearing everything in container
    container.innerHTML = '';

    // caluclating how big each square should be when the container is 480
    const squareSize = 480 / squarePrSide;

    // Create new squares
    for (let i = 0; i < squarePrSide * squarePrSide; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;
        newDiv.addEventListener("mouseover", () => {
            newDiv.classList.add("hovered");
        });
        container.appendChild(newDiv);
    }
}

function createNewGrid() {
    // Show this popup so that the user can enter number of squares
    const input = prompt("Pls enter the number of squares per side (max 100):");
    // convert the string to an int
    let squaresPerSide = parseInt(input);

    // Validate that the input is correct
    if (!Number.isInteger(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
        alert("Please enter a whole number between 1 and 100.");
        return;
    }

    // Create the new grid
    createGrid(squaresPerSide);
}

// Create the initial 16x16 grid
createGrid(16);

const container = document.querySelector(".container");

/**
 * This function creates the grid and the total cells will be
 * the number of squares per side squared
 * @param squarePrSide is the number of squares per side of the grid
 */
function createGrid(squarePrSide) {
    // Clearing everything in container
    // innerHTML is all the code inside the container element
    container.innerHTML = '';


    // caluclating how big each square should be when the container is 480
    const squareSize = 480 / squarePrSide;

    let mousePressed = false; // in the beginning the mousepressed is false

    // if the mouse is pressed down inside the container, then mousepressed is true
    container.addEventListener("mousedown", () => mousePressed = true);
    // if the mouse is not clocket then mousePressed is false
    container.addEventListener("mouseup", () => mousePressed = false);

    // Create new squares and loops squares per side^2
    for (let i = 0; i < squarePrSide * squarePrSide; i++) {
        // creating a div that is one square
        const newDiv = document.createElement("div");
        // giving the element a class
        newDiv.classList.add("square");
        // the square size in pixels
        newDiv.style.width = `${squareSize}px`;
        newDiv.style.height = `${squareSize}px`;

         // paint when the mouse is down on the square
        newDiv.addEventListener("mousedown", () => {
            newDiv.classList.add("pressed");
        });

        // Paint on the square if mouse is still pressed
        newDiv.addEventListener("mouseover", () => {
            if (mousePressed) {
                newDiv.classList.add("pressed");
            }
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

    // creating the new grid
    createGrid(squaresPerSide);s
}

// Create the initial 16x16 grid
createGrid(50);

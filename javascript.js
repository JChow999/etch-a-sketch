const DEFAULT_SIZE = 16;

const body = document.querySelector('body')
const sketchGrid = document.querySelector('#sketchGrid')
const gridChange = document.querySelector('#gridChangeBtn')

var mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function blackColor() {
    return (0,0,0);
}

function rainbowColor() {
    return
}

function deleteGrid() {
    sketchGrid.innerHTML = ""
}

function createGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'gridColumn');

        for (let column = 0; column < gridSize; column++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('squareCont');

            // Detect for mouse hover and mouse down to change colour
            newDiv.addEventListener('mouseover', changeColour);
            newDiv.addEventListener('mousedown', changeColour);
            row.appendChild(newDiv);
        }    
        sketchGrid.appendChild(row);
    }
}

function changeColour(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = 'black';
}


gridChange.addEventListener('click', () => {
    let userInput = prompt("Please enter an integer of 1-100 to generate your grid.", "16");
    if (userInput == null) {
        return
    } else if (1 <= userInput && userInput <= 100) {
        deleteGrid();
        createGrid(userInput);
    } else {
        alert("Error: Please enter an integer within 1-100")
    }
});

createGrid(DEFAULT_SIZE);

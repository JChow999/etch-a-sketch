const body = document.querySelector('body');
const sketchGrid = document.querySelector('#sketchGrid');
const gridChange = document.querySelector('#gridChangeBtn');
const resetBtn = document.querySelector('#resetBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');

let currentSize = 16

let colourMode = 'black';
let currentColour = 'black';

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


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

function randomCode() {
    num = Math.floor(Math.random() * 255)
    return num
}

// Function causes div/square to change colour of the div based on the selected colour mode 
function changeColour(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    } else if (colourMode == 'black') {
        e.target.style.backgroundColor = 'rgb(0, 0, 0)';
    } else if (colourMode == 'random') {
        e.target.style.backgroundColor = `rgb(${randomCode()}, ${randomCode()}, ${randomCode()})`;
    } else if (colourMode == 'eraser') {
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}

// User can enter an integer to create a new grid with width and height based on input
gridChange.addEventListener('click', () => {
    let userInput = prompt("Please enter an integer of 1-100 to generate your grid.", "16");
    if (userInput == null) {
        return
    } else if (1 <= userInput && userInput <= 100) {
        currentSize = userInput;
        deleteGrid();
        createGrid(currentSize);
    } else {
        alert("Error: Please enter an integer within 1-100")
    }
});

// User can press reset button to change all the divs to have the colour white
resetBtn.addEventListener('click', () => {
    let allDivs = document.getElementsByClassName('squareCont');
    for (div in allDivs) {
        console.log(allDivs[div]);
        allDivs[div].style.backgroundColor = 'white';
    }
});

eraseBtn.addEventListener('click', () => {
    if (colourMode == 'black') {
        colourMode = 'eraser'
    } else {
        colourMode = 'black'
    }    
});

rainbowBtn.addEventListener('click', () => {
    colourMode = 'random';
})

createGrid(currentSize);

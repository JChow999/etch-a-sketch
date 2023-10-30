const body = document.querySelector('body');
const sketchGrid = document.querySelector('#sketchGrid');
const gridChange = document.querySelector('#gridChangeBtn');
const resetBtn = document.querySelector('#resetBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const rainbowBtn = document.querySelector('#rainbowBtn');

let currentSize = 16

let colourMode = 'black';
let currentColour = 'black';
let colourList = {
    black: 'rgb(0 ,0 ,0)',
    white: 'rgb(255, 255, 255)',
    red: 'rgb(255, 0, 0)',
    orange: 'rgb(255, 128, 0)',
    yellow: 'rgb(255, 255, 0)',
    green: 'rgb(0, 255, 0)',
    blue: 'rgb(0, 0, 255)',
    indigo: 'rgb(0, 255, 255)',
    violet: 'rgb(127, 0, 255)',
}

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

function changeColour(e) {
    if (e.type === 'mouseover' && !mouseDown) {
        return
    } else if (colourMode == 'black') {
        e.target.style.backgroundColor = colourList.black;
    } else if (colourMode == 'rainbow') {

        return
    } else if (colourMode == 'eraser') {
        e.target.style.backgroundColor = 'rgb(255, 255, 255)';
    }
}


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
    colourMode = 'rainbow';
})

createGrid(currentSize);

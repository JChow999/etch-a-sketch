const DEFAULT_SIZE = 16;

const body = document.querySelector('body')
const sketchGrid = document.querySelector('#sketchGrid')
const gridChange = document.querySelector('#gridChangeBtn')

let mouseDown = false
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
            newDiv.setAttribute('class', 'squareCont');
            changeColour(newDiv)
            row.appendChild(newDiv);
        }    
        sketchGrid.appendChild(row);
    }
}

function changeColour(div) {
    div.addEventListener('mousedown', () => {
        div.style.backgroundColor = 'black';
    });
}


createGrid(DEFAULT_SIZE);

gridChange.addEventListener('click', () => {
    let userInput = prompt("Please enter an integer of 2-100 to generate your grid.", "16");
    deleteGrid()
    createGrid(userInput)
});

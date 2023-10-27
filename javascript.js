body = document.querySelector('body')
sketchGrid = document.querySelector('#sketchGrid')


let gridSize = 16

for (let row = 0; row < gridSize; row++) {
    const row = document.createElement('div');
    row.setAttribute('class', 'gridColumn');
    for (let column = 0; column < gridSize; column++) {
        const newDiv = document.createElement('div');
        newDiv.setAttribute('class', 'squareCont');
        row.appendChild(newDiv);
    }    
    sketchGrid.appendChild(row)
}


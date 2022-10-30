const container = document.querySelector('.grid-container');
const gridElements = document.getElementsByClassName('.gridElement');
let resetButton = document.querySelector('.reset');
let gridSizeButton = document.querySelector('.gridSize-Button');

function createGrid(value) {

container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
container.style.gridTemplateRows = `repeat(${value}, 1fr)`


//gridSizeButton.addEventListener('click', gridSize());

        for (let i=0;i<(value**2);i++) {
                let row = document.createElement('div');
                row.classList.add('gridElement');
                container.appendChild(row);

                //Event Listener for coloring grid
                row.addEventListener('mouseover', () => {
                        row.style.backgroundColor = 'blue';
                

                //Event Listener for resetting the grid back to no color
                resetButton.addEventListener('click', event => {
                        row.style.backgroundColor = '';
 

                });
                        
                });
                };

}

function gridSize() {
        
        let gridSizePrompt = prompt("Please enter a grid size!");
        if (gridSizePrompt > 100 || gridSizePrompt < 0) {
                alert("The value you entered is outside of the range (1-100). Please enter another value.");
                gridSize();
        }

        else {
                container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
                container.style.gridTemplateRows = `repeat(${value}, 1fr)`;
        }
        
}

/*
gridElements.forEach(gridElement => {
        gridElement.addEventListener('click', event => {
                console.log('box clicked', event);
        })
})
*/

createGrid(16);

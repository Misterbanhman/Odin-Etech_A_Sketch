const container = document.querySelector('.grid-container');
const gridElements = document.getElementsByClassName('.gridElement');
const resetButton = document.querySelector('.reset');
const gridSizeButton = document.querySelector('.gridSize-Button');
const rainbowButton = document.querySelector('.rainbowButton');
let blackButton = 1;

//Function used to create the etch a sketch grid
function createGrid(value) {

container.style.gridTemplateColumns = `repeat(${value}, 1fr)`
container.style.gridTemplateRows = `repeat(${value}, 1fr)`


        for (let i=0;i<(value**2);i++) {
                let row = document.createElement('div');
                row.classList.add('gridElement');
                container.appendChild(row);

                rainbowButton.addEventListener('click', () => {
                        if (blackButton === 1) {
                                blackButton = 0;
                        }
                        else {
                                blackButton = 1;
                        }
                });

                //Event Listener for coloring grid
                row.addEventListener('mouseover', () => {
                        if (blackButton === 1) {
                                row.style.backgroundColor = 'black';
                        }
                        else {
                                row.style.backgroundColor = getRandomColor();
                        }
                

                //Event Listener for resetting the grid back to no color
                resetButton.addEventListener('click', event => {
                        row.style.backgroundColor = '';
 

                });
                        
                });
                };

}

//Used for modification of the grid size
function gridSize() {
        let gridSizePrompt = prompt("Please enter a grid size!");
        if (gridSizePrompt > 100 || gridSizePrompt < 0) {
                alert("The value you entered is outside of the range (1-100). Please enter another value.");
                gridSize();
        }

        else {
                removeGrid();
                gridSizePrompt = gridSizePrompt + ""
                createGrid(gridSizePrompt);
        }
        
}

//Deletes existing grid
function removeGrid() {
        removeElement = container.querySelectorAll('div');
        removeElement.forEach(removeElements => removeElements.remove())
}

function getRandomColor() {
        let randomNumbers = '1234567890ABCDEF';
        randomNumbers = randomNumbers.split('')
        let color = '';
        for (let i=0; i<6; i++) {
                color += (Math.floor(Math.random()*(randomNumbers.length)));
        }
        color = '#'+color;
        return color;
}

//Creates initial 16x16 grid
createGrid(16);

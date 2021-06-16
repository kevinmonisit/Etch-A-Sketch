/* eslint-disable valid-jsdoc */
/* eslint-disable indent */


// ====================== Button Logic =========================

// Color Toggles
const colorButtons = document.querySelectorAll('.button-color');

let currentlyActiveButton = colorButtons[0];

/** Toggles two buttons
 * @param {node} button
 */
function toggleButton(button) {
    if (button != currentlyActiveButton) {
        if (button != colorButtons[0]) {
            currentlyActiveButton = colorButtons[1];
        } else {
            currentlyActiveButton = colorButtons[0];
        }

        colorButtons[0].classList.toggle('active');
        colorButtons[1].classList.toggle('active');
    }
}

colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        toggleButton(button);
        e.stopPropagation();
    });
});

// ====================== Drawing Grid Area =========================

const length = 500; // in pixels

let numberOfSquares = 9;

const gridContainer = document.querySelector('#grid-container');

gridContainer.style['width'] = `${length}px`;
gridContainer.style['height'] = `${length}px`;

/**
 * Creates the tiles/squares for the drawing grid
 * according to the the number of squares specified.
 */
function createGridSquares() {
    gridContainer.style['grid-template-columns'] =
                        `repeat(${numberOfSquares}, 1fr)`;
    gridContainer.style['grid-template-columns'] =
                        `repeat(${numberOfSquares}, 1fr)`;

    for (let i = 1; i <= numberOfSquares**2; i++) {
        const element = document.createElement('div');
        element.style['border'] = '1px solid grey';
        element.classList.add('item');
        gridContainer.appendChild(element);
    }
}

createGridSquares();

const tiles = document.querySelectorAll('.item');

/**
 * Gives a tile a background color
 */
function getColor() {
    if (currentlyActiveButton.getAttribute('id') == 'black-button') {
        return 'black';
    } else {
        const r = getRandomColorIntensity();
        const g = getRandomColorIntensity();
        const b = getRandomColorIntensity();
        return `rgb(${r},${g},${b}`;
    }
}
/**
 * Returns color intensity from 0 to 255
 * @returns {Number} color intensity
 */
function getRandomColorIntensity() {
    return Math.floor(Math.random() * (255));
}

// drawing
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style['background-color'] = getColor();
    });
});

// ====================== Clear Button =========================

const clearButton = document.querySelector('#clear-button');

/**
 * Resets the drawing grid
 */
function clearAllTiles() {
    const tiles = document.querySelectorAll('.item');
    tiles.forEach((tile) => {
        tile.style['background-color'] = 'white';
    });
}

clearButton.addEventListener('click', clearAllTiles);

// ====================== Number of Grids Change =========================

const gridSizeInput = document.getElementById('grid-size-input');
const warningText = document.getElementById('grid-size-warning');

/**
 * Adds warning if grid input is invalid.
 */
function modifyWarning(value) {
    const num = Number(value);
    if (num === NaN) {
        warningText.innerText = 'Input must be a number!';
    } else if (num > 100) {
        warningText.innerText = 'Cannot be > 100!';
    } else {
        warningText.innerText = 'Invalid input';
    }
}

gridSizeInput.addEventListener('change', () => {
    const inputValue = gridSizeInput.value;
    if (Number(inputValue) !== NaN && inputValue < 100) {
        numberOfSquares = inputValue;
        warningText.innerText = '';
    } else {
    //    debugger;
        modifyWarning(inputValue);
    }
});

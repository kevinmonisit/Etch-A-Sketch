/* eslint-disable valid-jsdoc */
/* eslint-disable indent */

const length = 500; // in pixels

const numberOfSquares = 9;
const color = 'rgb(0,0,0)';



const gridContainer = document.querySelector('#grid-container');

gridContainer.style['width'] = `${length}px`;
gridContainer.style['height'] = `${length}px`;

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

const tiles = document.querySelectorAll('.item');

// drawing
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style['background-color'] = 'black';
    });
});

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

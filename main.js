
const length = 500; //in pixels

let numberOfSquares = 9;

let gridContainer = document.querySelector("#grid-container")

gridContainer.style['width'] = `${length}px`;
gridContainer.style['height'] = `${length}px`;
gridContainer.style["grid-template-columns"] = `repeat(${numberOfSquares}, 1fr)`;
gridContainer.style["grid-template-columns"] = `repeat(${numberOfSquares}, 1fr)`;

for(let i = 1; i <= numberOfSquares**2; i++) {
    let element = document.createElement("div");
    element.style['border'] = '1px solid grey';
    element.classList.add("item");
    gridContainer.appendChild(element);
}

let tiles = document.querySelectorAll('.item');

//drawing
tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style['background-color'] = 'black';
    });
});

//Color Toggles
let colorButtons = document.querySelectorAll('.button-color');

let currentlyActiveButton = colorButtons[0];
function toggleButton(button) {
    console.log("1 ====");
    console.log(button);
    console.log(currentlyActiveButton);
    console.log(button == currentlyActiveButton);

    if(button == currentlyActiveButton) {
        if(button == colorButtons[0]) {
            currentlyActiveButton = colorButtons[1];
        } else {
            currentlyActiveButton = colorButtons[0];
        }


        colorButtons[0].classList.toggle("active");
        colorButtons[1].classList.toggle("active");
    }
}

colorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        toggleButton(button);
        e.stopPropagation();
    });
});
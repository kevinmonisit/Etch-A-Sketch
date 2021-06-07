
const length = 500; //in pixels

let numberOfSquares = 16;

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

tiles.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.style['background-color'] = 'black';
    });
});
// the grid
const grid = document.querySelector('.grid');
console.log(grid);
const cell = document.createElement('div');
console.log(cell);
//event listener for the player to pick a positon on the grid

const column = 7;
const row = 6;
const gridCellCount = row * column;
const cells = [];
let player = 1;

function createGrid() {
  for (let i = 0; i < gridCellCount; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('data-id', i);
    cell.innerHTML = i;
    // cell.classList.add('red-counter');
    cells.push(cell);
    grid.appendChild(cell);
  }
}

createGrid();

console.log(cells);
//event listener for all slots - so that onlcick the counter's colur is used
// cells.forEach((a) => a.addEventListener('click', addCounter));

for (let i = 35; i <= 41; i++) {
  cells[i].addEventListener('click', addCounter);
}

function addCounter(event) {
  const slotId = event.target.dataset.id;
  console.log(slotId);
  if (!cells[slotId].classList.contains('occupied')) {
    if (player === 1) {
      cells[slotId].classList.add('occupied', 'red-counter');
      player = 2;
    } else if (player === 2) {
      cells[slotId].className = 'blue-counter';
      cells[slotId].classList.add('occupied', 'blue-counter');
      player = 1;
    }
  } else if (!cells[slotId].classList.contains('occupied')) {
    if (player === 1) {
      cells[slotId - 7].classList.add('red-counter');
      cells[slotId].classList.add('occupied');
      player = 2;
    } else if (player === 2) {
      cells[slotId - 7].classList.add('blue-counter');
      cells[slotId].classList.add('occupied');
      player = 1;
    }
  }
}
console.log(player);

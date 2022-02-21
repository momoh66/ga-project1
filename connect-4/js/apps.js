// the grid
const grid = document.querySelector('.grid');
console.log(grid);

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
  const highestIndex = event.target.dataset.id;

  if (!cells[highestIndex].classList.contains('occupied')) {
    console.log(highestIndex, 'not occupied');
    if (player === 1) {
      cells[highestIndex].classList.add('occupied', 'red-counter');
      player = 2;
    } else {
      cells[highestIndex].classList.add('occupied', 'blue-counter');
      player = 1;
    }
  } else {
    console.log(highestIndex, 'occupied');
    const columnArray = [];
    // turn columnArray into an array of cell numbers that make up a column
    for (let i = highestIndex; i > 0; i = i - 7) {
      if (i - 7 >= 0) {
        columnArray.push(i - 7);
      }
    }

    console.log(columnArray, highestIndex);

    // return the number of the first cell that is not occupied
    const firstAvailable = columnArray.find((number) => {
      return !cells[number].classList.contains('occupied');
    });

    if (player === 1) {
      cells[firstAvailable].classList.add('occupied', 'red-counter');
      player = 2;
    } else {
      cells[firstAvailable].classList.add('occupied', 'blue-counter');
      player = 1;
    }
  }
}

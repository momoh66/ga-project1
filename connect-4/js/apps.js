//! Variables
const grid = document.querySelector('.grid');
const result = document.querySelector('.results');
const reset = document.querySelector('button.reset');
const selectionButton = document.querySelectorAll('div .button button');
const twoPlayer = document.querySelector('.2-player');
const column = 7;
const row = 6;
const gridCellCount = row * column;
const cells = [];
let player = 1;

//! mouse in
for (let i = 0; i <= 6; i++) {
  selectionButton[i].addEventListener('mouseover', (event) =>
    selectionButtonHoverIn(event, i)
  );
}
function selectionButtonHoverIn(event, buttonId) {
  buttonId;
  // console.log(buttonId);
  if (player === 1) {
    selectionButton[buttonId].style.backgroundColor = 'red';
  } else {
    selectionButton[buttonId].style.backgroundColor = 'blue';
  }
}

//! mouse out
for (let i = 0; i <= 6; i++) {
  selectionButton[i].addEventListener('mouseout', (event) =>
    selectionButtonHoverOut(event, i)
  );
}
function selectionButtonHoverOut(event, buttonId) {
  buttonId;
  console.log(buttonId);
  if (player === 1) {
    selectionButton[buttonId].style.backgroundColor = 'transparent';
  } else {
    selectionButton[buttonId].style.backgroundColor = 'transparent';
  }
}
//! Creeate Grid
function createGrid() {
  let i = 0;
  setInterval(() => {
    if (i < gridCellCount) {
      const cell = document.createElement('div');
      grid.appendChild(cell);
      cells.push(cell);
    }
    i++;
  }, 25);
}
createGrid();

//!! Game logic for 2 player
for (let i = 0; i <= 6; i++) {
  selectionButton[i].disabled = false;
  selectionButton[i].addEventListener('click', addCounter);
  selectionButton[i].setAttribute('data-id', i + 35);
}

function addCounter(event) {
  const highestIndex = event.target.dataset.id;
  console.log(highestIndex);

  for (let i = 0; i <= 6; i++) {
    selectionButton[i].style.backgroundColor = 'transparent';
  }
  if (!cells[highestIndex].classList.contains('occupied')) {
    console.log(highestIndex, 'not occupied');
    if (player === 1) {
      selectionButton[3].style.backgroundColor = 'blue';
      cells[highestIndex].classList.add('occupied', 'red-counter');
      result.innerHTML = "Blue player's turn";
      player = 2;
    } else {
      selectionButton[3].style.backgroundColor = 'red';
      cells[highestIndex].classList.add('occupied', 'blue-counter');
      result.innerHTML = "Red player's turn";
      player = 1;
    }
  } else {
    const columnArray = [];

    for (let i = highestIndex; i > 0; i = i - 7) {
      if (i - 7 >= 0) {
        columnArray.push(i - 7);
      }
    }
    const firstAvailable = columnArray.find((number) => {
      return !cells[number].classList.contains('occupied');
    });

    if (player === 1) {
      cells[firstAvailable].classList.add('occupied', 'red-counter');
      selectionButton[3].style.backgroundColor = 'blue';
      result.innerHTML = "Blue player's turn";
      player = 2;
    } else {
      cells[firstAvailable].classList.add('occupied', 'blue-counter');
      selectionButton[3].style.backgroundColor = 'red';
      result.innerHTML = "Red player's turn";
      player = 1;
    }
  }
  //! Results

  //? Horizontal wins
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 4; j++) {
      let k = 7 * i + j;

      const winningHorizontal = [k, k + 1, k + 2, k + 3];
      if (
        cells[winningHorizontal[0]].classList.contains('red-counter') &&
        cells[winningHorizontal[1]].classList.contains('red-counter') &&
        cells[winningHorizontal[2]].classList.contains('red-counter') &&
        cells[winningHorizontal[3]].classList.contains('red-counter')
      ) {
        result.innerHTML = 'Red Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      } else if (
        cells[winningHorizontal[0]].classList.contains('blue-counter') &&
        cells[winningHorizontal[1]].classList.contains('blue-counter') &&
        cells[winningHorizontal[2]].classList.contains('blue-counter') &&
        cells[winningHorizontal[3]].classList.contains('blue-counter')
      ) {
        result.innerHTML = 'Blue Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
    }
  }
  //? Vertical wins
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 7; j++) {
      let k = 7 * i + j;
      const winningVertical = [k, k + 7, k + 14, k + 21];
      if (
        cells[winningVertical[0]].classList.contains('red-counter') &&
        cells[winningVertical[1]].classList.contains('red-counter') &&
        cells[winningVertical[2]].classList.contains('red-counter') &&
        cells[winningVertical[3]].classList.contains('red-counter')
      ) {
        result.innerHTML = 'Red Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
      if (
        cells[winningVertical[0]].classList.contains('blue-counter') &&
        cells[winningVertical[1]].classList.contains('blue-counter') &&
        cells[winningVertical[2]].classList.contains('blue-counter') &&
        cells[winningVertical[3]].classList.contains('blue-counter')
      ) {
        result.innerHTML = 'Blue Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
    }
  }
  //? Decline slope wins
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let k = 7 * i + j;
      const winningDecline = [k, k + 8, k + 16, k + 24];
      if (
        cells[winningDecline[0]].classList.contains('red-counter') &&
        cells[winningDecline[1]].classList.contains('red-counter') &&
        cells[winningDecline[2]].classList.contains('red-counter') &&
        cells[winningDecline[3]].classList.contains('red-counter')
      ) {
        result.innerHTML = 'Red Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
      if (
        cells[winningDecline[0]].classList.contains('blue-counter') &&
        cells[winningDecline[1]].classList.contains('blue-counter') &&
        cells[winningDecline[2]].classList.contains('blue-counter') &&
        cells[winningDecline[3]].classList.contains('blue-counter')
      ) {
        result.innerHTML = 'Blue Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
    }
  }
  //? Incline slope wins
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      let k = 7 * i + j + 3;
      const winningIncline = [k, k + 6, k + 12, k + 18];

      if (
        cells[winningIncline[0]].classList.contains('red-counter') &&
        cells[winningIncline[1]].classList.contains('red-counter') &&
        cells[winningIncline[2]].classList.contains('red-counter') &&
        cells[winningIncline[3]].classList.contains('red-counter')
      ) {
        result.innerHTML = 'Red Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
      if (
        cells[winningIncline[0]].classList.contains('blue-counter') &&
        cells[winningIncline[1]].classList.contains('blue-counter') &&
        cells[winningIncline[2]].classList.contains('blue-counter') &&
        cells[winningIncline[3]].classList.contains('blue-counter')
      ) {
        result.innerHTML = 'Blue Wins!!!';
        for (let i = 0; i < 7; i++) {
          selectionButton[i].disabled = true;
        }
      }
    }
  }
}

for (let i = 0; i < 42; i++) {
  const slots = cells[i];
}
functi;
//! Reset button

reset.addEventListener('click', resetEverything);

function resetEverything() {
  for (let i = 0; i < 42; i++) {
    cells[i].classList.remove('red-counter', 'blue-counter', 'occupied');
  }
  result.innerHTML = `READY TO START, PLACE MOUSE OVER THE TOP OF THE BOARD TO PICK A SLOT`;
  for (let i = 0; i < 7; i++) {
    selectionButton[i].disabled = false;
  }
}
//! Two - player

twoPlayer.addEventListener('click', twoPlayerMode);

function twoPlayerMode() {
  addCounter();
}

var counter = 0;
var queen = 'img/queen.png';
const boardSize = 8;

let lightColor = localStorage.getItem('lightColor') || '#FECE9E';
let darkColor = localStorage.getItem('darkColor') || '#D18B47';
let blockedColor = localStorage.getItem('blockedColor') || 'red';
let blockedCells = new Set();

window.onload = () => {
  generateBoard();
  applyBoardColors();
  document.getElementById('lightColorPicker').value = lightColor;
  document.getElementById('darkColorPicker').value = darkColor;
  document.getElementById('blockedColorPicker').value = blockedColor;

  document.getElementById('blockedColorPicker').addEventListener('input', () => {
    blockedColor = document.getElementById('blockedColorPicker').value;
    localStorage.setItem('blockedColor', blockedColor);
    applyBoardColors();
  });
};

function generateBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';
  for (let r = 0; r < boardSize; r++) {
    const row = board.insertRow();
    for (let c = 0; c < boardSize; c++) {
      const cell = row.insertCell();
      cell.onclick = () => showQueen(cell, r, c);
      cell.onmouseover = () => changeColor(r, c);
      cell.onmouseleave = cleanBoard;
    }
  }
}

function applyBoardColors() {
  const cells = document.querySelectorAll('#board td');
  cells.forEach((td, index) => {
    const row = Math.floor(index / boardSize);
    const col = index % boardSize;
    const key = `${row}-${col}`;
    if (blockedCells.has(key)) {
      td.style.backgroundColor = blockedColor;
    } else {
      td.style.backgroundColor = (row + col) % 2 === 0 ? lightColor : darkColor;
    }
  });
}

function applyCustomColors() {
  const light = document.getElementById('lightColorPicker').value;
  const dark = document.getElementById('darkColorPicker').value;
  setColors(light, dark);
}

function setColors(light, dark) {
  lightColor = light;
  darkColor = dark;
  localStorage.setItem('lightColor', light);
  localStorage.setItem('darkColor', dark);
  applyBoardColors();
}

function resetColors() {
  localStorage.removeItem('lightColor');
  localStorage.removeItem('darkColor');
  lightColor = '#FECE9E';
  darkColor = '#D18B47';
  document.getElementById('lightColorPicker').value = lightColor;
  document.getElementById('darkColorPicker').value = darkColor;
  applyBoardColors();
}

function applyBlockedColor() {
  const color = document.getElementById('blockedColorPicker').value;
  blockedColor = color;
  localStorage.setItem('blockedColor', color);
  applyBoardColors();
}

function showQueen(cell, r, c) {
  const key = `${r}-${c}`;
  if (blockedCells.has(key)) return;

  if (window.getComputedStyle(cell).backgroundImage === 'none') {
    if (counter < 8) {
      cell.style.backgroundImage = `url('${queen}')`;
      cell.style.backgroundSize = '4rem';
      cell.style.backgroundRepeat = 'no-repeat';
      cell.style.backgroundPosition = 'center';
      counter++;
      markBlockedCells(r, c);
    }
  } else {
    cell.style.backgroundImage = 'none';
    counter--;
  }
}

function markBlockedCells(r, c) {
  for (let i = 0; i < boardSize; i++) {
    blockedCells.add(`${r}-${i}`);
    blockedCells.add(`${i}-${c}`);
    if (r + i < boardSize && c + i < boardSize) blockedCells.add(`${r + i}-${c + i}`);
    if (r + i < boardSize && c - i >= 0) blockedCells.add(`${r + i}-${c - i}`);
    if (r - i >= 0 && c + i < boardSize) blockedCells.add(`${r - i}-${c + i}`);
    if (r - i >= 0 && c - i >= 0) blockedCells.add(`${r - i}-${c - i}`);
  }
  applyBoardColors();
}

function changeColor(r, c) {
  const board = document.getElementById('board');
  for (let i = 0; i < boardSize; i++) {
    if (board.rows[r]) board.rows[r].cells[i].style.backgroundColor = 'red';
    if (board.rows[i]) board.rows[i].cells[c].style.backgroundColor = 'red';

    if (r + i < boardSize && c + i < boardSize) board.rows[r + i].cells[c + i].style.backgroundColor = 'red';
    if (r + i < boardSize && c - i >= 0) board.rows[r + i].cells[c - i].style.backgroundColor = 'red';
    if (r - i >= 0 && c + i < boardSize) board.rows[r - i].cells[c + i].style.backgroundColor = 'red';
    if (r - i >= 0 && c - i >= 0) board.rows[r - i].cells[c - i].style.backgroundColor = 'red';
  }
}

function cleanBoard() {
  applyBoardColors();
}

function clearImages() {
  document.querySelectorAll('td').forEach(td => td.style.backgroundImage = 'none');
  counter = 0;
  blockedCells.clear();
  applyBoardColors();
}

function changeImages() {
  document.querySelectorAll('td').forEach(td => {
    if (td.style.backgroundImage && td.style.backgroundImage !== 'none') {
      td.style.backgroundImage = `url('${queen}')`;
    }
  });
}

function showSolution(solutionNumber) {
  clearImages();
  const cells = document.getElementById('board');
  const solutions = {
    "1": [[0, 3], [1, 6], [2, 2], [3, 7], [4, 1], [5, 4], [6, 0], [7, 5]],
    "2": [[0, 4], [1, 1], [2, 3], [3, 6], [4, 2], [5, 7], [6, 5], [7, 0]],
    "3": [[0, 3], [1, 1], [2, 6], [3, 2], [4, 5], [5, 7], [6, 4], [7, 0]],
  };
  if (solutions[solutionNumber]) {
    solutions[solutionNumber].forEach(([r, c]) => showQueen(cells.rows[r].cells[c], r, c));
  }
}

function changeQueen(queenNumber) {
  switch (queenNumber) {
    case "1":
      queen = 'img/queen.png';
      break;
    case "2":
      queen = 'img/queen_elizabeth.png';
      break;
    case "3":
      queen = 'img/freddie_mercury.png';
      break;
  }
  changeImages();
}

const divBoard = document.getElementById('board');
const squarsNumber = 500;
const colors = ['#DC143C', '#7CFC00', '#FF69B4', '#FF8C00', '#B0C4DE'];

for (let i = 0; i < squarsNumber; i++) {
  const square = document.createElement('div');
  square.className = 'square';
  square.addEventListener('mouseover', () => setColor(square));

  divBoard.append(square);
}

function setColor(element) {
  const color = random();

  element.style.backgroundColor = colors[color];
  element.style.boxShadow = `0 0 5px ${colors[color]}`;

  setTimeout(() => {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px rgb(0, 0, 0)`;
  }, 700);
}

function random() {
  return Math.floor(Math.random() * colors.length);
}

grid(16);

function grid(size) {
let container = document.querySelector('.container');

container.style.gridTemplateColumns = '1fr '.repeat(size);
container.style.gridTemplateRows = '1fr '.repeat(size);

while (container.firstChild) {
    container.removeChild(container.firstChild);
};

//attempt to change grid colour  
const colorBtn = document.getElementById('colour');
let useColors = false;
colorBtn.addEventListener('click', changeColor);
function changeColor () {
    if (useColors !== true) {
      colorBtn.innerHTML = 'Colour On';
      colorBtn.classList.add('is-on');
      useColors = true;
    } else {
      colorBtn.innerHTML = 'Colour Off';
      colorBtn.classList.remove('is-on');
      useColors = false;
    }
  }
  
  function generateColor () {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    return color;
  }


for (i = 0; i < (size * size); i++) {
    let gridDiv = document.createElement('div');
    gridDiv.classList.add('griddiv');
    gridDiv.classList.remove('hover');
    gridDiv.classList.add('squares');
    gridDiv.addEventListener('mouseover', function() {
        gridDiv.classList.add('hover');
        gridDiv.classList.remove('squares');
        if (useColors === false) {
          const opacity = Number(square.style.opacity);
          gridDiv.style.backgroundColor = 'black';
          gridDiv.style.opacity = opacity + 0.1;
        } else {
          gridDiv.style.backgroundColor = generateColor();
        }
    });
container.appendChild(gridDiv);
};

};

  //reset button
let resetBtn = document.querySelector('#resetbtn');
    resetBtn.addEventListener('click', function() {
        newSize = prompt("Please enter new sketchpad size(ex. 100 x 100, enter 100):");
        grid(newSize);
    });
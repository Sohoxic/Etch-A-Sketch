let container = document.createElement('div');
container.classList.add('container');

let button = document.createElement('button');
button.classList.add('btn');
button.textContent = "Click to enter No. of grid boxes you want for the sketchpad";


let clearBtn = document.createElement('button');
clearBtn.classList.add('clearBtn');
clearBtn.textContent = "Clear sketchpad";
// clearBtn.style['margin'] = "10px";

let eraseBtn = document.createElement('button');
eraseBtn.classList.add('clearBtn');
eraseBtn.textContent = "ERASE sketchpad";

let n;

function createBox() {
  for(let i=0; i<n; i++){
    let childDiv = document.createElement('div');
    childDiv.classList.add('box1');
    container.appendChild(childDiv);
  }
  for (let i = 0; i < container.children.length; i++) {
    let box = container.children[i];
    box.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = '#D25380';
    });
  }

}

function noOfBox(n){
  noOfBox = n;
  createBox();
}
button.addEventListener('click',() => {
  n = prompt('Enter the grid size for the Sketchpad!');
  noOfBox(n);
});

// console.log(noOfBox);

eraseBtn.addEventListener('click',()=>{
  for (let i = 0; i < container.children.length; i++) {
    let box = container.children[i];
    box.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = '#FFFAF4';
    });
  }
});

clearBtn.addEventListener('click',()=>{
  for (let i = 0; i < container.children.length; i++) {
    let box = container.children[i];
      box.style['background-color'] = '#FFFAF4';
  }
});

document.body.append(button);
document.body.append(clearBtn);
document.body.append(eraseBtn);
document.body.appendChild(container);


  


let container = document.createElement('div');
container.classList.add('container');

let button = document.createElement('button');
button.classList.add('btn');
button.textContent = "Click to enter No. of grid boxes you want for the sketchpad";

let n;

function noOfBox(n){
  noOfBox = n;
}
button.addEventListener('click',() => {
  n = prompt('Enter the grid size for the Sketchpad!');
  noOfBox(n);
});

// console.log(noOfBox);

for(let i=0; i<100000; i++){
    let childDiv = document.createElement('div');
    childDiv.classList.add('box1');
    container.appendChild(childDiv);
}

document.body.append(button);
document.body.appendChild(container);

for (let i = 0; i < container.children.length; i++) {
    let box = container.children[i];
    box.addEventListener('mouseover', function(e) {
      e.target.style.backgroundColor = '#D25380';
    });
  }

  

let container = document.createElement('div');
container.classList.add('container');

let button = document.createElement('button');
button.classList.add('btn');
button.textContent = "Click to enter No. of grid boxes you want for the sketchpad";

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



document.body.append(button);
document.body.appendChild(container);


  


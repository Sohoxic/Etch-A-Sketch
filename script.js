let container = document.createElement('div');
container.classList.add('container');

for(let i=0; i<16; i++){
    let childDiv = document.createElement('div');
    childDiv.classList.add('box1');
    container.appendChild(childDiv);
}

document.body.appendChild(container);
console.log(container);

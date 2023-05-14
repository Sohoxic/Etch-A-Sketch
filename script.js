let container = document.createElement('div');
container.classList.add('container');
let innerdiv;

for(let i=0; i<16; i++){
    innerdiv = document.createElement('div');
    innerdiv.classList.add(`box${i}`);
    container.appendChild(innerdiv);
}

document.body.appendChild(container);
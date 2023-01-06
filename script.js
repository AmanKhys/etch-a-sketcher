const container = document.getElementById('container');
const controls = document.getElementById('controls');
const header = document.getElementById('header');
//


let count =16;
let moveCount = 0;
let changeInt = 0;
const changedPixels = [];

//declare control buttons
const button64 = document.createElement('button');
const reset = document.createElement('button');
const button16 = document.createElement('button');

button16.classList.add('control-button');
button64.classList.add('control-button');
reset.classList.add('control-button');

button16.innerText = "16x16";
button64.innerText = "64x64";
reset.innerText = "reset";

controls.appendChild(button16);
controls.appendChild(button64);
controls.appendChild(reset);

button16.addEventListener('click', (e)=> changeGrid(16));
button64.addEventListener('click', (e)=> changeGrid(64));
reset.addEventListener('click', (e)=> resetGrid(e));

//removing element function
function removeElement(){
    changedPixels.shift();
}
function changeGrid(number) {
    
    changedPixels.forEach(removeElement);
    count = number;
    container.innerHTML = '';
    makeContainer(count);
}

function resetGrid(){
    container.innerHTML = '';
    makeContainer(count);
}

//change pixel style function
function changePixelStyle(e){
 
    console.log(`entered styles`);
    const pixel = e.target;
    console.log(pixel);
    pixel.classList.add('pixel-move-style');
    console.log(changeInt);

    //changing value of changeInt before shifting from changedPixels
    changeInt = changedPixels.length;
    changedPixels[changeInt] = pixel.id;
    console.log(changedPixels);
    
    console.log(`${changeInt} is changeInt`);

//return pixel style

    if(changeInt>=10){
        let pixelId = changedPixels[0];
        console.log(`ID IS ${pixelId}`);
        const lastPixel = document.getElementById(`${pixelId}`);
        lastPixel.classList.remove('pixel-move-style');
        changedPixels.shift();   
    }
    moveCount++;

}



//make pixel container function
function makeContainer(pixelCount){
    console.log(`pixel count is ${pixelCount}`);
    for(let i = 0; i<pixelCount;i++){
        const pixelRow = document.createElement('div');
        pixelRow.classList.add('pixel-row-style')
        for(let j = 0; j<pixelCount; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel-style');
            pixel.setAttribute(`id`,`${i*count + j}`);
            pixelRow.appendChild(pixel);
            pixel.addEventListener('mouseover', (e) => changePixelStyle(e));
            
        }
        container.appendChild(pixelRow);
    }
}
makeContainer(count);



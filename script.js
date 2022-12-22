const container = document.getElementById('container');
const controls = document.getElementById('controls');
const header = document.getElementById('header');
//


let count =16;
let moveCount = 0;
let changeInt = 0;
const changedPixels = [];
//change pixel style function
function changePixelStyle(e){
    console.log(`entered styles`);
    const pixel = e.target;
    pixel.classList.add('pixel-move-style');
    console.log(moveCount);

    changedPixels[moveCount] = pixel.id;
    console.log(changedPixels);
    changeInt = changedPixels.length;
    console.log(changeInt);

//return pixel style

    if(changeInt>10){
        let changingPixelInt = changedPixels[0];
        const changingPixel = document.getElementById(`${changingPixelInt}`);
        changingPixel.classList.remove('pixel-move-style');
        
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
            pixel.setAttribute(`id`,`${i*10 + j}`);
            pixelRow.appendChild(pixel);
            pixel.addEventListener('mouseover', (e) => changePixelStyle(e));
            
        }
        container.appendChild(pixelRow);
    }
}
makeContainer(count);



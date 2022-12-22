const container = document.getElementById('container');
const controls = document.getElementById('controls');
const header = document.getElementById('header');
//


//make pixel container
let pixelCount =16;
for(let i = 0; i<pixelCount;i++){
    const pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row-style')
    for(let j = 0; j<pixelCount; j++){
        const pixel = document.createElement('div');
        pixel.classList.add('pixel-style');
        pixelRow.appendChild(pixel);
    }
    container.appendChild(pixelRow);

}
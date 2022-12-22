const container = document.getElementById('container');
const controls = document.getElementById('controls');
const header = document.getElementById('header');
//


let count =16;

//change pixel style function
function changePixelStyle(e){
    console.log(`entered styles`);
    const pixel = e.target;
    pixel.classList.add('pixel-move-style');
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
            pixelRow.appendChild(pixel);
            pixel.addEventListener('mouseover', (e) => changePixelStyle(e))
        }
        container.appendChild(pixelRow);

    }
}
makeContainer(count);


const hexBtn = document.querySelector(".hex-btn");
const hexColorVal = document.querySelector(".hex-color-value")
const hexColorContainer = document.querySelector('.hex-color-container');
const hexCopyBtn = document.querySelector('.hex-copy');

hexBtn.addEventListener("click",() =>{
    let charSet = '0123456789ABCDEF';
    let hexColor = "";

    for(let i =0,charSetLen = charSet.length; i<6;++i){
        hexColor += charSet.charAt(Math.floor(Math.random()*charSetLen));
    }
    hexColorVal.textContent = `#${hexColor}`;
    hexColorContainer.style.backgroundColor = `#${hexColor}`;
    hexBtn.style.color = `#${hexColor}`
})


const rgbBtn = document.querySelector("#rgb-btn");
const redRange = document.querySelector("#red");
const greenRange = document.querySelector("#green");
const blueRange = document.querySelector("#blue");
const rgbContainer = document.querySelector('.rgb-color-container');



rgbBtn.addEventListener('click',()=>{
    redVal = redRange.value
    greenVal = greenRange.value
    blueVal = blueRange.value
    rgbContainer.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`
    rgbBtn.style.color =`rgb(${redVal},${greenVal},${blueVal})`

})

function copyHexToClipboard(){
    navigator.clipboard.writeText(hexColorVal.textContent)
    alert("Copied to clipboard")
}

hexCopyBtn.addEventListener("click", copyHexToClipboard)
const containerElement= document.querySelector(".container");
for(let index=0; index<30;index++){
    const colorContainerElement= document.createElement("div");
    colorContainerElement.classList.add("color-container");
    containerElement.appendChild(colorContainerElement);
}
const colorContainerElements = document.querySelectorAll(".color-container");
 
generateColors();
function generateColors(){
    colorContainerElements.forEach((colorContainerElement) => {
            const newColorCode = randomColor();
            colorContainerElement.style.backgroundColor= "#"+ newColorCode;
            colorContainerElement.innerText= "#"+ newColorCode;

        }
    );
}

//randomColor();
function randomColor(){
    const chars="0123456789abcdef";
    const colorCodeLength= 6;
    let color= "";
    for(let index=0;index< colorCodeLength;index++){
        const randomNumber= Math.floor(Math.random() * chars.length);
        color += chars.substring(randomNumber, randomNumber+1);
        
    }
    return color;
}
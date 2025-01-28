const imageContainerElement= document.querySelector(".image-container");
const prevElement= document.getElementById("prev");
const nextElement= document.getElementById("next");
let x=0;
let timer;

prevElement.addEventListener("click", ()=>{
  x= x+45;
  clearTimeout(timer);
  updateGallery();
});
nextElement.addEventListener("click", ()=>{
    x= x-45;
    clearTimeout(timer);
    updateGallery();
  });

function updateGallery(){
    imageContainerElement.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer=setTimeout(()=>{
     x=x-45;
     updateGallery();
    },5000)
}
updateGallery();
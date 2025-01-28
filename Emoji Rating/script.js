const starElement= document.querySelectorAll(".fa-star");
console.log(starElement);
const emojiElement= document.querySelectorAll(".fa-regular");
const colors= ["red","orange","yellow","lightgreen","green"];


updateRating(0);

starElement.forEach((starElement, index) =>{
    starElement.addEventListener("click", () =>{
        updateRating(index)
    });
});

function updateRating(index){
    starElement.forEach((starElement, idx) =>{
      if(idx < index + 1){
        starElement.classList.add("active");
      }
      else{
        starElement.classList.remove("active");
      }
    });

    emojiElement.forEach((emojiElement) =>{
        emojiElement.style.transform =
        `translateX(-${index * 50}px)`;
        emojiElement.style.color = colors[index]
    });
}
const menuEl= document.querySelector(".menu")
const socialListsEl= document.querySelector(".social-lists")
const liEls= document.querySelectorAll(".social-lists li")


menuEl.addEventListener("click", ()=>{
  socialListsEl.classList.toggle("hide");
  menuEl.classList.toggle("rotate");
});

liEls.forEach((liEl) =>{
    liEl.addEventListener("click", () => {
        menuEl.innerHTML= liEl.innerHTML;
        socialListsEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    })
})
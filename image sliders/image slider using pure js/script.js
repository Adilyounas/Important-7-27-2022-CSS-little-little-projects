const carouselSlid = document.querySelector(".carousel-slid")
const carouselSlidImages = document.querySelectorAll(".carousel-slid img")

// buttons
const preBtn = document.querySelector("#prebtn")
const nextBtn = document.querySelector("#nextbtn")


// counter
let counter = 1;

//image width
const size = carouselSlidImages[0].clientWidth

// carouselSlid.style.transform = 'translateX(' + (-size * counter) + 'px)'

//button listern
nextBtn.addEventListener("click", () => {
    if(counter >= carouselSlidImages.length - 1) return
    counter++;
    carouselSlid.style.transition = "0.4s ease-in-out"
    carouselSlid.style.transform = 'translateX(' + (-size * counter) + 'px)'
});

preBtn.addEventListener("click", () => {
    if(counter <= 0) return
    counter--;
    carouselSlid.style.transition = "0.4s ease-in-out"
    carouselSlid.style.transform = 'translateX(' + (-size * counter) + 'px)'
    
});

carouselSlid.addEventListener("transitionend", () => {

    if (carouselSlidImages[counter].id === "lastClone") {
        counter = carouselSlidImages.length - 2;
        console.log(counter);

        carouselSlid.style.transform = 'translateX(' + (-size * counter) + 'px)'
        carouselSlid.style.transition = "none"
    }

    if (carouselSlidImages[counter].id === "firstClone") {
        counter = carouselSlidImages.length - counter;
        console.log(counter);
        carouselSlid.style.transform = 'translateX(' + (-size * counter) + 'px)'
        carouselSlid.style.transition = "none"
    }

});



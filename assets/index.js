let btn =document.getElementById("toggle-icon");

btn.onclick = function() {
    document.body.classList.toggle("dark-mode");
}

const slides =document.querySelectorAll('.slideShow');
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    counter--
    slideImg()
}
const goNext = () => { 
    counter++
    slideImg()
}

const slideImg = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}


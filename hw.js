const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

slider.addEventListener('input', _.debounce((e) => {
  image.style.width = e.target.value + 'px';
}, 100));









const div = document.querySelector(".box")
let count = 0

window.addEventListener("mousemove", _.debounce((e) => {
    
    count += 1
    const x = e.clientX
    const y = e.clientY
    const width = box.offsetWidth;
    const height = box.offsetHeight;
    box.style.position = "absolute"
    box.style.left = (x - width / 2) + "px"
    box.style.top = (y - width / 2) + "px"
    console.log(count);
    
}, 20))
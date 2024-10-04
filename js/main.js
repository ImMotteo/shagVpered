const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('click', () => {

        if (slide.classList.contains('active')) {
            slide.classList.remove('active');
            return
        } else {
            clearActiveClases();
            slide.classList.add('active');
        }
    })
}

function clearActiveClases() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    } )
}

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');

const container = document.querySelector('.slider_container')

const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 65}vh`;

upBtn.addEventListener('click', ()=> {
    changeSlide('up');
})

downBtn.addEventListener('click', ()=> {
    changeSlide('down')
})


function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
            if (activeSlideIndex === slidesCount) {
                activeSlideIndex = 0;
            };
        } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;
    
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;

    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}

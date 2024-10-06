const slides = document.querySelectorAll('.slide');

function notYourMom() {
    setTimeout(() => { document.querySelector('.how_we').classList.add('show_this') }, 200)
    setTimeout(() => { document.querySelector('.meet').classList.add('show_this') }, 500)
    setTimeout(() => { document.querySelector('.your_mom').classList.add('show_this') }, 800)
    setTimeout(() => { document.querySelector('.your_mom').classList.add('not_your_mom') }, 1500)
    setTimeout(() => { document.querySelector('.client').classList.add('show_this') }, 2300)
    setTimeout(() => { document.querySelector('.quote').classList.add('show_this') }, 2500)

}


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
    })
}

function slowScroll(place) {


    document.querySelector(place).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');

const container = document.querySelector('.slider_container')

const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sideBar.style.top = `-${(slidesCount - 1) * 80}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('down')

})

downBtn.addEventListener('click', () => {
    changeSlide('up');
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

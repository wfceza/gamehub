const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]")
        .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length -1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    });
});

function enterButton() {
    const buttonElement = document.querySelector('.js-enter-button');

    if (buttonElement.innerHTML === 'Enter') {
        buttonElement.innerHTML = 'COMING SOON'
    } else {buttonElement.innerHTML = 'Enter'

    }
}

const mobileBtn = document.getElementById("mobile-cta")
const nav = document.querySelector("nav")
const mobileBtnExit = document.getElementById("mobile-exit")

mobileBtn.addEventListener('click',  () => {
    nav.classList.add('menu-btn')
});

mobileBtnExit.addEventListener('click', ()  =>  {
    nav.classList.remove('menu-btn')
})
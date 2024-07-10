// выподающие ссылки
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.materials__card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const isActive = card.classList.contains('materials__card--active');

            cards.forEach(c => {
                c.classList.remove('materials__card--active');
                c.querySelector('.materials__card-header').classList.remove('materials__card-header--active');
                c.querySelector('.materials__card-text').classList.remove('materials__card-text--active');
                c.querySelector('.materials__card-icon').classList.remove('materials__card-icon--active');
            });

            if (!isActive) {
                card.classList.add('materials__card--active');
                card.querySelector('.materials__card-header').classList.add('materials__card-header--active');
                card.querySelector('.materials__card-text').classList.add('materials__card-text--active');
                card.querySelector('.materials__card-icon').classList.add('materials__card-icon--active');
            }
        });
    });
});
let focus = false

const menu = document.querySelector('.menu')
const menuOpen = document.querySelector('.intro__menu')
const menuClose = document.querySelector('.menu__close')
const links = document.querySelectorAll('.menu__links-link')
const bigLink = document.querySelector('.menu__links-link_arrow')
const popupLink = document.querySelector('.menu__links-pop-up')

const toggleMenu = () => {
    menu.classList.toggle('visible');
};

const hiddenLink = () =>{
    const fourthLink = links[2];
    fourthLink.classList.toggle('hidden')
    fourthLink.classList.toggle('display-none')
    popupLink.classList.toggle('hidden')
    popupLink.classList.toggle('display-none')

    if(!focus){
        bigLink.classList.add('focus');
    }else{
        bigLink.classList.remove('focus');
    }
    focus = !focus;
    
}
// ссылка исчезает, появляются новые

bigLink.addEventListener('click',hiddenLink)

menuOpen.addEventListener('click',toggleMenu)
menuClose.addEventListener('click',toggleMenu)

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('visible')
    });
});

// смена слова
const words = ["Luxurious","Spacious","Stylish"];
let wordIndex = 0;
const wordElement = document.getElementById('word');

function changeWord(){
    wordElement.classList.add('intro__headline-word_exit');

    setTimeout(()=>{
        wordIndex = (wordIndex+1) % words.length;
        wordElement.textContent = words[wordIndex];

        wordElement.classList.remove('intro__headline-word_exit');
        wordElement.classList.add('intro__headline-word');
    },500);
}

setInterval(changeWord,3000);

// появление справа и слева

document.addEventListener('DOMContentLoaded', function() {
    const projectsTitle = document.querySelector('.completed__black-line')
    const aboutTitle = document.querySelector('.about__title')
    const stepOne = document.getElementById('step1')
    const stepTwo = document.getElementById('step2')
    const stepThree = document.getElementById('step3')

    const observerOptions = {
        root: null, // null означает, что в качестве корня используется viewport
        rootMargin: '0px',
        threshold: 0.6 // процент видимости элемента
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } 
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    observer.observe(projectsTitle);
    observer.observe(aboutTitle);
    observer.observe(stepOne);
    observer.observe(stepTwo);
    observer.observe(stepThree);
});

// SLIDER
let slides = document.querySelectorAll('.completed__slider-card');
const prevBtn = document.querySelector('.completed__slider-btn_left');
const nextBtn = document.querySelector('.completed__slider-btn_right');
let slideIndex = 0;


function showSlide(idx){
    slides.forEach((slide,i) =>{
        slide.classList.toggle('active', i ===idx)
    });
}
prevBtn.addEventListener('click', () => {
    slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
    showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    showSlide(slideIndex);
});

const bigContainers = document.querySelectorAll('.container_switch');

if (window.screen.width < 1550) {
    bigContainers.forEach(bigContainer => {
        bigContainer.classList.remove('container-small');
        bigContainer.classList.add('container');
    });
}
const header = document.querySelector('header');
const menuToggle = document.querySelector('.toggle');
const menu = document.querySelector('.menu');
const target = document.getElementById('target');
let array = ['Web', 'Data', 'IA'];
let wordIndex = 0;
let letterIndex = 0;

// Menu

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

menu.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

// Text animation

const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);
    letter.textContent = array[wordIndex][letterIndex];
    setTimeout(() => {
        letter.remove();
    }, 2800);
};

// Fonction récursive
const loop = () => {
    setTimeout(() => {
        if (wordIndex >= array.length) {
            wordIndex = 0;
            letterIndex = 0;
            loop();
        } else if (letterIndex < array[wordIndex].length) {
            createLetter();
            letterIndex++;
            loop();
        } else {
            wordIndex++;
            letterIndex = 0;
            setTimeout(() => {
                loop();
            }, 2800);
        }
    }, 50);
};

loop();

// Projects filter

const filterButtons = document.querySelector('#filter-btns').children;
const items = document.querySelector('#portfolio-gallery').children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove('active');
        }
        this.classList.add('active');
        const target = this.getAttribute('data-target');

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = 'none';
            if (target == items[k].getAttribute('data-id')) {
                items[k].style.display = 'flex';
            }
            if (target == 'all') {
                items[k].style.display = 'flex';
            }
        }
    });
}

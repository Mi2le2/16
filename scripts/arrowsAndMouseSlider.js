// Слайдер
const wrapperOne = document.querySelector('.wrapper-1');
const leftButton = document.querySelector('.carousel-left');
const rightButton = document.querySelector('.carousel-right');
const leftButtonSmall = document.querySelector('.carousel-left-small');
const rightButtonSmall = document.querySelector('.carousel-right-small');
const imageContainer = document.querySelector('.image-container');


let track = 0;

let counter = 1;

const moveImagesRight = function () {
    if (counter < imageContainer.childElementCount) {
        counter++;
        track = track - 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

const moveImagesLeft = function () {
    if (counter > 1) {
        counter--;
        track = track + 100;
        wrapperOne.style.marginLeft = `${track}%`;
    }
}

rightButton.addEventListener('click', () => {
    moveImagesRight();
});

rightButtonSmall.addEventListener('click', () => {
    moveImagesRight();
});

leftButton.addEventListener('click', () => {
    moveImagesLeft();
});

leftButtonSmall.addEventListener('click', () => {
    moveImagesLeft();
});



// Смена фото на стрелочки влево-вправо
document.addEventListener('keydown', function(event) {
    // Если нажата клавиша влево
    if (event.key === 'ArrowLeft') {
        moveImagesLeft();
    } 
    // Если нажата клавиша вправо
    else if (event.key === 'ArrowRight') {
        moveImagesRight();
    }
});
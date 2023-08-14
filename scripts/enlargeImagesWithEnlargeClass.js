// Увеличивать изображения с классом enlarge по наведению мыши
var images = document.querySelectorAll('.enlarge');

// Создаем функцию для увеличения размера изображения при клике
function enlargeImage(event) {
    // Получаем элемент, на который кликнули
    var image = event.target;
    // Увеличиваем его размер в два раза
    image.style.transform = 'scale(1.1)';
}

// Создаем функцию для возвращения исходного размера изображения при отпускании клика
function restoreImage(event) {
    // Получаем элемент, на который кликнули
    var image = event.target;
    // Возвращаем его исходный размер
    image.style.transform = 'scale(1)';
}

// Добавляем слушатели событий клика и отпускания клика к каждому изображению
for (var i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', enlargeImage);
    images[i].addEventListener('mouseout', restoreImage);
}
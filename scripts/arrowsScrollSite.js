// Пролистывание сайта стрелочками вверх и вниз
    // Добавить обработчик события нажатия клавиши 
    document.addEventListener('keydown', function(event) {

        // Если нажата клавиша вниз
        if (event.key === 'ArrowDown') {
            // Получаем высоту видимой области браузера
            var pageHeight = window.innerHeight;
            // Прокручиваем окно на эту высоту вниз
            window.scrollBy(0, pageHeight-70);
        } 
        // Если нажата клавиша вверх
        else if (event.key === 'ArrowUp') {
            // Получаем высоту видимой области браузера
            var pageHeight = window.innerHeight;
            // Прокручиваем окно на эту высоту вверх, в обратную сторону
            window.scrollBy(0, -pageHeight);
        }
    });
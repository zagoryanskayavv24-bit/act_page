// Функция для обновления фона баннера
function updateBackground() {
    const banner = document.getElementById('banner');
    const word = document.getElementById('background-word').value;
    const imageUrl = document.getElementById('image-url').value;

    // Убираем класс has-text и стиль background-image
    banner.classList.remove('has-text');
    banner.style.backgroundImage = 'none';

    if (imageUrl) {
        // Если введена ссылка на изображение, используем его как фон
        banner.style.backgroundImage = `url('${imageUrl}')`;
    } else if (word) {
        // Если нет изображения, но есть слово — используем слово на фоне
        banner.setAttribute('data-background-word', word);
        banner.classList.add('has-text');
    } else {
        // Если ничего не введено, оставляем резервный цвет фона (из CSS)
        banner.removeAttribute('data-background-word');
    }
}

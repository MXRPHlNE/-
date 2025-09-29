/* ====================== */
/* 🌙 Переключатель темы  */
/* ====================== */
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme");

    if (body.classList.contains("light-theme")) {
      themeToggle.src = "sun.png"; // путь к картинке солнца
      console.log("Включена светлая тема");
    } else {
      themeToggle.src = "moon.png"; // путь к картинке луны
      console.log("Включена тёмная тема");
    }
  });
}


// файл: set-vh.js

// Функция для установки CSS-переменной --vh
function setVh() {
  // Получаем 1% от видимой высоты окна
  const vh = window.innerHeight * 0.01;
  // Устанавливаем значение в корневой элемент
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Вызываем сразу при загрузке страницы
setVh();

// Обновляем значение при изменении размера окна (например, поворот экрана)
window.addEventListener('resize', setVh);

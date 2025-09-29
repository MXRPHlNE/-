function showTab(tabName) {
  // Убираем active у всех табов
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Добавляем active нужному табу
  const targetTab = document.getElementById(tabName);
  if (targetTab) {
    targetTab.classList.add('active');
  }
}




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


const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", function () {
  let query = searchInput.value.toLowerCase().trim();
  let stories = document.querySelectorAll(".story-card");

  stories.forEach(story => {
    let text = story.querySelector("p").textContent.toLowerCase();
    if (text.includes(query) || query === "") {
      story.parentElement.style.display = ""; // если карточка в <a>
      story.style.display = "";              // если без <a>
    } else {
      story.parentElement.style.display = "none";
      story.style.display = "none";
    }
  });
});







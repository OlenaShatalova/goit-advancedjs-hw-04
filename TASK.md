# ДЗ goit-advancedjs-hw-04 — async/await і пагінація (пошук зображень Pixabay)

Здача: посилання на репозиторій + GitHub Pages + zip репозиторію.
Вимоги: Vite-збірка, Axios, async/await, Prettier, у консолі немає помилок, попереджень і `console.log`.
Проєкт містить код попередньої ДЗ (hw-03) і доповнює його.

## Структура
- `src/js/pixabay-api.js` — `getImagesByQuery(query, page)`: Axios + async/await, повертає `response.data`. `per_page = 15`.
- `src/js/render-functions.js` — екземпляр SimpleLightbox і функції:
  `createGallery(images)` (додає розмітку за одну операцію + `refresh()`), `clearGallery()`,
  `showLoader()`, `hideLoader()`, `showLoadMoreButton()`, `hideLoadMoreButton()`.
- `src/main.js` — уся логіка: iziToast, перевірки довжини масиву, пагінація, скрол.

## Поведінка
- Новий сабміт: `page = 1`, галерея очищується, Load more ховається, лоадер показується.
- Порожній рядок не відправляється. Немає результатів: тост
  "Sorry, there are no images matching your search query. Please try again!".
- Кнопка Load more під галереєю, лоадер під кнопкою. Поки зображень немає, кнопка прихована.
- Клік Load more: `page += 1`, нові картки додаються до наявних.
- Кінець колекції (за `totalHits`): кнопка ховається, тост
  "We're sorry, but you've reached the end of search results.".
- Після підвантаження: плавний скрол на 2 висоти картки (`getBoundingClientRect` + `window.scrollBy`).
- Клік по картинці відкриває SimpleLightbox.

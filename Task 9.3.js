// Task 9.3
/* Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число. */



const button = document.getElementsByClassName('btn')[0]
const result = document.getElementsByClassName('res')[0]

button.addEventListener('click', () => {
  const inputData = +document.getElementsByClassName('input')[0].value
  
  if (inputData > 0 && inputData < 11) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://picsum.photos/v2/list?limit='+inputData, true);
    xhr.onload = function() {
      const resultParse = JSON.parse(xhr.response);
      let cards = '';  
      resultParse.forEach(item => {
        const cardBlock = `
              <div class="card">
                <img
                  src="${item.download_url}"
                  class="card-image"
                />
                <p>${item.author}</p>
              </div>
            `;
        cards = cards + cardBlock;
      });

      result.innerHTML = cards;
    };
    xhr.send();
  } else {
    console.log('Число вне диапазона от 1 до 10')
    result.innerHTML = 'Число вне диапазона от 1 до 10';
  }
});

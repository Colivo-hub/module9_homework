// Task 9.5
/* Написать код приложения, интерфейс которого состоит из двух input и кнопки. В input можно ввести любое число.

Заголовок первого input — «номер страницы».
Заголовок второго input — «лимит».
Заголовок кнопки — «запрос».
При клике на кнопку происходит следующее:

Если число в первом input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Номер страницы вне диапазона от 1 до 10»;
Если число во втором input не попадает в диапазон от 1 до 10 или не является числом — выводить ниже текст «Лимит вне диапазона от 1 до 10»;
Если и первый, и второй input не в диапазонах или не являются числами — выводить ниже текст «Номер страницы и лимит вне диапазона от 1 до 10»;
Если числа попадают в диапазон от 1 до 10 — сделать запрос по URL https://picsum.photos/v2/list?page=1&limit=10, где GET-параметр page — это число из первого input, а GET-параметр limit — это введённое число второго input. */


const button = document.querySelector('.btn')
const res = document.querySelector('.res')

button.addEventListener('click', () => {
    const inputData1 = +document.querySelector('.page').value;
    const inputData2 = +document.querySelector('.limit').value;
    console.log(inputData1)
    console.log(inputData2)
    
    if((inputData1 >= 1 && inputData1 <=10 ) && (inputData2 >= 1 && inputData2 <=10)){
        fetch(`https://picsum.photos/v2/list?page=${inputData1}&limit=${inputData2}`)
        .then((response) => {
            console.log(response)
            return response.json();})
        .then((data) => {
             let cards = ''
             data.forEach(item => {
                const cardBlock = `
                    <div class="card">
                        <img
                        src="${item.download_url}"
                        class="card-image"
                        />
                    </div>
            `;
            cards = cards + cardBlock
            res.innerHTML = cards;})
            localStorage.setItem('image', cards)
      })
      .catch((e) => {
        console.log(e);
      });
    }
  
    const falsePageNumber = inputData1 < 1 || inputData1 > 10 || isNaN(inputData1);
    const falseLimit = inputData2 < 1 || inputData2 > 10 || isNaN(inputData2);
    
    if (falsePageNumber && falseLimit) {
      res.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
      return;
    }
    
    if(falsePageNumber){
      res.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    } 
    if(falseLimit){
      res.innerHTML = 'Лимит вне диапазона от 1 до 10';
    } 
})
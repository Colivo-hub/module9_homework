// Task 9.4

/* Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.

При клике на кнопку происходит следующее:

Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота. */

const button = document.querySelector('.btn')
const res = document.querySelector('.res')

button.addEventListener('click', () => {

const inputData1 = +document.querySelector('.input-width').value;
const inputData2 = +document.querySelector('.input-height').value;

if((inputData1 >= 100 && inputData1 <= 300) && (inputData2 >= 100 && inputData2 <= 300)){
    fetch(`https://picsum.photos/${inputData1}/${inputData2}`)
    .then((response) => { 
        console.log(response.url);
        let img = `
        <img src = "${response.url}"/>
    `;
        res.innerHTML = img;
    })
    .catch(() => {
        console.log("error");
    })

} else{
    res.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
}

})



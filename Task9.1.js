// Task 9.1

// Вам дана заготовка и результат, который вы должны получить. 
// Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

const parcer = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`


const doc = parcer.parseFromString(xmlString, "text/xml");
const listNode = doc.querySelector('list');
const studentNode = listNode.children


let lst = []
for(let i = 0; i< studentNode.length; i++){
    let firstName = studentNode[i].querySelector('first').getInnerHTML();
    let secondName = studentNode[i].querySelector('second').getInnerHTML();
    let obj = {
        name: firstName + ' ' + secondName,
        age: studentNode[i].querySelector('age').getInnerHTML(),
        prof: studentNode[i].querySelector('prof').getInnerHTML(),
        lang: studentNode[i].querySelector('name').getAttribute('lang')
    }
    lst.push(obj)

}

let result = {
    list: lst
}

console.log(result)


// OR

/* function getObjectFromXML (xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

    const list = Array.from(xmlDoc.querySelectorAll('student')).map(stud => {

        const name = stud.querySelector('first').textContent + " " + stud.querySelector('second').textContent;
        const age = stud.querySelector('age').textContent;
        const prof = stud.querySelector('prof').textContent;
        const lang = stud.querySelector('name').getAttribute('lang')

        return { name, age, prof, lang };
    });
    return list
}
console.log('result:', getObjectFromXML(xmlString)) */
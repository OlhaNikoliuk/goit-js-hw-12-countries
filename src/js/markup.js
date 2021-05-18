import data from '../data/menu.json';
import markup from '../markup/template.hbs';



// const data = [
//     {
//         name: 'John',
//         age: 34
//     },
//     {
//         name: 'Peter',
//         age: 13
//     },
//     {
//         name: 'Igor',
//         age: 28
//     }
// ]

// localStorage.setItem('data', JSON.stringify(data));
// const response = localStorage.getItem('data');
// console.log( JSON.parse(response));

// const obj = {
//     name: 'John',
//     age: 34
// }

// const newObj = JSON.parse(JSON.stringify(obj));

// console.log(obj === newObj)



























document.querySelector('.menu').insertAdjacentHTML('beforeend', data.map(el => markup(el)).join(''))
const theme = {light:'light-theme', dark:'dark-theme'}

document.body.classList.add(localStorage.getItem('theme') === null ? theme.light : localStorage.getItem('theme'))
document.querySelector('.theme-switch__toggle').checked = localStorage.getItem('theme') === theme.dark

const changeTheme = (add, rem) => {
    localStorage.setItem('theme', add)
    document.body.classList.remove(rem)
    document.body.classList.add(add)
}

document.querySelector('.theme-switch__toggle').onclick = () => {
    if(document.querySelector('.theme-switch__toggle').checked) {
        changeTheme(theme.dark, theme.light)
        return
    }
    changeTheme( theme.light, theme.dark)
}
































// Promise

// setTimeout(() => {
//     console.log(2)
// }, 0);

// let promise = new Promise((resolve, reject) => {
//     resolve(3)
// });

// promise.then(data => console.log(data))

// console.log(1);



















// fetch(url, {
//     method: 'POST', // или 'PUT'
//     body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });

// запрос за популярными фильмами

// const API_KEY = '3550330ecc32a34c7342dbd44dd96d6e';

// В зависимости от типа получаемого контента, используется различный метод парса.

// - `Response.prototype.json()` - используется, когда от бекенда ожидаются данные
//   в JSON-формате.
// - `Response.prototype.text()` - используется, когда от бекенда ожидаются данные
//   в простом текстовом формате, например `.csv` - формат хранения табличных
//   данных в виде текстового файла.
// - `Response.prototype.blob()` - используется, когда от бекенда ожидаются данные,
//   описывающие файл, например изображение, аудио или видео.

// function getRes(key) {
//     return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}`)
//             // .then(response => response.json())
//             // .then(data => console.log(data))
// }

// getRes(API_KEY).then(response => response.json()).then(data => console.log(data))

// setTimeout(() => {
//     console.log('timeout')
// }, 0);

// console.log('log')

// запрос по query

// const BASE_URL = 'https://api.themoviedb.org/3/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=';

// const searchData = ( query ) => {
//     return fetch(`${BASE_URL}${query}`)
// }

// searchData('Home alone')
// .then(resp => resp.json())
// .then(data => console.log(data))

// библиотека axios
// import axios from 'axios';

// const searchData = ( query ) => {
//     return axios.get(`${BASE_URL}${query}`,)
// }

// searchData('home alone').then(({data}) => console.log(data))
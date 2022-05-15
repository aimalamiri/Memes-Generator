import './scss/index.scss';
import Memes from './modules/Memes.js';
import Dom from './modules/Dom';

const memes = new Memes();

memes.fetchApi();
console.log(memes.data);

const app = new Dom('#app');

console.log(app.clear().append('<h1>Hello Once again</h1>'));

app.on('click', () => {alert("hello")});


const canvas = document.querySelector("#field");
const ctx = canvas.getContext("2d");

const engLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const rusLetters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
const numbers = "123456789".split("");
const allValues = engLetters.concat(rusLetters, numbers);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const bg = "#000";
const fontSize = 20;

const columns = canvas.width / 20;
let arr = [];

for(let i = 0; i < columns; i++) arr[i] = 1;

console.log(arr);

const randomValue = (arr) => {
  const random = Math.floor(Math.random() * allValues.length);
  
  return arr[random];
};

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0f0";
  ctx.font = `${fontSize}px serif`;

  for(let i = 0; i < arr.length; i++) {
    let str = allValues[Math.floor(Math.random() * allValues.length)];

    ctx.fillText(str, i * fontSize, arr[i] * fontSize);

    if(arr[i] * fontSize > canvas.height && Math.random() > 0.9) arr[i] = 0;

    arr[i]++
  }
}

setInterval(draw, 50);
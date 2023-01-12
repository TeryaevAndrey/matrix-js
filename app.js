const canvas = document.querySelector("#field");
const ctx = canvas.getContext("2d");

const engLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const rusLetters = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
const numbers = "123456789".split("");
const allValues = engLetters.concat(rusLetters, numbers);

const bg = "#000";

const randomValues = (arr = []) => {
  let value = Math.floor(Math.random() * arr.length);

  return arr[value];
}

randomValues();

const draw = () => {
  ctx.beginPath();
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const group = [];
  const groupLength = Math.floor(Math.random() * (10 - 1) + 1);

  while(group.length < groupLength) {
    group.push(randomValues(allValues));
  }

  requestAnimationFrame(draw);
}

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

draw();

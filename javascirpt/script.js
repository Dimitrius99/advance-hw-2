const message = prompt("Выберите варинт 1-3");
const number = parseInt(message);
const str = message.length;

if (str > 0){
  if (number === 1) {
    console.log("Вы выбрали Taba.");
  } else if (number === 2) {
    console.log("Вы выбрали Sharm.");
  } else if (number === 3) {
  console.log("Вы выбрали Hurgada.");
  } else {
  console.log("Вы выбрали число, варианта которого нету");
  }
} else {
  alert("Это поле обязательно для заполнения");
}

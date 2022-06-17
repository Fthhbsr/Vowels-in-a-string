// const input = document.querySelector(".input");

// document.querySelector(".button").addEventListener("click",(input)=>{
// countWovels(input);

// });
let count;
let word = "come on";
let vowelArr = ["a", "e", "i", "o", "u"];
const countWovels = (word) => {
  count = word.split("").filter((w) => vowelArr.includes(w)).length;
  console.log(count);
};

countWovels(word);
console.log(count);

// const input = document.querySelector(".input");
// const display = document.querySelector(".display");
// document.querySelector("body").addEventListener("click", (event) => {
//   if (event.target.classList.contains("button")) {
//     countVovels(input.value);
//   }
// });
// let x = 0;
// const countVovels = (kelime) => {
//   let len = 0;
//   len = kelime
//     .split("")
//     .filter(
//       (e) => e == "a" || e == "e" || e == "o" || e == "u" || e == "i"
//     ).length;
//   render(len);
// };
// const render = (word) => {
//   display.innerHTML = `There are ${word} vovels in ${input.value}`;
// };

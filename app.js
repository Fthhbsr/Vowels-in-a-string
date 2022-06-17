const input = document.querySelector(".input");
const display = document.querySelector(".display");

document.querySelector("body").addEventListener("click", (event) => {
  console.log("click");
  if (event.target.classList.contains("btn")) {
    countVowels(input.value);
  }
});

const countVowels = (word) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let count = word
    .lowercase()
    .split("")
    .filter((w) => vowelArr.includes(w)).length;
  console.log(count);
  render(count);
};

const render = (word) => {
  display.innerHTML = `There are ${word} vovels in ${input.value}`;
  console.log(word);
};

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

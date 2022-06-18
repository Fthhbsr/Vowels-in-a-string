const input = document.querySelector(".input");
const display = document.querySelector(".display");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  countVowels(input.value);
});

const countVowels = (word) => {
  let vowelArr = ["a", "e", "i", "o", "u"];
  let count = word
    .toLowerCase()
    .split("")
    .filter((w) => vowelArr.includes(w)).length;
  console.log(count);
  render(count);
};

const render = (word) => {
  display.innerHTML = `There are ${word} vowels in ${input.value}`;
  input.value = "";
};

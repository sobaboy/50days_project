// const addCount = document.querySelector(".add");
// const resetCount = document.querySelector(".reset");
// const subCount = document.querySelector(".subtract");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    count.innerHTML++;
    setColor();
  }
  if (e.target.classList.contains("subtract")) {
    count.innerHTML--;
    setColor();
  }
  if (e.target.classList.contains("reset")) {
    count.innerHTML = 0;
    setColor();
  }
});

function setColor() {
  if (count.innerHTML > 0) {
    count.style.color = "lightgreen";
  } else if (count.innerHTML < 0) {
    count.style.color = "orangered";
  } else {
    count.style.color = "#fff";
  }
}

// addCount.addEventListener("click", () => {
//   count.innerHTML++;
// });
// resetCount.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
// subCount.addEventListener("click", () => {
//   count.innerHTML--;
// });

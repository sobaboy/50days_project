const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
  // 1 ~ 45 사이의 랜덤 숫자 생성
  const randomNumber = Math.floor(Math.random() * 46);
  number.innerHTML = randomNumber;
};

btn.addEventListener("click", generateNumber);

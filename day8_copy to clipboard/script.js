const copyTxt = document.querySelector("textarea[name=copyTxt]");
const finalTxt = document.querySelector("textarea[name=finalTxt]");
const moverBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

moverBtn.addEventListener("click", moverText);
copyBtn.addEventListener("click", copyText);
finalTxt.addEventListener("click", selAll);
copyTxt.addEventListener("click", selAll);

function selAll() {
  this.select();
}

function moverText() {
  let temp = copyTxt.value;
  finalTxt.value = temp;
}

function copyText() {
  let temp = copyTxt.value;
  copytoClipBoard(temp);
}

function copytoClipBoard(str) {
  const textarea = document.createElement("textarea");
  console.log(textarea);

  textarea.value = str;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  output.innerHTML = "<h3>텍스트가 복사되었습니다</h3>" + textarea.value;
}

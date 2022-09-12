// todo List

const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }
    todoEl.innerText = todoText;

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);

    input.value = "";

    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}

// Dark mode

const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  document.body.classList.add("darkmode");
  toggleText.textContent = "Light";
  localStorage.setItem("darkMode", "enabled");
};
const disableDarkMode = () => {
  document.body.classList.remove("darkmode");
  toggleText.textContent = "Dark";
  localStorage.setItem("darkMode", null);
};

// 마지막 모드 상태 유지하기
if (darkMode === "enabled") {
  enableDarkMode();
}

// 클릭시 반응하는 Event Listener 추가
// 유저가 Darkmode toggle을 클릭하면 로컬스토리지로 가서 다크모드 property를 가지고 온다.
toggleDarkMode.addEventListener("click", () => {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

// 텍스트 복사기능
const copyTxt = document.querySelector("input[name=copyTxt]");
const finalTxt = document.querySelector("input[name=finalTxt]");
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

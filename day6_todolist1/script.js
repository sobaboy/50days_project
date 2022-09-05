/**
 *
 * todo 리스트
 *
 *
 */

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

/**
 *
 * ★ 다크모드 설정
 *
 * */

const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

/**
 * // 다크모드 셋팅하기
 * darkmode 클래스 추가 및 Light 텍스트 추가
 * darkmode 일 때와 lightmode 일 떄의 상태를 각각 로컬에 저장하기 위해서 if / else 문으로 묶지 않고 따로 선언해줌
 *
 */

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

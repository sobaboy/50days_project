const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode = localStorage.getItem("darkMode");

// 다크모드 셋팅하기

// darkmode 클래스 추가 및 Light 텍스트 추가

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

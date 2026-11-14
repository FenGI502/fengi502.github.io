/* ============================================================
   script.js —— 你的第三课
   这里只有两件小事，但它们包含了 JS 最核心的三样东西：
   ① 找到页面上的元素（document.getElementById）
   ② 监听用户的行为（addEventListener）
   ③ 修改页面（textContent / setAttribute）
   ============================================================ */

// ---- 第一部分：深色模式开关 --------------------------------

const root = document.documentElement; // <html> 元素
const toggle = document.getElementById("theme-toggle");
const STORAGE_KEY = "theme"; // 存到浏览器里的名字

// 一个函数：把主题应用到页面上（包括按钮上的小图标）
function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  toggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

// 页面一打开先决定用哪个主题，优先级：
// 用户上次的选择 > 系统的深色设置 > 亮色
const savedTheme = localStorage.getItem(STORAGE_KEY);
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(savedTheme || (prefersDark ? "dark" : "light"));

// 点击按钮时：亮变暗、暗变亮，并记住这次选择
toggle.addEventListener("click", function () {
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});

// ---- 第二部分：页脚年份自动更新 ---------------------------
// 好消息：明年它自己会变，你不用回来改。

document.getElementById("year").textContent = new Date().getFullYear();

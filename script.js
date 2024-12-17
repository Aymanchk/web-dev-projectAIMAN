let lastScrollTop = 0;
const header = document.querySelector("header");
const timeText = document.querySelector(".time")

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});


function updateTime() {
  const kyrgyzTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Bishkek",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
  });

  document.querySelector(".time").textContent = `Current Time: ${kyrgyzTime}`;
}


setInterval(updateTime, 1000);
updateTime();

const btnPageUp = document.getElementById("btn-section-up-page");

btnPageUp.addEventListener("click", () => {
  window.scrollTo({
    top,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  xxxxxx();
};
function xxxxxx() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnPageUp.style.opacity = 1;
  } else {
    btnPageUp.style.opacity = 0;
  }
}

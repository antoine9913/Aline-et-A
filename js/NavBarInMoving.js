const navBarMoving = document.getElementById("navbar-all-page-container");
const btnPageUp = document.getElementById("btn-section-up-page");

btnPageUp.addEventListener("click", () => {
  window.scrollTo({
    top,
    behavior: "smooth",
  });
});

window.onscroll = function () {
  navBar();
};
function navBar() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    navBarMoving.style.opacity = 1;
    btnPageUp.style.opacity = 1;
  } else {
    navBarMoving.style.opacity = 0;
    btnPageUp.style.opacity = 0;
  }
}

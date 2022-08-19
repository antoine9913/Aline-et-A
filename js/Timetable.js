function timetableBtn() {
  const div = document.getElementById("timetable-section");
  const angleRight = document.getElementById("angleright");
  if (div.style.display === "block") {
    div.style.display = "none";
    angleRight.style.transform = "rotate(0deg)";
    angleRight.style.animation = "inverserotation 0.2s  linear forwards";
  } else {
    div.style.display = "block";
    angleRight.style.transform = "rotate(90deg)";
    angleRight.style.animation = "rotation 0.2s  linear forwards";
  }
}

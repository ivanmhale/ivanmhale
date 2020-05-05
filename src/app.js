const name = document.getElementById("name");
const liAbout = document.getElementById("nav_about");
const liSamples = document.getElementById("nav_samples");
const liContact = document.getElementById("nav_contact");
const mainContent = document.getElementById("window");

name.addEventListener("click", () => {
  mainContent.style.transform = "translateY(0%)";
});

liAbout.addEventListener("click", () => {
  mainContent.style.transform = "translateY(-100%)";
});

liSamples.addEventListener("click", () => {
  mainContent.style.transform = "translateY(-200%)";
});

liContact.addEventListener("click", () => {
  mainContent.style.transform = "translateY(-300%)";
});

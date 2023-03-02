const opeiiin = document.querySelector(".info");
const opener = document.querySelector(".open");
const closer = document.querySelector(".close");

opener.addEventListener("click", () => {
  opeiiin.classList.add("show");
});

closer.addEventListener("click", () => {
  opeiiin.classList.remove("show")
})
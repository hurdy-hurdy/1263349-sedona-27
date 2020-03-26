var button = document.querySelector (".button-find")
var popup = document.querySelector (".pop-up")
var form = popup.querySelector("form");
var arrival = popup.querySelector("[name=arrival]");
var departure = popup.querySelector("[name=departure]");
var map = document.querySelector (".button-find")


button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-show");
});

form.addEventListener("submit", function (evt) {
  if (!arrival.value || !departure.value) {
    evt.preventDefault();
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

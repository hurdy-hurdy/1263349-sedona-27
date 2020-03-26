

var button=document.querySelector(".button-find");var popup=document.querySelector(".pop-up");var form=popup.querySelector("form");var arrival=popup.querySelector("[name=arrival]");var departure=popup.querySelector("[name=departure]");var map=document.querySelector(".button-find");button.addEventListener("click",function(a){a.preventDefault();popup.classList.toggle("modal-show")});form.addEventListener("submit",function(a){if(!arrival.value||!departure.value){a.preventDefault();popup.classList.add("modal-error")}});window.addEventListener("keydown",function(a){if(a.keyCode===27){a.preventDefault();if(popup.classList.contains("modal-show")){popup.classList.remove("modal-show")}}});




 "use strict";

 const modal = document.getElementById("modal");
 const openElements = document.querySelectorAll(".open");
 const close = document.getElementById("close");

 openElements.forEach(el => {
     el.addEventListener("click", () => {
         modal.style.display = "block";
     });
 });

 close.addEventListener("click", () => {
     modal.style.display = "none";
 });
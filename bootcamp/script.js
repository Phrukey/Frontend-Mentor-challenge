 "use strict";

 const content = document.querySelectorAll(".content");
 const slider = document.querySelector(".slider");
 const prev = document.querySelectorAll(".prev");
 const next = document.querySelectorAll(".next");

 prev.forEach(el => {
     console.log(el.parentElement.id);
     el.addEventListener("click", e => {
         e.preventDefault();

         let contentId = el.parentElement.parentElement.parentElement.id;
         if (contentId = "tanya") {
             slider.style.transform = "translateX(0)";
         } else {
             slider.style.transform = "translateX(-100%)";
         }
     });
 });

 next.forEach(el => {
     el.addEventListener("click", e => {
         e.preventDefault();
         let contentId = el.parentElement.parentElement.parentElement.id;
         if (contentId = "tanya") {
             slider.style.transform = "translateX(-100%)";
         } else {
             slider.style.transform = "translateX(0)";
         }
     });
 });
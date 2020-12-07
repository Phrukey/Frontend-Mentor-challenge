 "use strict";

 let elWithImg = document.querySelectorAll(".imageDiv div");

 elWithImg.forEach(el => {
     //  console.log(el.innerHTML);
     let par = document.createElement("p");
     par.classList = "par";
     let image = el.querySelector("img");
     let imgSrc = image.getAttribute("src");
     par.innerText = imgSrc;
     el.appendChild(par);

 });
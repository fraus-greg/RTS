let burgerBool = false;
function burgerLinks() {
   if (burgerBool == false) {
      burgerBool = true;
      document.querySelector(".burgerLinks-line2").style.opacity = "0";
      document.querySelector(".burgerLinks-line1").style.transform =
         "rotate(45deg)";
      document.querySelector(".burgerLinks-line3").style.transform =
         "rotate(315deg)";
      document.querySelector(".burgerLinks-line1").style.position = "absolute";
      document.querySelector(".burgerLinks-line3").style.position = "absolute";
      document.querySelector(".header__burgerLinks").style.position =
         "relative";
      document.querySelector(".header__burgerMenu").style.top = "0";
   } else {
      burgerBool = false;
      document.querySelector(".burgerLinks-line2").style.opacity = "1";
      document.querySelector(".burgerLinks-line1").style.transform =
         "rotate(0)";
      document.querySelector(".burgerLinks-line3").style.transform =
         "rotate(0)";
      document.querySelector(".burgerLinks-line1").style.position = "inherit";
      document.querySelector(".burgerLinks-line3").style.position = "inherit";
      document.querySelector(".header__burgerMenu").style.top = "-100%";
   }
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
         behavior: "smooth",
         block: "start",
      });
   });
}

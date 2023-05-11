function openWindow() {
   var nameInput = document.getElementById("input-name").value;
   var emailInput = document.getElementById("input-email").value;
   var textInput = document.getElementById("input-text").value;

   if (nameInput != "") {
      document.getElementById("h1-name").innerHTML = "Ваше имя: " + nameInput;
   }
   if (emailInput != "") {
      document.getElementById("h1-email").innerHTML =
         "Ваша почта: " + emailInput;
   }
   if (textInput != "") {
      document.getElementById("h1-text").innerHTML =
         "Ваше сообщение: " + textInput;
   }

   if ((nameInput == "") | (emailInput == "") | (textInput == "")) {
      document.querySelector(".modal-block").style.display = "none";
      document.querySelector(".filter-screen").style.display = "none";
   } else {
      document.querySelector(".modal-block").style.display = "block";
      document.querySelector(".filter-screen").style.display = "block";
      setTimeout(opacity1, 100);
   }
   console.log(nameInput);
   console.log(emailInput);
   console.log(textInput);
}

function closeWindow() {
   document.getElementById("input-name").value = "";
   document.getElementById("input-email").value = "";
   document.getElementById("input-text").value = "";

   opacity0();
}

function opacity1() {
   document.querySelector(".modal-block").style.opacity = "1";
   document.querySelector(".filter-screen").style.opacity = "1";
}

function opacity0() {
   document.querySelector(".modal-block").style.opacity = "0";
   document.querySelector(".filter-screen").style.opacity = "0";
   document.querySelector(".modal-block").style.display = "none";
   document.querySelector(".filter-screen").style.display = "none";
}

function placeholderAnulator(number) {
   if (number == 1) {
      document.getElementById("input-name").placeholder = "";
   } else if (number == 2) {
      document.getElementById("input-email").placeholder = "";
   } else if (number == 3) {
      document.getElementById("input-text").placeholder = "";
   }
}

function placeholderOnBlur(number) {
   if (number == 1) {
      document.getElementById("input-name").placeholder = "Ваше имя";
   } else if (number == 2) {
      document.getElementById("input-email").placeholder = "Ваш email";
   } else if (number == 3) {
      document.getElementById("input-text").placeholder = "Ваше сообщение";
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

let number = 0

let timer = setInterval(timer11, 1000)

function timer11() {
   
   number++
   console.log(number);
   if (number == 10) {
      clearInterval(timer)
      function errorStop () {
               console.log("Стоп, ошибка");
      }
      setTimeout(errorStop, 500)
   }
}


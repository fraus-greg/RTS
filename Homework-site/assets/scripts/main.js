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
   document.querySelector(".modal-block").style.display = "block";
   if ((nameInput == "") | (emailInput == "") | (textInput == "")) {
      document.querySelector(".modal-block").style.display = "none";
   }
   console.log(nameInput);
   console.log(emailInput);
   console.log(textInput);
}

function closeWindow() {
   document.querySelector(".modal-block").style.display = "none";
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

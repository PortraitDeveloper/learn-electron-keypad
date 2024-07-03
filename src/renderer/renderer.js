const correctPin = "2378";
let inputPin = "";

$(document).ready(function () {
  $(".keypad-btn").on("click", function () {
    if (inputPin.length < 4) {
      inputPin += $(this).data("number");
      updatePinDisplay();
    }
  });

  $("#deleteBtn").on("click", function () {
    inputPin = inputPin.slice(0, -1);
    updatePinDisplay();
  });

  $("#enterBtn").on("click", function () {
    checkPin();
  });

  $(document).on("keydown", function (event) {
    if (inputPin.length < 4 && event.key >= "0" && event.key <= "9") {
      inputPin += event.key;
      updatePinDisplay();
    } else if (event.key === "Backspace") {
      inputPin = inputPin.slice(0, -1);
      updatePinDisplay();
    } else if (event.key === "Enter") {
      checkPin();
    }
  });

  function updatePinDisplay() {
    $("#pinDisplay").text(inputPin.padEnd(4, "-"));
  }

  function checkPin() {
    if (inputPin === correctPin) {
      window.electron.alert("Pin benar");
    } else {
      window.electron.alert("Pin salah");
    }
    inputPin = "";
    updatePinDisplay();
  }
});

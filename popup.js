document.addEventListener("DOMContentLoaded", function() {
  var brightnessInput = document.getElementById("brightness");

  brightnessInput.addEventListener("input", function() {
    var brightnessValue = parseInt(brightnessInput.value, 10) / 100;
    chrome.tabs.executeScript({
      code: "document.body.style.filter = 'brightness(" + brightnessValue + ")';"
    });
  });
});

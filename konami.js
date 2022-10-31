const pressedKeys = [];
const konamiCode = "magic";
const main = document.querySelector(".signup");

window.addEventListener("keydown", (e) => {
  pressedKeys.push(e.key?.toLowerCase());

  if (pressedKeys.length > konamiCode.length) {
    pressedKeys.shift();
  }

  if (pressedKeys.join("") === konamiCode) {
    main.classList.add("konami");
  } else {
    main.classList.remove("konami");
  }
});

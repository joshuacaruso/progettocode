let container = document.querySelector("section");
let btn = document.getElementById("btn1");
let secbtn = document.getElementById("btn2");
let aElement = document.querySelectorAll("a");
let newButton = document.createElement("button");
let newTitle = document.createElement("span");
secbtn.style.cursor = "not-allowed";
secbtn.disabled = true;
aElement.forEach((pointer) => {
  pointer.style.cursor = "not-allowed";
  pointer.disabled = true;
});
let input = document.getElementById("email");
if (input) {
  input.style.cursor = "not-allowed";
  input.disabled = true;
}
function removeOnClick() {
  container.remove();
}
function replaceOnClick() {
  newTitle.innerHTML = "Test riuscito";
  newButton.innerHTML = "Controlla gli esercizi";
  document.body.append(newTitle, newButton);
  newTitle.style.display = "grid";
  newTitle.style.marginTop = "30vh";
  newButton.style.margin = "auto";
  newButton.style.display = "flex";
  newButton.style.justifyContent = "center";
  newButton.style.alignItems = "center";
  newButton.classList.add("btn2");
}
function onClick() {
  removeOnClick();
  replaceOnClick();
  btn.style.cursor = "not-allowed";
  btn.disabled = true;
}
btn.addEventListener("click", onClick);
newButton.addEventListener("click", function () {
  window.location.href = "esercizi.html";
});

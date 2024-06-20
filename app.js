let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  let h3 = document.querySelector("h3");
  h3.innerText = randomColor;
  document.querySelector("div").style.backgroundColor = randomColor;
  let h4 = document.createElement("h4");
  h4.innerText = "new color generated!";
  document.querySelector("body").insertAdjacentElement("beforeend", h4);
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

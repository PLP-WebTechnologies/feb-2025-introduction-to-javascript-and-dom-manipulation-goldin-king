// Change text content dynamically
document.getElementById("change-text-btn").addEventListener("click", () => {
  document.getElementById("intro-text").textContent = "You clicked the button! Text has changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("toggle-style-btn").addEventListener("click", () => {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
});

// Add and remove an element
const container = document.getElementById("container");

document.getElementById("add-element-btn").addEventListener("click", () => {
  const newElement = document.createElement("p");
  newElement.textContent = "I'm a new paragraph!";
  newElement.id = "dynamic-paragraph";
  container.appendChild(newElement);
});

document.getElementById("remove-element-btn").addEventListener("click", () => {
  const element = document.getElementById("dynamic-paragraph");
  if (element) {
    element.remove();
  }
});

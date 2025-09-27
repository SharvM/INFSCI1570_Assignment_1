//Code for Page 5 - Form About Favorite Shoe

const form = document.getElementById("shoe-form");
const savedShoeDisplay = document.getElementById("savedShoe");
const input = document.getElementById("shoeName");

const storedShoe = localStorage.getItem("favoriteShoe");
if (storedShoe) {
  savedShoeDisplay.textContent = `Your saved favorite shoe: ${storedShoe}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const shoeValue = input.value.trim();
  if (shoeValue) {
    localStorage.setItem("favoriteShoe", shoeValue);
    savedShoeDisplay.textContent = `Your saved favorite shoe: ${shoeValue}`;
    input.value = "";
  }
});
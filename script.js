//Button Functionality for Home to More!
const button = document.getElementById('button_two');
button.addEventListener('click', function() { 
  window.location.href = 'page_five.html'; 
        });



const button1 = document.getElementById("button_one");
const button3 = document.getElementById("button_three")
const shoeImage = document.getElementById("image_one"); 

// event listener -- change theme to RED
button1.addEventListener("click", () => {
  document.body.classList.remove("green-theme");
  
  if (!document.body.classList.contains("red-theme")) {
    document.body.classList.add("red-theme");
    shoeImage.src = "https://i.pinimg.com/736x/2e/7f/91/2e7f91517cca0857b847f8cc4fd165e4.jpg";
  } else {
    document.body.classList.remove("red-theme");
    shoeImage.src = "https://i.pinimg.com/originals/fa/48/3a/fa483a700daac53962b0f5a5b80ce0ae.jpg";
  }
});

// event listener -- change theme to GREEN
button3.addEventListener("click", () => {
  document.body.classList.remove("red-theme");
  
  if (!document.body.classList.contains("green-theme")) {
    document.body.classList.add("green-theme");
    shoeImage.src = "https://e0.pxfuel.com/wallpapers/126/126/desktop-wallpaper-nike-iphone-cool-nike-shoes.jpg";
  } else {
    document.body.classList.remove("green-theme");
    shoeImage.src = "https://i.pinimg.com/originals/fa/48/3a/fa483a700daac53962b0f5a5b80ce0ae.jpg";
  }
});



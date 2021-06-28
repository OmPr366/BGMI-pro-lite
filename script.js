document.addEventListener("click", function (e) {
  let body = this.querySelector("body");
  let bullet = document.createElement("span");
  bullet.classList.add("bullet");
  let x = e.offsetX;
  let y = e.offsetY;
  bullet.style.left = x + "px";
  bullet.style.top = y + "px";
  body.appendChild(bullet);

  

  let audio = document.getElementById("audio");
  audio.play();

  let images = [
      'url("assests/blood4.png")',
      'url("assests/blood6.png")',
  ]

  let blood = document.createElement("span");
  blood.classList.add("blood");

  let bg = images[Math.floor(Math.random()*images.length)];
  blood.style.backgroundImage = bg;

  blood.style.left = x + "px";
  blood.style.top = y + "px";
  body.appendChild(blood);
  setTimeout(() => {
    bullet.remove();
    blood.remove();
  }, 4000);
});

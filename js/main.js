document.addEventListener("DOMContentLoaded", function () {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.poke-img');

  function changeImage() {

    images[currentImageIndex].classList.remove('is-selected');

    currentImageIndex = (currentImageIndex + 1) % images.length;

    images[currentImageIndex].classList.add('is-selected');
  }

  setInterval(changeImage, 5000);
});

let flipped = false;

setInterval(() => {
  const flipContainer = document.getElementById('flipContainer');
  flipped = !flipped;
  if (flipped) {
    flipContainer.classList.add('flipped');
  } else {
    flipContainer.classList.remove('flipped');
  }
}, 3000);


var pokeCardList = document.querySelector(".js-poke-card-list");

for (var pokeItem of pokemons){
  var cardItem = document.createElement("li");

  var pokeId = document.createElement("span");

  var pokeImg = document.createElement("img");

  var pokeName = document.createElement("h3");

  var pokeType = document.createElement("p");

  pokeId.textContent = pokeItem.num;

  pokeImg.src = pokeItem.img;

  pokeImg.alt = pokeItem.name + " image";

  pokeName.textContent = pokeItem.name;

  pokeType.textContent = pokeItem.type.join(" ");

  cardItem.classList.add("card-list-item");
  pokeId.classList.add("card-item-num");
  pokeImg.classList.add("card-item-img");
  pokeName.classList.add("card-item-name");
  pokeType.classList.add("card-item-type");


  cardItem.append(pokeId,pokeImg,pokeName,pokeType);
  pokeCardList.appendChild(cardItem);

  // console.log(pokeId,pokeImg,pokeName,pokeType);
}
let gameData;
const main = document.querySelector("main");
const pokemonImage = document.querySelector("#pokemon-image");
const textOverlay = document.querySelector("#text-overlay");
const choices = document.querySelector("#choices");
const playBtn = document.querySelector("#play");

playBtn.addEventListener("click", fetchData);
loadVoice();
addAnswerHandler();

async function fetchData() {
  resetImage();
  gameData = await window.getPokeData();
  showSilhouette();
  displayChoices();
}

function resetImage() {
  pokemonImage.src =
    "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D";
  main.classList.add("fetching");
  main.classList.remove("revealed");
}

function showSilhoutte() {
  main.classList.remove("fetching");
  pokemonImage.src = gameData.correct.image;
}

fu


let gameData;
const main = document.querySelector("main");
const pokemonImage = document.querySelector('#pokemon-image');
const textOverlay = document.querySelector('#text-overlay');
const choices = document.querySelector('#choices');
const playBtn = document.querySelector('#play');

playBtn.addEventListener("click", fetchData);
loadVoice();
addAnswerHandler();

async function fetchData() {
  resetImage();
  gameData = await window.getPO
}
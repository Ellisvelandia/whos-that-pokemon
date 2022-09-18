window.getPokeData = async function () {
  const pokemon = await getPokemon();
  const randomPokemon = shuffle(pokemon);
  const pokemonChoices = get4Pokemon(randomPokemon);
  const [firstPokemon] = pokemonChoices;
  const image = getPokemonImage(firstPokemon);

  return {
    pokemonChoices: shuffle(pokemonChoices),
    correct: {
      image,
      name: firstPokemon.name,
    },
  };
};

async function getPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const pokemon = await res.json();

  return pokemon.results;
}

function shuffle(unshuffled) {
  const shuffled = unshuffled
  .map((value) => ({value, sort: Math.random()}))
  .sort((a, b))
}

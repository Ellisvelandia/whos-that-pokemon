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
      name:firstPokemon.name,
    }
  }
};

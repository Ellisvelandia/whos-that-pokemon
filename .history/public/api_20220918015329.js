window.getPokeData = async function () {
  const pokemon = await getPokemon();
  const randomPokemon = shuffle(pokemon);;
  const
}
const pokemonDetailsContainer = document.getElementById('pokemonDetails');

function renderPokemonDetails(pokemon) {
  const html = `
      <h2>${pokemon.name}</h2>
      <p>Number: #${pokemon.number}</p>
      <p>Type: ${pokemon.type}</p>
      <img src="${pokemon.photo}" alt="${pokemon.name}">
  `;

  pokemonDetailsContainer.innerHTML = html;
}

const pokemonId = new URLSearchParams(window.location.search).get('id');

if (pokemonId) {
  pokeApi.getPokemonDetailById(pokemonId)
    .then(renderPokemonDetails)
    .catch((error) => {
      console.error('Erro ao carregar detalhes do Pokémon:', error);
    });
}

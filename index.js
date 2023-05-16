async function getPokemon() {
  let pokemonData = [];
  for (let i = 1; i < 50; i++) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    //   console.log(response);
    let data = await response.json();
    // console.log(data);
    pokemonData.push(data);
  }
  return pokemonData;
}

getPokemon()
  .then((data) => {
    //   console.log(data);
    let pokemonHtml = data.map((pokemon) => {
      return `<div class="pokemon" >
      <img alt="picture of ${pokemon.name}"  src="${pokemon.sprites.front_default}"/>
      <h2 class="pokemon-name" >${pokemon.name}</h2>
      </div>
      `;
    });
    //   console.log(pokemonHtml.join(""));
    return pokemonHtml.join("");
  })
  .then((data) => {
    console.log(data);
    document.body.innerHTML = `<div class="wrapper" >
    ${data}
    </div>`;
  })
  .catch((error) => {
    document.body.innerHTML = `<div>
    <h1>Server is down. Sorry!</h1>
    </div>`;
  });

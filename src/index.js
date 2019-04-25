document.addEventListener('DOMContentLoaded', () => {
  //YOUR CODE HERE
const pokeContainer = document.querySelector('#pokemon-container')
const pokeInput = document.getElementById('pokemon-search-input')

pokeContainer.innerHTML = ``

function renderPokemon(array){
  array.forEach(function(pokemon){
    pokeContainer.innerHTML += `<div class="pokemon-card">
      <div class="pokemon-frame">
        <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
          <img data-id=${pokemon.id} data-action="flip" class="toggle-sprite" src=${pokemon.sprites.front}>
        </div>
      </div>
    </div>`
  })
}

pokeInput.addEventListener(`input`, function(e) {

  pokeContainer.innerHTML = ``
  let search = e.target.value
  let filteredPokemon = POKEMON.filter(function(pokemon){
    return pokemon.name.includes(search)
  })

  filteredPokemon.length == 0 ? pokeContainer.innerHTML = `<p>There are no pokemon</p>` : renderPokemon(filteredPokemon)
})


pokeContainer.addEventListener('click', function(e){
  if (e.target.dataset.action === 'flip'){
    let clickedPoke = POKEMON.find(function(pokemon){
      return e.target.dataset.id === pokemon.id.toString()
    })
    e.target.src = clickedPoke.sprites.front === e.target.src ? clickedPoke.sprites.back : clickedPoke.sprites.front

  }
})
renderPokemon(POKEMON)
})

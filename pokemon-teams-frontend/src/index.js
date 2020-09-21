document.addEventListener('DOMContentLoaded', () => {

    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`

    const fetchPokemon = (url) => {
        fetch(url)
        .then(response => response.json())
        .then( pokemons => renderPokemons(pokemons))
    }

    const renderPokemons = data => {
        for(pokemon of data){
            
            pokemonInfo = {
                name: pokemon.nickname,
                species: pokemon.species,
                pokemonId: pokemon.id,
                pokemontrainerId: pokemon.trainer_id
            }
            renderPokemon(pokemonInfo)
        }
    }

    const renderPokemon = (info) => {
        //info is one pokemon
        //create pokemon and find its trainer with the id
        //<li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
        const li = document.createElement('li')
        li.textContent = `${info.name} (${info.species})`
        console.log(li)
    }

    const fetchTrainers = (url) => {
        
        fetch(url)
        .then(response => response.json())
        .then( trainers => renderTrainers(trainers))
    }

    const renderTrainers = (data) => {

        for(trainer of data){
            const name = trainer.name
            const trainerId = trainer.id
            renderTrainer(name, trainerId)
        }
    }

    const renderTrainer = (name, id) => {
        const trainerDiv = document.createElement('div')
        trainerDiv.textContent = name
        
        trainerDiv.dataset.id = `${id}`
        trainerDiv.classList.add('card')
        const button = document.createElement('button')
        button.textContent = "Add Pokemon"
        button.dataset.id = `${id}`

        trainerDiv.append(button)
        const mainTag = document.querySelector('main')
        mainTag.append(trainerDiv)
    }

// - When a user loads the page, they should see all trainers, with their current
//   team of Pokemon.
// - Whenever a user hits "Add Pokemon" and they have space on their team, they
//   should get a new Pokemon.
// - Whenever a user hits "Release Pokemon" on a specific Pokemon team, that
//   specific Pokemon should be released from the team.

/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */

    fetchTrainers(TRAINERS_URL)
    fetchPokemon(POKEMONS_URL)

})


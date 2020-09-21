const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const qs = (selector) => document.querySelector(selector)
const ce = (element) => document.createElement(element)


document.addEventListener('DOMContentLoaded', e => { 
  fetch(TRAINERS_URL)
    .then(resp => resp.json())
    .then(json => renderTrainers(json));

  const getPokemons = () => {
    fetch(POKEMONS_URL)
    .then(resp => resp.json())
    .then(json => renderPokemons(json));
  }

  // const renderPokemons = (pokemons) => {
  //   for (pokemon of pokemons) {
  //     const trainerId = pokemon.trainer_id
  //     const trainerDiv = document.getElementById(`${trainerId}`)
      
  //   }
  // }
    
  const renderTrainers = (trainers) => {
    main = document.querySelector('main');
    for (trainer of trainers) {      
      const newDiv = document.createElement('div')
      newDiv.className = 'card'
      newDiv.id = trainer.id

      const newName = ce('p')
      newName.textContent = trainer.name
      newDiv.append(newName)

      const newButton = ce('button')
      newButton.dataset.trainerId = trainer.id
      newButton.textContent = 'Add Pokemon'
      newDiv.append(newButton)
      
      const newUl = ce('ul')
      newDiv.append(newUl)    
      main.append(newDiv)
      console.dir(trainer.pokemons)
    }   
    
  };


});



//       <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
//     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
//     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
//     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
//     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
//   </ul>
// </div>

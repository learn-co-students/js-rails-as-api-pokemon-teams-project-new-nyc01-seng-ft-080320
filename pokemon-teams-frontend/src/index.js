document.addEventListener("DOMContentLoaded",function(e){

    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const main = document.querySelector("main")
    
    
    
    // When a user loads the page, they should see all trainers, 
    // with their current team of Pokemon.
    
    

    function getTrainers(){
        fetch(TRAINERS_URL)
        .then(res => res.json())
        .then(trainers => {renderTrainers(trainers)
            addPokemon(trainers)
            getPokemons();}
        
    )}

    function getPokemons(){
        fetch(POKEMONS_URL)
        .then(resp => resp.json())
        .then(pokemons => renderPokemons(pokemons))
    }
        
           
    function renderTrainers(trainers){
        trainers.forEach(element => {
                let trainerDiv = document.createElement("div") 
                    trainerDiv.className = "card"
                    trainerDiv.dataset.id = `${element.id}`
                    trainerDiv.innerHTML =
                        `<p> ${element.name}</p>
                        <button data-trainer-id=${element.id}> Add Pokemon </button>
                        <ul></ul>
                        `
            main.append(trainerDiv)  
        }) 
    };
           
    function renderPokemons(data){
        // console.log(data)
        data.forEach(element => {
            let li = document.createElement('li')
            li.innerHTML = `${element.nickname} (${element.species})
            <button class="release" data-pokemon-id="${element.id}">Release</button>
            `
            let trainerDiv = document.querySelector(`[data-id="${element.trainer_id}"]`)
            trainerDiv.append(li)
            // console.log(trainerDiv)
        })
    }
    
    
    
// Whenever a user hits "Add Pokemon" and they have space on their team, 
// they should get a new Pokemon.

function addPokemon(trainers){
    main.addEventListener("click",(e) => {
        // console.dir(e.target)
        console.log(trainers)
        if (e.target.innerText === "Add Pokemon"){
            const button = e.target
            console.log(button)
            // trainers.
        }
    })
}







// Whenever a user hits "Release Pokemon" on a specific Pokemon team, 
// that specific Pokemon should be released from the team.

function eventHandler(){
    document.addEventListener('click',(e) => {
        // console.log(e.target)
        if (e.target.className === "release"){
            const removeButton = e.target
            const pokemonId = removeButton.dataset.pokemonId
            console.log("this is my button",removeButton.parentElement) 
            
            fetch(`${POKEMONS_URL}/${pokemonId}`, {
                method: "DELETE"   
            })
            .then(resp => resp.json())
            .then(data => {removeButton.parentElement.remove()
                console.log(data)
            })
            // .catch(error => alert(error.message))

         }
       
    })
}


eventHandler();
// addPokemon();
getTrainers();
// getPokemons();


})
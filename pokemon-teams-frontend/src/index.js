
const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const trainerArray = [
    {
    "id": 1,
    "name": "Prince",
    "pokemons": [
    {
    "id": 1,
    "nickname": "Jarrett",
    "species": "Pidgey",
    "trainer_id": 1
    }
    ]
    },
    {
    "id": 2,
    "name": "Dick",
    "pokemons": [
    {
    "id": 2,
    "nickname": "Rudolf",
    "species": "Rapidash",
    "trainer_id": 2
    },
    {
    "id": 3,
    "nickname": "Eric",
    "species": "Ditto",
    "trainer_id": 2
    }
    ]
    },
    {
    "id": 3,
    "name": "Garry",
    "pokemons": [
    {
    "id": 4,
    "nickname": "Lesli",
    "species": "Parasect",
    "trainer_id": 3
    },
    {
    "id": 5,
    "nickname": "Venita",
    "species": "Eevee",
    "trainer_id": 3
    },
    {
    "id": 6,
    "nickname": "Thanh",
    "species": "Slowpoke",
    "trainer_id": 3
    },
    {
    "id": 7,
    "nickname": "Jewel",
    "species": "Nidoqueen",
    "trainer_id": 3
    },
    {
    "id": 8,
    "nickname": "Gustavo",
    "species": "Dragonite",
    "trainer_id": 3
    }
    ]
    },
    {
    "id": 4,
    "name": "Jason",
    "pokemons": [
    {
    "id": 9,
    "nickname": "Hedwig",
    "species": "Pidgey",
    "trainer_id": 4
    },
    {
    "id": 10,
    "nickname": "Austin",
    "species": "Dratini",
    "trainer_id": 4
    },
    {
    "id": 11,
    "nickname": "Elza",
    "species": "Rhydon",
    "trainer_id": 4
    },
    {
    "id": 12,
    "nickname": "Harriet",
    "species": "Jolteon",
    "trainer_id": 4
    },
    {
    "id": 13,
    "nickname": "Nicky",
    "species": "Cubone",
    "trainer_id": 4
    },
    {
    "id": 14,
    "nickname": "Amos",
    "species": "Sandslash",
    "trainer_id": 4
    }
    ]
    },
    {
    "id": 5,
    "name": "Matt",
    "pokemons": [
    {
    "id": 15,
    "nickname": "Trinidad",
    "species": "Magnemite",
    "trainer_id": 5
    },
    {
    "id": 16,
    "nickname": "Fern",
    "species": "Victreebel",
    "trainer_id": 5
    },
    {
    "id": 17,
    "nickname": "Veta",
    "species": "Dewgong",
    "trainer_id": 5
    },
    {
    "id": 18,
    "nickname": "Sally",
    "species": "Starmie",
    "trainer_id": 5
    },
    {
    "id": 19,
    "nickname": "Milan",
    "species": "Poliwrath",
    "trainer_id": 5
    },
    {
    "id": 20,
    "nickname": "Valentine",
    "species": "Articuno",
    "trainer_id": 5
    }
    ]
    },
    {
    "id": 6,
    "name": "Noah",
    "pokemons": [
    {
    "id": 21,
    "nickname": "Shellie",
    "species": "Jolteon",
    "trainer_id": 6
    }
    ]
    },
    {
    "id": 7,
    "name": "Adam",
    "pokemons": [
    {
    "id": 22,
    "nickname": "Karolyn",
    "species": "Slowpoke",
    "trainer_id": 7
    },
    {
    "id": 23,
    "nickname": "Mariah",
    "species": "Shellder",
    "trainer_id": 7
    },
    {
    "id": 24,
    "nickname": "Nellie",
    "species": "Wartortle",
    "trainer_id": 7
    }
    ]
    },
    {
    "id": 8,
    "name": "Arthur",
    "pokemons": [
    {
    "id": 25,
    "nickname": "Evan",
    "species": "Charmander",
    "trainer_id": 8
    }
    ]
    }
    ]

// let trainerArray = []

document.addEventListener('DOMContentLoaded', function(e){
    // const fetchArray = (url) => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then((data) => {
    //         return trainerArray = data})
    // }
    
    fetchArray(trainerArray)
    // debugger

    const trainersList = document.querySelector("main")



    
    const renderTrainers = (trainerArray) => {
        for (let i = 1; i < trainerArray.length; i++) {
            renderTrainer(trainerArray[i])
        }
    }

    const renderTrainer = (trainerObj) => {
        

        const trainerCard = document.createElement('div')
        trainerCard.classList.add('card')
        trainerCard.dataset.id = trainerObj.id

        const newP = document.createElement('p')
        newP.innerHTML = `${trainerObj.name}`
        trainerCard.append(newP)
        
        const newButton = document.createElement('button')
        newButton.innerHTML = `<button data-trainer-id="${trainerObj.id}">Add Pokemon</button>`
        const pokemonCards = document.createElement('ul')
        trainerCard.append(pokemonCards)
        trainerCard.append(newButton)

        trainersList.append(trainerCard)

        const pokemonArray = trainerObj.pokemons
        
        return renderPokemon(pokemonArray, trainerObj)
    }

    const renderPokemon = (pokemonArray, trainerObj) => {
        const currentTrainerCard = document.querySelector(`[data-id~='${trainerObj.id}']`)
        const pokemonList = currentTrainerCard.querySelector('ul')
        
        for(let i = 0; i < pokemonArray.length; i++ ){
            newPokemon = document.createElement("li")
            newPokemon.innerHTML = `${pokemonArray[i].nickname} (${pokemonArray[i].species}) <button class="release" data-pokemon-id="${pokemonArray[i].id}">Release</button>`
            pokemonList.append(newPokemon)    
        }
        return pokemonList
    }
    
    
    // fetchArray(TRAINERS_URL)
    renderTrainers(trainerArray)
})

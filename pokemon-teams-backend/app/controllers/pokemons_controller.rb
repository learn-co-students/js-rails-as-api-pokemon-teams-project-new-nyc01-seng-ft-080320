class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all 
        render json: pokemons
    end

    def show
        pokemon = Pokemon.find_by(id: params[:id])
        render json: pokemon
    end

    def create
        pokemon = Pokemon.create(pokemon_params)
        render json: pokemon 
    end

    def update
        pokemon = Pokemon.find_by(id: params[:id])
        render json: pokemon
    end

    def destroy
        pokemon = Pokemon.find_by(id: params[:id])
        if post.destroy 
            render json: {status: 'successful'}
        else
            render json: {error: 'process not completed'}
        end
    end

    private

    def pokemon_params
        params.permit(:species, :nickname, :trainer_id)
    end

end

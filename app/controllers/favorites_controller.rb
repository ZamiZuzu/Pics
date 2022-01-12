class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def create
        created_favorite = Favorite.create(favorite_params)
        render json: created_favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(params[:id])
        destroyed_favorite = favorite.destroy
        render json: destroyed_favorite, status: :no_content
    end
    
        private

end

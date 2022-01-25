class FavoritesController < ApplicationController

    def index
        favorites = Favorite.all
        render json: favorites, status: :ok
    end

    def create
        created_favorite = Favorite.create(user_id: params[:user_id], image_id: params[:image_id])
        user = User.find(params[:user_id])   
        if created_favorite.valid?
            render json: user, status: :created
        else
            favorite = Favorite.find_by(user_id: params[:user_id], image_id: params[:image_id])
            delete = Favorite.delete(favorite.id)
            render json: user, status: :created
        end
    end

    def destroy
        favorite = Favorite.find(params[:id])
        destroyed_favorite = favorite.destroy
        render json: destroyed_favorite, status: :no_content
    end
    
        private
        
        def favorite_params
            params.permit(:user_id, :image_id)
        end
end

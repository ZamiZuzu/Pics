class DislikesController < ApplicationController

    def index
        dislikes = Dislike.all
        render json: dislikes, status: :ok
    end

    def create
        created_dislike = Dislike.create(dislike_params)
        render json: created_dislike, status: :created
    end

    def destroy
        dislike = Dislike.find(params[:id])
        destroyed_dislike = dislike.destroy
        render json: destroyed_dislike, status: :no_content
    end
    
        private

end

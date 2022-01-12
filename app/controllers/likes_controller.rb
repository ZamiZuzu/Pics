class LikesController < ApplicationController

    def index
        likes = Like.all
        render json: likes, status: :ok
    end

    def create
        created_like = Like.create(like_params)
        render json: created_like, status: :created
    end

    def destroy
        like = Like.find(params[:id])
        destroyed_like = like.destroy
        render json: destroyed_like, status: :no_content
    end
    
        private

end

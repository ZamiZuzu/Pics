class LikesController < ApplicationController

    def index
        likes = Like.all
        render json: likes, status: :ok
    end

    def create
        created_like = Like.create(user_id: params[:user_id], image_id: params[:image_id])
        user = User.find(params[:user_id])
        if created_like.valid?
            associated_dislike = Dislike.find_by(user_id: params[:user_id], image_id: params[:image_id])
            if associated_dislike.present?
                Dislike.delete(associated_dislike.id)
            end
            render json: user, status: :created
        else
            like = Like.find_by(user_id: params[:user_id], image_id: params[:image_id])
            delete = Like.delete(like.id)
            render json: user, status: :created
        end
    end

    def destroy
        like = Like.find(params[:id])
        destroyed_like = like.destroy
        render json: destroyed_like, status: :no_content
    end
    
        private

    def like_params
        params.permit(:user_id, :image_id)
    end

end

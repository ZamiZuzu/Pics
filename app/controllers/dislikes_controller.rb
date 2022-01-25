class DislikesController < ApplicationController

    def index
        dislikes = Dislike.all
        render json: dislikes, status: :ok
    end

    def create
        created_dislike = Dislike.create(dislike_params)
        user = User.find(params[:user_id])
        if created_dislike.valid?
            associated_like = Like.find_by(user_id: params[:user_id], image_id: params[:image_id])
            if associated_like.present?
                Like.delete(associated_like.id)
            end
            render json: user, status: :created
        else
            dislike = Dislike.find_by(user_id: params[:user_id], image_id: params[:image_id])
            delete = Dislike.delete(like.id)
            render json: user, status: :created
        end
    end

    def destroy
        dislike = Dislike.find(params[:id])
        destroyed_dislike = dislike.destroy
        render json: destroyed_dislike, status: :no_content
    end
    
        private
        
        def dislike_params
            params.permit(:user_id, :image_id)
        end

end

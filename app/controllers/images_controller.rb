class ImagesController < ApplicationController

    skip_before_action :authorized, only: :index
    
    def index   
        images = Image.all
        render json: images, status: :ok
    end
    
    def create
        created_image = Image.create(user_id: params[:user_id], title: params[:title], picture: params[:picture])
        user = User.find(params[:user_id])
        render json: user, status: :created
    end

    def destroy
        destroyed_image = image.destroy
        user = User.find(params[:user_id])
        render json: user, status: :ok
    end
    
        private

    def image_params
        params.permit(:title, :user_id, :picture)
    end

    def image
        Image.find(params[:id])
    end

end

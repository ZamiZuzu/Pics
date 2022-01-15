class ImagesController < ApplicationController
    skip_before_action :authorized, only: :index
    def index   
        images = Image.all
        render json: images, status: :ok
    end

    def show
        render json: image, status: ok
    end
    
    def create
        created_image = Image.create(image_params)
        render json: created_image, status: :created
    end

    def destroy
        destroyed_image = image.destroy
        render json: destroyed_image, status: :no_content
    end
    
        private

    def image_params
        params.permit(:title, :url, :user_id)
    end

    def image
        Image.find(params[:id])
    end

end

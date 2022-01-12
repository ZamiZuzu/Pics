class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        render json: user, serializer: UserWithInfoSerializer, status: :ok
    end
    
    def create
        created_user = User.create(user_params)
        render json: created_user, status: :created
    end

    def destroy
        destroyed_user = User.destroy
        render json: destroyed_user, status: :no_content
    end

    def update
        updated_user = user.update(user_params)
        render json: user, status: :accepted
    end

        private

    def user_params
        params.permit(:username, :email, :password, :bio)
    end

    def user
        User.find(params[:id])
    end
end

class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :authorized, only: :create
    
    def index
        users = User.all
        render json: users, status: :ok
    end

    def show
        if user
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end
    
    def create
        created_user = User.create(user_params)
        if created_user.valid?
          render json: created_user, status: :created
        else
          render json: { errors: created_user.errors.full_messages }, status: :unprocessable_entity
        end
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
        params.permit(:username, :email, :password)
    end

    def user
        User.find(session[:user_id])
    end
end

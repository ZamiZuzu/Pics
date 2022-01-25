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
        if user
            user.destroy
            head :no_content
        else
            render json: {error: "User not found"}, status: :not_found
        end
    end

    def update
        updated_user = user.update(user_params)
        if updated_user
            render json: user
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

        private

    def user_params
        params.permit(:username, :email, :password, :bio, :id)
    end

    def user
        User.find(session[:user_id])
    end
end

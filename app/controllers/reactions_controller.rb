class ReactionsController < ApplicationController

    def index
        reactions = Reaction.all
        render json: reactions, status: :ok
    end

    def create
        created_reaction = Reaction.create(user_id: params[:user_id], image_id: params[:image_id], kind: params[:kind])
        user = User.find(params[:user_id])
        if created_reaction.valid?
            render json: user, status: :created
        else
            reaction = Reaction.find_by(user_id: params[:user_id], image_id: params[:image_id], kind: params[:kind])
            delete = Reaction.delete(reaction.id)
            render json: user, status: :created
        end
    end

    def destroy
        reaction = Reaction.find(params[:id])
        destroyed_reaction = reaction.destroy
        render json: destroyed_reaction, status: :no_content
    end
    
        private

    def reaction_params
        params.permit(:user_id, :image_id, :kind)
    end

end

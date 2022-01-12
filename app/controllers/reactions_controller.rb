class ReactionsController < ApplicationController

    def index
        reactions = Reaction.all
        render json: reactions, status: :ok
    end

    def create
        created_reaction = Reaction.create(reaction_params)
        render json: created_reaction, status: :created
    end

    def destroy
        reaction = Reaction.find(params[:id])
        destroyed_reaction = reaction.destroy
        render json: destroyed_reaction, status: :no_content
    end
    
        private

end

class ListsController < ApplicationController
    def index
        render json: List.all, include: :items
    end


    def create
        list = List.create(list_params)
        render json: list
    end

    def destroy
        list = List.find_by(id: params[:id])
        list.destroy
        render json: list, status: 204
    end


    private
    def list_params
        params.require(:list).permit(:title)
    end
end

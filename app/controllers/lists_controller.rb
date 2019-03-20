class ListsController < ApplicationController
    before_action :find_list, only: [:update, :destroy]


    def index
        render json: List.all, include: :items
    end


    def create
        list = List.create(list_params)
        render json: list, status: 201
    end


    def update
        
    end


    def destroy
        list = List.find_by(id: params[:id])
        list.destroy
        render json: list, status: 204
    end


    private

    def find_list
        @list = List.find_by(id: params[:id])
    end


    def list_params
        params.require(:list).permit(:title, :items)
    end
end

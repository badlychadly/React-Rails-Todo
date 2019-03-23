class ItemsController < ApplicationController
    before_action :find_list

    
    def create
        # binding.pry
        item = @list.items.create(params.require(:item).permit(:name))
        render json: item, status: 201
    end

    def destroy
        # binding.pry
        @list.items.destroy(params[:id])
        render status: 201
    end


    private 

    def find_list
        @list = List.find_by(id: params[:list_id])
    end

end
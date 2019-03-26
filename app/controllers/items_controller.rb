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
        render status: 204
    end

    def update
        item = @list.items.find(params[:id])
        item.update_attributes(checked: !item.checked)
        render json: item, status: 202
    end


    private 

    def find_list
        @list = List.find_by(id: params[:list_id])
    end

end
class ListController < ApplicationController
    def index
        render json: List.all
    end
end

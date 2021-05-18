class Api::OrdersController < ApplicationController

    def create
        @orders = Order.new(order_params)
        if @orders.save
            render json: ["Order successful"], status: 200
        else
            render json: @orders.errors.full_messages, status: 422
        end
    end

    private

    def order_params
        params.require(:order).permit(:token_sym, :order_type, :number, 
            :market_price, :amount, :user_id)
    end
end

Rails.application.routes.draw do
 scope '/api/v1' do
    resources :groceries
 end
end

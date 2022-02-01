Rails.application.routes.draw do
  resources :products
  resources :journeys do
    resources :products
  end
  devise_for :users
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"
end

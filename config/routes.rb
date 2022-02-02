Rails.application.routes.draw do
  delete '/users/sign_out' => 'devise/sessions#destroy'
  resources :products
  resources :journeys do
    resources :products
  end
  devise_for :users
  get 'home/index'
  root "home#index"
  get "/mc", to: "products#mc_json"
end

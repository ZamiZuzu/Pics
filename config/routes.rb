Rails.application.routes.draw do
  resources :reactions, only: [:index, :create, :destroy]
  resources :dislikes, only: [:index, :create, :destroy]
  resources :likes, only: [:index, :create, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :images, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

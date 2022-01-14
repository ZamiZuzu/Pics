Rails.application.routes.draw do
  resources :reactions, only: [:index, :create, :destroy]
  resources :dislikes, only: [:index, :create, :destroy]
  resources :likes, only: [:index, :create, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :images, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy, :update]

  resources :sessions
end

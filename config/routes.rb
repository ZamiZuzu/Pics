Rails.application.routes.draw do
  resources :reactions, only: [:index, :create, :destroy]
  resources :dislikes, only: [:index, :create, :destroy]
  resources :likes, only: [:index, :create, :destroy]
  resources :favorites, only: [:index, :create, :destroy]
  resources :images, only: [:index, :show, :create, :destroy]
  resources :users, only: [:show, :create, :destroy, :update]

  resources :sessions
  get "/auth", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

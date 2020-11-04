Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do 
      get 'user_micros/:puzzle_date', to: 'user_micros#show', as: 'micro_fetch'
      patch 'user_micros/:id', to: 'user_micros#update', as: 'micro_update'
    end
    get 'micros/:puzzle_date', to: 'micros#show', as: 'micro_fetch_author'
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root" 
end

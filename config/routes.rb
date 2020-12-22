Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update] do 
      get 'user_dailies/:wordcross_date', to: 'user_dailies#show', as: 'daily_fetch'
      patch 'user_dailies/:id', to: 'user_dailies#update', as: 'daily_update'
      get 'user_micros/:wordcross_date', to: 'user_micros#show', as: 'micro_fetch'
      patch 'user_micros/:id', to: 'user_micros#update', as: 'micro_update'
    end
    get 'dailies/:wordcross_date', to: 'dailies#show', as: 'daily_fetch_author'
    get 'micros/:wordcross_date', to: 'micros#show', as: 'micro_fetch_author'
    resource :session, only: [:create, :destroy]
  end
  root to: "static_pages#root" 
end

Rails.application.routes.draw do
  namespace :api do
    # resources :foods

    get 'foods', to: 'foods#index'
    get 'foods/:id', to: 'foods#show'
    post 'foods', to: 'foods#create'
    put 'foods/:id', to: 'foods#update'
    delete 'foods/:id', to: 'foods#destroy'
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

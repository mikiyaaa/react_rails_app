Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: redirect('./todos')

  get 'todos', to: 'site#index'
  get 'todos/new', to: 'site#index'
  get 'todos/:id/edit', to: 'site#index'

  namespace :api do
    namespace :v1 do
      resources :todos, only: %i[index, show, create, upadte, destroy]
      delete '/todos/destroy_all', to: 'todos#destroy_all'
    end
  end
end

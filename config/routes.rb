Rails.application.routes.draw do
  get 'home/index'
  root "home#index"
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    passwords:  'users/passwords',
    registrations:  'users/registrations'
  }
  devise_for :stylers, controllers: {
    sessions: 'stylers/sessions',
    passwords:  'stylers/passwords',
    registrations:  'stylers/registrations'
  }
end

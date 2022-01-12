class User < ApplicationRecord
    has_many :images
    has_many :favorites
    has_many :likes
    has_many :dislikes
    has_many :favorites, through: :images
    has_many :likes, through: :images
    has_many :dislikes, through: :images

end

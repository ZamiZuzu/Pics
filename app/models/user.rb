class User < ApplicationRecord
    has_many :images, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :dislikes, dependent: :destroy
    has_many :reactions, dependent: :destroy
    # has_many :favorites, through: :images
    # has_many :likes, through: :images
    # has_many :dislikes, through: :images

    has_secure_password
    validates :username, presence: true, uniqueness: true
end

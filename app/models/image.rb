class Image < ApplicationRecord
    belongs_to :user
    
    has_many :favorites, dependent: :destroy
    has_many :likes, dependent: :destroy
    has_many :dislikes, dependent: :destroy

    has_one_attached :picture
end
